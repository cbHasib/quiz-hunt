import React, { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

const SingleBlog = () => {
  const blog = useLoaderData();
  const { question, answer, image } = blog;

  useEffect(() => {
    document.title = `${question} - QuizHunt`;
  }, [question]);
  return (
    <div className="p-3 lg:p-10 bg-base-200">
      <div className="w-[95%] lg:w-[70%] mx-auto rounded-2xl overflow-hidden pb-20 shadow-md bg-base-100">
        <img
          className="shadow border w-full h-96 object-cover rounded-t-2xl"
          src={`${image}`}
          alt={question}
        />
        <div className="px-10 lg:px-20">
          <h1 className="text-2xl lg:text-4xl font-semibold mt-10">
            {question}
          </h1>
          <div className="py-10 flex justify-between">
            <Link to="/about" className="text-md lg:text-lg">
              Hasibul Hasan
            </Link>
            <p className="text-md lg:text-lg">2 min read</p>
          </div>
          <div className="">
            <p>{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
