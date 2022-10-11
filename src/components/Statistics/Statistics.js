import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = useLoaderData();
  useEffect(() => {
    document.title = "Statistics - QuizHunt";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-8 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-10">
        Quiz Statistics on Quiz<span className="text-primary">Hunt</span>
      </h1>
      <ResponsiveContainer className="mx-auto" width="80%" height={400}>
        <BarChart width={500} height={400} data={data.data}>
          <Bar dataKey="total" fill="#570DF8" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
