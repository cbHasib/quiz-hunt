import React from "react";
import { useNavigate } from "react-router-dom";

const QuizCard = ({ quiz }) => {
  const navigate = useNavigate();
  const quizHandler = (id) => {
    navigate(`/quiz/${id}`);
  };
  const { id, name, logo, total } = quiz;
  return (
    <div className="card card-compact w-full bg-base-100 shadow-md border border-base-300 max-w-xs overflow-hidden">
      <figure>
        <img
          src={logo}
          alt="Shoes"
          className="w-full h-full shadow-md object-cover bg-neutral rounded-2xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center">{name}</h2>
        <div className="card-actions justify-between items-center">
          <p className="font-medium">
            Total Quiz: <span className="text-primary">{total}</span>
          </p>
          <button
            onClick={() => quizHandler(id)}
            className="btn btn-primary btn-sm"
          >
            Start Practice
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
