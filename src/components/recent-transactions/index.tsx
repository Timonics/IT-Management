import { recentTransactions } from "@/dummyData/recenttransactions";
import React from "react";

const RecentTransactions = () => {
  const recenttransactionsElements = recentTransactions.map((items) => (
    <div className="grid grid-cols-5 urban text-sm">
      <p>{items.transactionID}</p>
      <p>{items.type}</p>
      <p>{items.amount}</p>
      <p>{items.date}</p>
      <p>{items.status}</p>
    </div>
  ));
  return (
    <div className="p-4 flex flex-col gap-4 bg-[#f1f1f1] rounded-3xl shadow-md">
      <h2 className="urban text-2xl">RecentTransactions</h2>
      <div className="space-y-2">
        <div className="grid grid-cols-5 urban">
          <p>Transaction ID</p>
          <p>Type</p>
          <p>Amount</p>
          <p>Date</p>
          <p>Status</p>
        </div>
        <div className="space-y-4">{recenttransactionsElements}</div>
      </div>
    </div>
  );
};

export default RecentTransactions;
