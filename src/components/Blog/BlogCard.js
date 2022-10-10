import React from "react";

const BlogCard = ({blog}) => {
  const handleBlog = (slug) => {
    console.log(slug);
  };

  const { id, image, question } = blog;
  return (
    <div className="card card-compact w-full bg-base-100 shadow border border-base-300">
      <figure>
        <img className="w-full h-48 object-cover" src={image} alt={question} />
      </figure>
      <div className="card-body justify-between">
        <h2 className="card-title justify-center">{question}</h2>
        <div className="card-actions justify-end">
          <label
            onClick={() => handleBlog(id)}
            htmlFor="my-modal-3"
            className="btn btn-primary w-full"
          >
            Get Answer
          </label>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
