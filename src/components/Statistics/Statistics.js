import React from "react";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const Statistics = () => {
  const data = useLoaderData();
  console.log(data.data);

  return (
    <div className="max-w-xl mx-auto py-10">
      <BarChart width={500} height={400} data={data.data}>
        <Bar dataKey="total" fill="#570DF8" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </BarChart>
    </div>
  );
};

export default Statistics;
