"use client";
import React, { useEffect, useState } from 'react'
import { type Blog } from '../../../src/API';
import { Toast } from '@/components/toast';
import { s3baseUrl } from '@/components/helper';
import { generateClient } from 'aws-amplify/api';
import { listBlogs, } from '@/graphql/queries';
import { deleteBlog } from '@/graphql/mutations';
import { remove } from 'aws-amplify/storage';
import { extractImageData } from '@/components/helper';
import { useRouter } from 'next/navigation';

const client = generateClient();

const BlogsAdminPage = () => {
    const router = useRouter();
    const [blogs, setBlogs] = useState<Blog[] | []>([]);
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const result = await client.graphql({ query: listBlogs });
                setBlogs(result.data.listBlogs.items);
            } catch (error) {
                console.log('Error: ', error);
            }
        }
        fetchBlogs();
    }, []);

    const blogDeleteHandler = async (id: string, content: string | null | undefined) => {
        try {
            const result = await client.graphql({
                query: deleteBlog,
                variables: {
                    input: {
                        id
                    }
                }
            });
            if (content) {
                const imgData = extractImageData(content);
                for (let img of imgData) {
                    let path = img.src.replace(`${s3baseUrl}/`, '');
                    try {
                        await remove({
                            path: path,

                        });
                    } catch (error) {
                        Toast.fire({
                            icon: 'error',
                            title: 'Failed to delete image'
                        });
                        console.log('Error ', error);
                    }
                }
            }
            Toast.fire({
                icon: 'success',
                title: 'Blog deleted successfully'
            });
        } catch (error) {
            console.log('Error: ', error);
            Toast.fire({
                icon: 'error',
                title: 'Failed to delete blog'
            });
        }
    }

    return (
        <main className="flex flex-col items-start justify-between p-24">
            <div className="w-full p-6 bg-transparent">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-white">Blogs</h2>
                    <a
                        className='bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-lg duration-500 hover:bg-primary hover:shadow-2xl hover:scale-105'
                        href="/admin/blogs/new"
                    >Create New Blog</a>
                </div>
                {blogs.length === 0 &&
                    <div className='text-center mt-4 text-white font-bold'>There's no blogs yet</div>
                }
                <div className='w-full'>
                    {blogs.map((blog: Blog) => (
                        <div
                            key={blog.id}
                            className="w-full p-6 bg-white/30 rounded-lg shadow-lg mt-4 hover:bg-primary hover:text-white hover:cursor-pointer"
                            onClick={() => router.push(`/admin/blogs/${blog.id}`)}
                        >
                            <div className="flex justify-between items-center">
                                <h4 className="text-lg font-bold">{blog.title}</h4>
                                <button
                                    className="bg-transparent hover:bg-red-500 text-red-100 font-semibold hover:text-white py-2 px-4 border border-red-100 hover:border-transparent rounded"
                                    onClick={() => blogDeleteHandler(blog.id, blog.content)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default BlogsAdminPage