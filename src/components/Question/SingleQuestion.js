import React, { useState } from "react";
import { toast } from "react-toastify";
import AnswerOption from "./AnswerOption";
import "./SingleQuestion.css";

const SingleQuestion = ({ singleQuestion, serial }) => {
  const { correctAnswer, options, question } = singleQuestion;
  const [selectAnswer, setSelectAnswer] = useState("");
  const [viewAnswer, setViewAnswer] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  const showAnswer = () => {
    setViewAnswer(correctAnswer);
  };

  const answerHandler = (option) => {
    if (option === correctAnswer) {
      toast.success("Congratulations! Your answer is correct!");
      setSelectAnswer(option);
      setCorrectCount(correctCount + 1);
    } else {
      toast.error("Sorry, You entered a wrong answer!");
      setSelectAnswer(option + "wrong");
      setWrongCount(wrongCount + 1);
    }
  };
  return (
    <div>
      <div className="quiz_box w-full bg-base-200 text-base-content shadow-md h-full">
        <section className="flex h-full flex-col">
          <div className="relative">
            <div className="que_text flex gap-2 mr-8">
              <span className="font-semibold text-lg">{serial + 1}.</span>
              <span
                className="font-semibold text-lg"
                dangerouslySetInnerHTML={{ __html: question }}
              ></span>
            </div>
            <div
              onClick={() => showAnswer(correctAnswer)}
              className="absolute top-0 right-0 hover:text-primary hover:cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
          <div className="option_list">
            {options.map((option, idx) => (
              <AnswerOption
                answerHandler={answerHandler}
                key={idx}
                option={option}
                selectAnswer={selectAnswer}
                viewAnswer={viewAnswer}
              ></AnswerOption>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SingleQuestion;
