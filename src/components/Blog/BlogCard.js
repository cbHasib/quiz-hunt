import React from "react";
import { useNavigate } from "react-router-dom";
import "./BlogCard.css";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  const handleBlog = (slug) => {
    navigate(`/blog/post/${slug}`);
  };

  const { slug, image, question } = blog;
  return (
    <div
      onClick={() => handleBlog(slug)}
      className="card card-compact w-full bg-base-100 shadow-lg overflow-hidden border blogCard cursor-pointer"
    >
      <figure className="relative thumb-blogCard overflow-hidden">
        <img
          className="h-[300px] w-full object-cover"
          src={`${image}`}
          alt={question}
        />
      </figure>
      <div className="badge badge-secondary absolute top-5 left-5 bg-opacity-75 p-4">
        categoryName
      </div>

      <div className="card-body">
        <h2 className="card-title">{question}</h2>
        <hr className="bg-gray-400 w-full h-[1px]" />
        <div className="flex justify-between items-center">
          <span className="m-0 p-0 text-base">Hasibul Hasan</span>
          <span className="m-0 p-0 text-base">Oct 11, 2022</span>
        </div>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default BlogCard;
