"use client";
import React, { useState } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { uploadData } from 'aws-amplify/storage';
import { Toast } from '@/components/toast';
import { s3baseUrl } from '@/components/helper';
import { generateClient } from 'aws-amplify/api';
import { createBlog } from '@/graphql/mutations';
import { extractImageData } from '@/components/helper';
import { useRouter } from 'next/navigation';

const client = generateClient();

const CreateNewBlogPage = () => {
    const router = useRouter();
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');

    const handleEditorChange = async (content, editor) => {
        setContent(content);
    };

    const setupEditor = (editor) => {
        // Function to add unique IDs to img elements
        function addUniqueIdToImages() {
            const images = editor.dom.select('img');
            images.forEach((img, index) => {
                if (!img.id) {
                    img.id = 'image-' + Date.now() + '-' + index;
                }
            });
        }

        // Add ID to images when content is changed
        editor.on('NodeChange', function (e) {
            addUniqueIdToImages();
        });

        // Add ID to images when content is pasted
        editor.on('PastePostProcess', function (e) {
            addUniqueIdToImages();
        });
    };

    const blogCreateHandler = async (title: string, content: string) => {
        try {
            const result = await client.graphql({
                query: createBlog,
                variables: {
                    input: {
                        title,
                        content
                    }
                }
            });
            console.log('Success: ', result);
            Toast.fire({
                icon: 'success',
                title: 'Blog created successfully'
            });
            router.push('/admin/blogs');
        } catch (error) {
            console.log('Error: ', error);
            Toast.fire({
                icon: 'error',
                title: 'Failed to create blog'
            });
        }
    }

    const handleSave = async () => {

        let originalContent = content;
        const imgData = extractImageData(content);
        for (let img of imgData) {
            const blob = await fetch(img.src).then(res => res.blob())
            const imgId = img.self.id;
            let filename = ""
            if (blob.type === 'image/jpeg') {
                console.log('This is a jpeg image');
                filename = `${imgId}.jpg`;
            }
            else if (blob.type === 'image/png') {
                console.log('This is a png image');
                filename = `${imgId}.png`;
            }
            else {
                console.log('This is not a jpeg or png image');
                Toast.fire({
                    icon: 'error',
                    title: 'This is not a jpeg or png image'

                })
                continue;
            }
            try {
                const result = await uploadData({
                    path: `public/files/${filename}`,
                    data: blob,
                }).result;
                console.log('Succeeded: ', result);
                // replace the content with the new URL
                const newSrc = `${s3baseUrl}/public/files/${filename}`;
                console.log(img.src)
                originalContent = originalContent.replace(img.src, newSrc);

            } catch (error) {
                console.log('Error : ', error);
            }
        }
        console.log(originalContent)

        //Save the blog
        const res = await blogCreateHandler(title, originalContent);
        console.log(res);
    }
    return (
        <main className="flex flex-col items-start justify-between p-24">
            <div className="w-full p-6 bg-white/30 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold">Create New Blog</h2>
                    <a
                        className='bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-lg duration-500 hover:bg-primary hover:shadow-2xl hover:scale-105'
                        href="/admin/blogs"
                    >Back to Blogs list</a>
                </div>
                <label className="block text-md font-medium text-gray-700">
                    Title
                </label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    className="mt-1 p-2 w-1/2 border border-gray-300 rounded-lg mb-4"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <Editor
                    id="my_editor"
                    apiKey="xbx2j26ifaboz5v7grfrpn00b3uy2wgbtfk3v1j259qor0jv" // Replace with your TinyMCE API key
                    initialValue=""
                    init={{
                        setup: setupEditor,
                        height: 500,
                        menubar: false,
                        toolbar:
                            'undo redo | formatselect | bold italic backcolor | \
                            alignleft aligncenter alignright alignjustify | \
                            bullist numlist outdent indent | removeformat | help'
                    }}
                    onEditorChange={handleEditorChange}
                />

                <button
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </main>
    )
}

export default CreateNewBlogPage