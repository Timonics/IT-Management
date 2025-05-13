import { analytics } from "@/dummyData/analytics";
import React from "react";

const Analytics = () => {
  const analyticsElements = analytics.map((item) => (
    <div className="rounded-2xl bg-white/60 shadow-md p-4 flex flex-col gap-2 justify-center" key={item.name}>
      <div className="size-[40px] rounded-full bg-gray-300 mb-4">{item.icon}</div>
      <p className="text-sm font-semibold urban">{item.name}</p>
      <p className="opensans font-light">{item.amount}</p>
    </div>
  ));
  return (
    <div className=" rounded-3xl bg-[#f1f1f1]/60 shadow-md grid grid-cols-4 grid-row-2 gap-2 p-3">
      {analyticsElements}
    </div>
  );
};

export default Analytics;
