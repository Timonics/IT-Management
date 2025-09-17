"use client";

import useAuthStore from "@/stores/authStore";
import React from "react";

const Login = () => {
  const { setIsAuthenticated } = useAuthStore();

  return (
    <section className="p-2 text-xl sm:text-2xl flex flex-col gap-1">
      <h1 className="font-medium urban text-2xl min-[430px]:text-[36px]">
        Welcome Back
      </h1>
      <p className="text-sm opensans font-light">
        Log in to access your account
      </p>
      <div className="mt-4 space-y-3">
        <div className="space-y-1">
          <p className="text-xs ml-3 opensans font-medium">Email</p>
          <input
            className="border outline-[#2576eec9] border-[#888884] urban p-2 rounded-lg w-full text-xs pl-4"
            type="email"
            placeholder="Email Address"
          />
        </div>
        <div className="space-y-1">
          <p className="text-xs ml-3 opensans font-medium">Password</p>
          <input
            className="border outline-[#2576eec9] border-[#888884] urban p-2 rounded-lg w-full text-xs pl-4"
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          className="urban w-full p-3 rounded-lg mt-4 bg-black font-bold text-[#97cff5c9] hover:bg-[#97cff5c9] hover:text-black hover:font-bold transition-all ease-in-out text-sm cursor-pointer"
          onClick={() => setIsAuthenticated(true)}
        >
          Sign in
        </button>
      </div>
      <div className="text-sm">
        {/* <p className="text-center text-xs my-2 urban italic">Or sign in with</p>
        <div className="flex">
          <button className="bg-white w-full p-3 rounded-xl urban font-bold text-[16px]">
            Google
          </button>
        </div> */}
        {/* <p className="text-center mt-4 opensans text-xs">
          {`Don't`} have an account?{" "}
          <Link
            href={"signup"}
            className="font-medium urban underline underline-offset-2 text-base cursor-pointer"
          >
            Sign Up
          </Link>
        </p> */}
      </div>
    </section>
  );
};

export default Login;
