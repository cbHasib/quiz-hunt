import React from "react";
import { toast } from "react-toastify";

const SingleQuestion = ({ singleQuestion }) => {
  console.log(singleQuestion);
  const { correctAnswer, id, options, question } = singleQuestion;
  const alert = () => {
    toast.error("Product Removed!");
  };
  return (
    <div>
      <button onClick={alert}>toast</button>
    </div>
  );
};

export default SingleQuestion;
