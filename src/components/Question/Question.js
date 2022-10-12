import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import SingleQuestion from "./SingleQuestion";

const Question = () => {
  const questionsData = useLoaderData();
  const { name, questions } = questionsData.data;
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  useEffect(() => {
    document.title = `Quiz For ${name} - QuizHunt`;
    window.scrollTo(0, 0);
  }, [name]);

  const resetCount = () => {
    toast.success("Resetting All Data", { theme: "dark" });
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const data = [
    { name: "Correct", value: correctCount },
    { name: "Incorrect", value: wrongCount },
  ];

  const COLORS = ["#00C49F", "#F87272"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="p-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14">
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          Quiz For <span className="text-primary">{name}</span>
        </h1>
        <p className="mt-2 text-lg font-medium text-accent">
          Test your {name} skill by taking this quiz.
        </p>
      </div>

      <div className="grid grid-cols-3 lg:grid-cols-4 gap-5 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 col-span-3">
          {questions.map((question, idx) => (
            <SingleQuestion
              singleQuestion={question}
              key={question.id}
              serial={idx}
              correctCount={correctCount}
              setCorrectCount={setCorrectCount}
              setWrongCount={setWrongCount}
              wrongCount={wrongCount}
            ></SingleQuestion>
          ))}
        </div>
        <div className="sideBar col-span-3 lg:col-span-1 w-full">
          <div className="sticky right-0 top-20 bg-base-100 text-base-content rounded-lg shadow-md py-5 px-2 w-full flex items-center justify-center gap-5 flex-col border border-base-300">
            <div>
              <h2 className="text-3xl font-bold text-center text-primary">
                Your Score
              </h2>
              <div className="mt-2 py-2 px-4 bg-neutral rounded-xl">
                <p className="font-bold text-[#06f3c8]">
                  Total Correct Answer: {correctCount}
                </p>
                <p className="font-bold text-[#ed6e2f]">
                  Total Incorrect Answer: {wrongCount}
                </p>
              </div>
            </div>
            <PieChart width={200} height={200}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
            <h3 className="text-xl text-center">No Tricks, Just Practice.</h3>
            <button onClick={resetCount} className="btn btn-warning w-[80%]">
              Reset All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
