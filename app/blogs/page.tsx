"use client";
import React, { useEffect, useState } from 'react'
import { type Blog } from '../../src/API';
import { Toast } from '@/components/toast';
import { s3baseUrl } from '@/components/helper';
import { generateClient } from 'aws-amplify/api';
import { listBlogs, } from '@/graphql/queries';
import { deleteBlog } from '@/graphql/mutations';
import { remove } from 'aws-amplify/storage';
import { extractImageData } from '@/components/helper';
import { useRouter } from 'next/navigation';

const client = generateClient();

function BlogsPage() {
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

    return (
        <main className="flex flex-col items-center justify-between p-24">
            <div className="w-full p-6 bg-white/30 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-white">Blogs List</h2>
                {blogs.map((blog: Blog) => (
                    <div className="mx-auto flex text-white overflow-hidden m-4">
                        <div className="flex-shrink-0">
                            <img className="h-full w-48 object-cover" src="https://yenwebsitebucket83ca8-dev.s3.ap-southeast-2.amazonaws.com/public/files/image-1720851093705-0.png" />
                        </div>
                        <div className="px-16 py-4 flex flex-col justify-between">
                            <div>
                                <div className="font-bold text-xl mb-2">{blog.title}</div>
                                <p className="text-gray-700 text-base">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's sta
                                </p>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </main>
    )
}

export default BlogsPage