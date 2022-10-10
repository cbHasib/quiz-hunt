import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import QuizCard from "./QuizCard";

const Quiz = (props) => {
  const [quizData, setQuizData] = useState([]);
  const loadData = useLoaderData();
  const propsData = props.quizData;

  useEffect(() => {
    if (loadData) {
      setQuizData(loadData.data);
    } else {
      setQuizData(propsData);
    }
  }, [loadData, propsData]);

  return (
    <div className="gap-6 lg:gap-8 px-8 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 justify-center flex flex-wrap">
        {
            quizData.map(quiz=> <QuizCard key={quiz.id} quiz={quiz}></QuizCard>)
        }
    </div>
  );
};

export default Quiz;
