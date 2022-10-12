import React from "react";

const AnswerOption = ({ answerHandler, option, viewAnswer, selectAnswer }) => {
  let viewClass = "";
  if (viewAnswer === option) {
    viewClass = "correct";
  } else {
    viewClass = undefined;
  }
  return (
    <div
      onClick={() => answerHandler(option)}
      className={`option ${selectAnswer === option && "correct disabledOpt"} ${
        selectAnswer === option + "wrong" && "incorrect disabledOpt"
      } ${viewClass}`}
    >
      <span>{option}</span>
    </div>
  );
};

export default AnswerOption;
