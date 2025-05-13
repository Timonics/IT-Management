"use client";

import { navItems } from "@/constants/navItems";
import useStateStore from "@/stores/statesStore";
import Link from "next/link";
import React from "react";
import { TbMenu3, TbX } from "react-icons/tb";

const Nav = () => {
  const { showNav, setShowNav } = useStateStore();

  const navElements = navItems.map((item) => {
    const Icon = item.icon;
    return (
      <Link
        key={item.name}
        href={item.link}
        className="flex justify-start items-center gap-1 urban bg-gray-300 rounded-full p-3 cursor-pointer shadow-md"
      >
        <Icon size={15} color="#000" />
        <p className={`text-xs ${showNav ? "block" : "hidden"}`}>{item.name}</p>
      </Link>
    );
  });

  return (
    <div className="flex-1 h-full flex flex-col rounded-4xl p-2 bg-[#f1f1f1]/60 shadow-md items-center">
      <div
        className="p-3 bg-black w-fit rounded-full flex justify-center items-center cursor-pointer"
        onClick={() => setShowNav(!showNav)}
      >
        {showNav ? (
          <TbX size={15} color="#f8d752c9" />
        ) : (
          <TbMenu3 size={15} color="#f8d752c9" />
        )}
      </div>
      <div className="flex flex-col gap-4 mt-5 no-scroll overflow-auto w-full">
        {navElements}
      </div>
    </div>
  );
};

export default Nav;
