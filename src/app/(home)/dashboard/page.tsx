import Analytics from "@/components/analytics";
import Loans from "@/components/loans";
import RecentTransactions from "@/components/recent-transactions";
import React from "react";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-7">
      <div className="col-span-5">
        <Analytics />
        <div className="mt-2">
          <RecentTransactions />
        </div>
      </div>
      <div className="col-span-2">
        <Loans />
      </div>
      <div className="col-span-5"></div>
    </div>
  );
};

export default Dashboard;
