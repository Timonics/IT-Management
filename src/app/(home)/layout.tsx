"use client";

import Header from "@/components/header";
import Nav from "@/components/nav";
import useStateStore from "@/stores/statesStore";
import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  const { showNav } = useStateStore();

  return (
    <div className="flex h-screen">
      <div className={`p-4 ${showNav && "flex-1"}`}>
        <Nav />
      </div>
      <div className="flex-6 py-4">
        <Header />
        <div className="h-[calc(100vh-120px)] overflow-auto scrollbar no-scroll mr-2 rounded-3wxl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
