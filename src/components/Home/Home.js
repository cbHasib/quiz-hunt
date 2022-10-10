import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import Hero from "./Hero";

const Home = () => {
  const loadData = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <div className="bg-base-200" id="quiz">
        <Quiz quizData={loadData.data}></Quiz>
      </div>
    </div>
  );
};

export default Home;
