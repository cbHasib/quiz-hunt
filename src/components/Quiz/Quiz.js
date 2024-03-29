import React, { useEffect, useState } from "react";
import QuizCard from "./QuizCard";

const Quiz = () => {
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    document.title = "Quiz - QuizHunt";
    fetch("https://openapi.programming-hero.com/api/quiz")
      .then((res) => res.json())
      .then((data) => setQuizData(data.data));
  }, []);

  return (
    <div className="px-8 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h2 className="font-bold text-4xl mb-10 text-center">
        Practice <span className="text-primary">Quiz</span>
      </h2>
      <div className="gap-6 lg:gap-8 justify-center flex flex-wrap">
        {quizData.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz}></QuizCard>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
