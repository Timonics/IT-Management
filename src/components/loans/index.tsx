import React from "react";
import ButtonSelector from "../button-selector";

const Loans = () => {
  return (
    <div className="bg-[#fff]/70 h-full rounded-3xl p-4 flex flex-col gap-4 items-center">
      <h2 className="urban text-3xl text-start w-full underline underline-offset-4 border-gray-100">
        Loans
      </h2>
      <div className="w-full flex flex-col items-center">
        <ButtonSelector
          description="Month"
          fontSize="10px"
          paddingX="15px"
          paddingY="4px"
        />
      </div>
      <div className="h-[270px] w-full rounded-2xl bg-gray-400 flex flex-col items-center justify-center urban">
        Loans chart comes here
      </div>
      <div className="grid grid-cols-2 grid-rows-4 border p-2 rounded-3xl text-white bg-neutral-800 items-center text-center w-full">
        <p className="p-2 py-4 urban font-medium">Pending Loans</p>
        <p className="p-2 py-4 urban font-thin text-xs">N45,000</p>
        <p className="p-2 py-4 urban font-medium">Active Loans</p>
        <p className="p-2 py-4 urban font-thin text-xs">N543,000</p>
        <p className="p-2 py-4 urban font-medium">Inactive Loans</p>
        <p className="p-2 py-4 urban font-thin text-xs">N653,000</p>
        <p className="p-2 py-4 urban font-medium">Disbursed Loans</p>
        <p className="p-2 py-4 urban font-thin text-xs">N530,000</p>
      </div>
    </div>
  );
};

export default Loans;
