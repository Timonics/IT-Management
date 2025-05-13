"use client";

import useAuthStore from "@/stores/authStore";
import React from "react";

const index = () => {
  const { setIsAuthenticated } = useAuthStore();

  return (
    <section className="p-2 text-xl sm:text-2xl flex flex-col gap-1">
      <h1 className="font-medium urban text-3xl min-[430px]:text-[40px]">
        Welcome Back
      </h1>
      <p className="text-sm sm:text-base opensans font-light">
        Log in to access your account
      </p>
      <div className="mt-4 space-y-3">
        <div className="space-y-1">
          <p className="text-sm ml-3 opensans font-medium">Email</p>
          <input
            className="border border-[#888884] urban p-3 rounded-full w-full text-sm pl-4"
            type="email"
            placeholder="Email Address"
          />
        </div>
        <div className="space-y-1">
          <p className="text-sm ml-3 opensans font-medium">Password</p>
          <input
            className="border border-[#888884] urban p-3 rounded-full w-full text-sm pl-4"
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          className="border urban w-full p-3 rounded-full mt-4 bg-black text-white text-[16px] cursor-pointer"
          onClick={() => setIsAuthenticated(true)}
        >
          Sign in
        </button>
      </div>
      <div className="text-sm">
        <p className="text-center text-xs my-2 urban italic">Or sign in with</p>
        <div className="flex">
          <button className="bg-gray-50 w-full p-3 rounded-xl urban font-bold text-[16px]">
            Google
          </button>
        </div>
        <p className="text-center mt-4 opensans text-xs">
          Don't have an account?{" "}
          <span className="font-medium urban underline underline-offset-2 text-base cursor-pointer">
            Sign Up
          </span>
        </p>
      </div>
    </section>
  );
};

export default index;
