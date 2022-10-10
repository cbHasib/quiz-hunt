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

      <div className="py-10">
        <SingleQuestion singleQuestion={questions[0]}></SingleQuestion>
      </div>
    </div>
  );
};

export default Question;
