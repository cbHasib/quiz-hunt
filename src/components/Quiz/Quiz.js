import React from "react";
import QuizCard from "./QuizCard";

const Quiz = () => {
  return (
    <div className="grid grid-cols-3 gap-8 max-w-screen-lg py-20 mx-auto">
      <QuizCard></QuizCard>
      <QuizCard></QuizCard>
      <QuizCard></QuizCard>
      <QuizCard></QuizCard>
      <QuizCard></QuizCard>
    </div>
  );
};

export default Quiz;
