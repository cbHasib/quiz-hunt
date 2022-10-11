import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuestion from "./SingleQuestion";

const Question = () => {
  const questionsData = useLoaderData();
  const { name, questions } = questionsData.data;
  return (
    <div className="p-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14">
      <h1 className="text-center text-4xl font-semibold">
        Quiz For <span className="text-primary">{name}</span>
      </h1>

      <div className="py-20 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {questions.map((question, idx) => (
          <SingleQuestion
            singleQuestion={question}
            key={question.id}
            serial={idx}
          ></SingleQuestion>
        ))}
      </div>
    </div>
  );
};

export default Question;
