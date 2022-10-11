import React from "react";

const AnswerOption = ({ answerHandler, option, viewAnswer, selectAnswer }) => {
  return (
    <div
      onClick={() => answerHandler(option)}
      className={`option ${selectAnswer === option && "correct"} ${
        selectAnswer === option + "wrong" && "incorrect"
      } ${viewAnswer === option && "correct"}`}
    >
      <span>{option}</span>
    </div>
  );
};

export default AnswerOption;
