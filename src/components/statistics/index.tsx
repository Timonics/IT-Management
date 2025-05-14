import { statisticsData } from "@/dummyData/statisticsData";
import React from "react";

const Statistics = () => {
  const statisticsDataElements = statisticsData.map((data) => (
    <div
      key={data.name}
      className="border p-2 px-4 rounded-full border-black/20 flex items-center justify-between"
    >
      <div className="flex flex-col gap-1">
        <h3 className="urban text-sm">{data.name}</h3>
        <p className="text-xs opensans">{data.amount}</p>
      </div>
      <p className="outfit">{data.changes}</p>
    </div>
  ));
  return (
    <div className="h-full flex gap-1">
      <div className="flex flex-col w-1/2 p-2">
        <h2 className="urban text-3xl mt-2 underline underline-offset-4">
          Statistics
        </h2>
        <div className="mt-4 h-[248px] flex flex-col gap-4 overflow-auto no-scroll">
          {statisticsDataElements}
        </div>
      </div>
      <div className="w-1/2 py-2">
        <div className="h-full rounded-3xl bg-gray-300 flex items-center justify-center urban">
          Statistics Chart comes here
        </div>
      </div>
    </div>
  );
};

export default Statistics;
