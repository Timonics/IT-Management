"use client";

import Header from "@/components/header";
import Nav from "@/components/nav";
import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-4 h-screen">
      <div className={`py-1 absolute top-0 bottom-0`}>
        <Nav />
      </div>
      <div className="flex-6 py-4 ml-24">
        <Header />
        <div className="h-[calc(100vh-110px)] overflow-auto scrollbar no-scroll mr-2 rounded-3xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
