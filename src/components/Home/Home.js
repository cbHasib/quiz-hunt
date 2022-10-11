import React, { useEffect } from "react";
import Quiz from "../Quiz/Quiz";
import Hero from "./Hero";

const Home = () => {
  useEffect(() => {
    document.title = "QuizHunt - Gain Extra Knowledge with QuizHunt";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero></Hero>
      <div className="bg-base-200" id="quiz">
        <Quiz></Quiz>
      </div>
    </div>
  );
};

export default Home;
