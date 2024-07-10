"use client";
import React, { useEffect, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react';

function AdminPage() {
    const [content, setContent] = useState('');

    const handleEditorChange = (content, editor) => {
        setContent(content);
        console.log('Content was updated:', content);
    };


    return (
        <main className="flex flex-col items-center justify-between p-24">
            <div className="w-full p-6 bg-white/30 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Blogs</h2>
                <Editor
                    apiKey="xbx2j26ifaboz5v7grfrpn00b3uy2wgbtfk3v1j259qor0jv" // Replace with your TinyMCE API key
                    initialValue="<p>This is the initial content of the editor</p>"
                    init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar:
                            'undo redo | formatselect | bold italic backcolor | \
                            alignleft aligncenter alignright alignjustify | \
                            bullist numlist outdent indent | removeformat | help'
                    }}
                    onEditorChange={handleEditorChange}
                />

                <button
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Save
                </button>
            </div>
        </main>
    )
}

export default AdminPage