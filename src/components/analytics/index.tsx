import { analytics } from "@/dummyData/analytics";
import React from "react";

const Analytics = () => {
  const analyticsElements = analytics.map((item) => {
    const Icon = item.icon;
    return (
      <div
        className="rounded-2xl bg-white/70 shadow-m p-4 flex flex-col gap-2 justify-center"
        key={item.name}
      >
        <div className="size-[40px] flex items-center justify-center rounded-full bg-black/80 mb-4 text-[#ffe064c9]">
          <Icon />
        </div>
        <p className="font-semibold outfit text-[17px]">{item.name}</p>
        <p className="outfit font-light">{item.amount}</p>
      </div>
    );
  });
  return (
    <div className="grid grid-cols-4 grid-row-2 gap-1">{analyticsElements}</div>
  );
};

export default Analytics;
