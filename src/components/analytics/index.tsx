import { analytics } from "@/dummyData/analytics";
import React from "react";

const Analytics = () => {
  const analyticsElements = analytics.map((item) => (
    <div className="rounded-2xl bg-white/70 shadow-m p-4 flex flex-col gap-2 justify-center" key={item.name}>
      <div className="size-[40px] rounded-full bg-gray-300 mb-4">{item.icon}</div>
      <p className="font-bold urban">{item.name}</p>
      <p className="opensans font-light">{item.amount}</p>
    </div>
  ));
  return (
    <div className="grid grid-cols-4 grid-row-2 gap-1">
      {analyticsElements}
    </div>
  );
};

export default Analytics;
