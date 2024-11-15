import React from "react";
import { type Blog } from "../app/blogs/blog";
import NotFoundImage from "../public/404.png";

interface Props {
  blog: Blog;
}

const Blog: React.FC<Props> = ({ blog }) => {
  return (
    <div className="mx-auto flex overflow-hidden p-0 py-4 lg:py-8">
      <div className="flex-shrink-0">
        {blog.featured_image != "" ? (
          <img
            className="h-24 w-24 lg:h-48 lg:w-48 object-cover"
            src={blog.featured_image}
          />
        ) : (
          <img
            className="h-24 w-24 lg:h-48 lg:w-48 object-cover"
            src={NotFoundImage.src}
          />
        )}
      </div>
      <div className="px-8 flex flex-col justify-between text-white">
        <div>
          <div className="font-bold text-md lg:text-xl mb-2">{blog.title}</div>
          <p className="text-gray-200 text-sm lg:text-base line-clamp-4">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
