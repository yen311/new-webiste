'use client'
import React, { useState } from 'react'


const BlogEditPage = ({ params }) => {
    const [blog, setBlog] = useState({})

    return (
        <div>
            <h1>Edit Blog</h1>
            <p>Blog ID: {params.id}</p>
        </div>
    )
}

export default BlogEditPage