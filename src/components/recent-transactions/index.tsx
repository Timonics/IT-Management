import { recentTransactions } from "@/dummyData/recenttransactions";
import React from "react";

const RecentTransactions = () => {
  const recenttransactionsElements = recentTransactions.map((items, index) => (
    <div key={index} className="grid grid-cols-5 text-xs outfit p-2">
      <p className="p-2">{items.transactionID}</p>
      <p className="p-2">{items.type}</p>
      <p className="p-2">{items.amount}</p>
      <p className="p-2">{items.date}</p>
      <p className="p-2">{items.status}</p>
    </div>
  ));
  return (
    <div className="p-4 flex flex-col justify-center gap-4 rounded-3xl h-full">
      <h2 className="urban text-3xl">Recent Transactions</h2>
      <div className="border rounded-xl">
        <div className="grid grid-cols-5 outfit font-bold p-2">
          <p className="p-2">Transaction ID</p>
          <p className="p-2">Type</p>
          <p className="p-2">Amount</p>
          <p className="p-2">Date</p>
          <p className="p-2">Status</p>
        </div>
        <div className="">{recenttransactionsElements}</div>
      </div>
    </div>
  );
};

export default RecentTransactions;
