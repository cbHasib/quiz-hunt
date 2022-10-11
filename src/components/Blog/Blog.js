import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";

const Blog = () => {
  const blogData = useLoaderData();

  useEffect(() => {
    document.title = "Blog - QuizHunt";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-[5%] py-10 text-center">
      <h2 className="font-bold text-4xl text-primary my-10">
        Recent Blog
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-8 xl:w-[90%] mx-auto">
        {blogData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
