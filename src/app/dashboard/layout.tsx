"use client";

import Header from "@/components/header";
import Nav from "@/components/nav";
import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-4 h-screen">
      <div className={`py-1 absolute top-0 bottom-0 max-md:hidden`}>
        <Nav />
      </div>
      <div className="flex-6 py-4 ml-2 md:ml-24">
        <Header />
        <div className="h-[calc(100vh-80px)] md:h-[calc(100vh-100px)] border overflow-auto scrollbar no-scroll mr-2 rounded-3xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
