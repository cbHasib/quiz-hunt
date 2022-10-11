import React, { useEffect, useState } from "react";
import QuizCard from "./QuizCard";

const Quiz = () => {
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Quiz - QuizHunt";
    fetch("https://openapi.programming-hero.com/api/quiz")
      .then((res) => res.json())
      .then((data) => setQuizData(data.data));
  }, []);

  return (
    <div className="gap-6 lg:gap-8 px-8 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 justify-center flex flex-wrap">
      {quizData.map((quiz) => (
        <QuizCard key={quiz.id} quiz={quiz}></QuizCard>
      ))}
    </div>
  );
};

export default Quiz;
