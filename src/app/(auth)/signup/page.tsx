"use client";

import SuccessPopup from "@/components/success-popup";
import Link from "next/link";
import React, { useState } from "react";

const Signup = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <section className="flex flex-col h-[400px] items-center justify-center">
      <div className="flex flex-col min-w-[600px] overflow-auto p-4 rounded-3xl bg-[#97cff5c9]/5 scrollbar">
        <h1 className="font-medium urban text-2xl min-[430px]:text-[36px]">
          Open an account
        </h1>
        <p className="text-sm opensans font-light">Register as a new member</p>
        <div className="grid grid-cols-2 gap-3 gap-y-4 mt-4">
          <div className="space-y-1">
            <p className="text-xs ml-3 opensans font-medium">Lastname</p>
            <input
              className="border border-[#888884] urban p-2 rounded-lg w-full text-xs pl-4"
              type="text"
              placeholder="Lastname"
            />
          </div>
          <div className="space-y-1">
            <p className="text-xs ml-3 opensans font-medium">Firstname</p>
            <input
              className="border border-[#888884] urban p-2 rounded-lg w-full text-xs pl-4"
              type="text"
              placeholder="Firstname"
            />
          </div>
          <div className="space-y-1 col-span-full">
            <p className="text-xs ml-3 opensans font-medium">Email Address</p>
            <input
              className="border border-[#888884] urban p-2 rounded-lg w-full text-xs pl-4"
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div className="space-y-1 col-span-full">
            <p className="text-xs ml-3 opensans font-medium">Address</p>
            <input
              className="border border-[#888884] urban p-2 rounded-lg w-full text-xs pl-4"
              type="text"
              placeholder="Address"
            />
          </div>
          <div className="space-y-1">
            <p className="text-xs ml-3 opensans font-medium">Street Address</p>
            <input
              className="border border-[#888884] urban p-2 rounded-lg w-full text-xs pl-4"
              type="text"
              placeholder="Street Address"
            />
          </div>
          <div className="space-y-1">
            <p className="text-xs ml-3 opensans font-medium">State</p>
            <input
              className="border border-[#888884] urban p-2 rounded-lg w-full text-xs pl-4"
              type="text"
              placeholder="State"
            />
          </div>
          <div className="space-y-1">
            <p className="text-xs ml-3 opensans font-medium">Local Govt</p>
            <input
              className="border border-[#888884] urban p-2 rounded-lg w-full text-xs pl-4"
              type="text"
              placeholder="Local Govt"
            />
          </div>
          <div className="space-y-1">
            <p className="text-xs ml-3 opensans font-medium">Country</p>
            <input
              className="border border-[#888884] urban p-2 rounded-lg w-full text-xs pl-4"
              type="text"
              placeholder="Country"
            />
          </div>
          <div className="space-y-1">
            <p className="text-xs ml-3 opensans font-medium">Unit</p>
            <input
              className="border border-[#888884] urban p-2 rounded-lg w-full text-xs pl-4"
              type="text"
              placeholder="Unit"
            />
          </div>
          <div className="space-y-1">
            <p className="text-xs ml-3 opensans font-medium">Post</p>
            <input
              className="border border-[#888884] urban p-2 rounded-lg w-full text-xs pl-4"
              type="text"
              placeholder="Post"
            />
          </div>
          <div className="space-y-1">
            <p className="text-xs ml-3 opensans font-medium">
              Date Joined DCM/Church
            </p>
            <input
              className="border border-[#888884] urban p-2 rounded-lg w-full text-xs pl-4"
              type="text"
              placeholder="Date Joined DCM/Church"
            />
          </div>
          <div className="space-y-1">
            <p className="text-xs ml-3 opensans font-medium">Branch</p>
            <input
              className="border border-[#888884] urban p-2 rounded-lg w-full text-xs pl-4"
              type="text"
              placeholder="Branch"
            />
          </div>
          <div className="space-y-1">
            <p className="text-xs ml-3 opensans font-medium">Phone</p>
            <input
              className="border border-[#888884] urban p-2 rounded-lg w-full text-xs pl-4"
              type="text"
              placeholder="Phone"
            />
          </div>
          <div className="space-y-1">
            <p className="text-xs ml-3 opensans font-medium">Marital Status</p>
            <input
              className="border border-[#888884] urban p-2 rounded-lg w-full text-xs pl-4"
              type="text"
              placeholder="Marital Status"
            />
          </div>
          <div className="space-y-1">
            <p className="text-xs ml-3 opensans font-medium">Sex</p>
            <input
              className="border border-[#888884] urban p-2 rounded-lg w-full text-xs pl-4"
              type="text"
              placeholder="Sex"
            />
          </div>
          <div className="space-y-1">
            <p className="text-xs ml-3 opensans font-medium">Date of Birth</p>
            <input
              className="border border-[#888884] urban p-2 rounded-lg w-full text-xs pl-4"
              type="text"
              placeholder="Date of Birth"
            />
          </div>
          <div className="space-y-1">
            <p className="text-xs ml-3 opensans font-medium">Bank Name</p>
            <input
              className="border border-[#888884] urban p-2 rounded-lg w-full text-xs pl-4"
              type="text"
              placeholder="Bank Name"
            />
          </div>
          <div className="space-y-1">
            <p className="text-xs ml-3 opensans font-medium">Account No</p>
            <input
              className="border border-[#888884] urban p-2 rounded-lg w-full text-xs pl-4"
              type="text"
              placeholder="Accout No"
            />
          </div>
          <div className="space-y-1">
            <p className="text-xs ml-3 opensans font-medium">Account Name</p>
            <input
              className="border border-[#888884] urban p-2 rounded-lg w-full text-xs pl-4"
              type="text"
              placeholder="Account Name"
            />
          </div>
          <div className="space-y-1">
            <p className="text-xs ml-3 opensans font-medium">
              Name of next of kin
            </p>
            <input
              className="border border-[#888884] urban p-2 rounded-lg w-full text-xs pl-4"
              type="text"
              placeholder="Name of next of kin"
            />
          </div>
          <div className="space-y-1">
            <p className="text-xs ml-3 opensans font-medium">
              Address of next of kin
            </p>
            <input
              className="border border-[#888884] urban p-2 rounded-lg w-full text-xs pl-4"
              type="text"
              placeholder="Address of next of kin"
            />
          </div>
          <div className="space-y-1">
            <p className="text-xs ml-3 opensans font-medium">Relationship</p>
            <input
              className="border border-[#888884] urban p-2 rounded-lg w-full text-xs pl-4"
              type="text"
              placeholder="Relationship"
            />
          </div>
          <div className="space-y-1">
            <p className="text-xs ml-3 opensans font-medium">
              Phone Number of next of kin
            </p>
            <input
              className="border border-[#888884] urban p-2 rounded-lg w-full text-xs pl-4"
              type="text"
              placeholder="Phone Number of next of kin"
            />
          </div>
          <div className="space-y-1">
            <p className="text-xs ml-3 opensans font-medium">
              Registration fee paid (₦)
            </p>
            <input
              className="border border-[#888884] urban p-2 rounded-lg w-full text-xs pl-4"
              type="text"
              placeholder="Registration fee paid (₦)"
            />
          </div>
          <div className="space-y-1">
            <p className="text-xs ml-3 opensans font-medium">
              Upload reciept of payment of registration
            </p>
            <input
              className="border border-[#888884] urban p-2 rounded-lg w-full text-xs pl-4"
              type="text"
              placeholder="Upload reciept of payment of registration"
            />
          </div>
          <div className="space-y-1">
            <p className="text-xs ml-3 opensans font-medium">
              Upload your passport
            </p>
            <input
              className="border border-[#888884] urban p-2 rounded-lg w-full text-xs pl-4"
              type="text"
              placeholder="Upload your passport"
            />
          </div>
          <div className="space-y-1 col-span-full">
            <p className="text-xs ml-3 opensans font-medium">Declaration</p>
            <input
              className="border border-[#888884] urban p-2 rounded-lg w-full text-xs pl-4"
              type=""
              placeholder="Declaration"
            />
          </div>
        </div>
        <button
          className="urban w-full p-3 rounded-lg mt-6 bg-black text-white hover:bg-[#97cff5c9] hover:text-black hover:font-bold transition-all ease-in-out text-sm cursor-pointer"
          onClick={() => setShowSuccess(true)}
        >
          Create Account
        </button>
      </div>
      <p className="text-center mt-2 opensans text-xs">
        Already have an account?{" "}
        <Link
          href={"login"}
          className="font-medium hover:text-[#97cff5c9] urban underline underline-offset-2 text-base cursor-pointer"
        >
          Log in
        </Link>
      </p>
      {showSuccess && <SuccessPopup />}
    </section>
  );
};

export default Signup;
