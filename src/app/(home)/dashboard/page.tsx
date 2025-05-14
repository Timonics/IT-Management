import Analytics from "@/components/analytics";
import Loans from "@/components/loans";
import Statistics from "@/components/statistics";
import React from "react";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-7 grid-rows-2 gap-1">
      <div className="col-span-5 row-span-2 grid grid-rows-2 gap-1">
        <Analytics />
        <div className="row-span-1">
          <Statistics />
        </div>
      </div>
      <div className="col-span-2 row-span-2">
        <Loans />
      </div>
      <div className="col-span-5"></div>
    </div>
  );
};

export default Dashboard;
