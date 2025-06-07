import Analytics from "@/components/analytics";
import RecentTransactions from "@/components/recent-transactions";
import ExpenseOverview from "@/components/statistics";
import React from "react";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-span-full">
        <Analytics />
      </div>
      <div className="col-span-full">
        <ExpenseOverview />
      </div>
      <div className="col-span-full">
        <RecentTransactions />
      </div>
    </div>
  );
};

export default Dashboard;
