"use client";
import React, { useEffect, useState } from "react";
import { type Blog as BlogType } from "./blog";
import Blog from "@/components/Blog";
import { generateClient } from "aws-amplify/api";
import { listBlogs } from "@/graphql/queries";
import { useRouter } from "next/navigation";
import PageWrapper from "@/components/PageWrapper";
import { Divider } from "@aws-amplify/ui-react";

const client = generateClient();

function BlogsPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<BlogType[] | []>([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // const result = await client.graphql({ query: listBlogs });

        const result = await fetch(
          "https://public-api.wordpress.com/rest/v1.1/sites/yen57.wordpress.com/posts",
        );
        const data = await result.json();
        const blogs: Blog[] = data.posts.map((blog): BlogType => {
          return {
            id: blog.ID,
            title: blog.title,
            content: blog.content,
            featured_image: blog.featured_image,
          };
        });
        setBlogs(blogs);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <PageWrapper disappearOnMobile={true} noPadding={true}>
        <h2 className="text-2xl font-bold pb-4 mb-4 border-b border-gray-300 border-dotted">
          Blogs List
        </h2>
        {blogs.map((blog: Blog, index: Number) => {
          if (index == blogs.length - 1) {
            return (
            <a href={`/blogs/${blog.id}`}>
              <Blog key={blog.id} blog={blog} />
            </a>);
          }
          return (
            <a href={`/blogs/${blog.id}`}>
              <Blog key={blog.id} blog={blog} />
              <Divider />
            </a>
          );
        })}
      </PageWrapper>
    </>
  );
}

export default BlogsPage;
