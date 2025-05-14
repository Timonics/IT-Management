"use client";

import { primaryNavItems, secondaryNavItems } from "@/constants/navItems";
import Link from "next/link";
import React from "react";
import { TbLetterJ, TbLogout, TbUser } from "react-icons/tb";

const Nav = () => {
  const primaryNavElements = primaryNavItems.map((item, index) => {
    const Icon = item.icon;
    return (
      <Link
        key={item.name}
        href={item.link}
        className={`flex justify-center hover:bg-gray-200 py-2 rounded-md items-center gap-1 urban cursor-pointer ${
          index == 1 && "mt-4"
        }`}
      >
        <Icon size={22} color="#000" />
      </Link>
    );
  });

  const secondaryNavElements = secondaryNavItems.map((item) => {
    const Icon = item.icon;
    return (
      <Link key={item.name} href={item.link} className="flex hover:bg-gray-200 p-1.5 hover:pl-4 transition-all ease-in-out rounded-md items-center gap-2">
        <Icon size={20} />
        <p className="urban text-xs font-bold">{item.name}</p>
      </Link>
    );
  });

  return (
    <div className="h-full w-14 hover:shadow-2xl hover:w-[300px] transition-all ease-in-out delay-100 p-2 backdrop-blur-sm flex rounded-r-3xl bg-[#fff]/70 shadow-md items-center gap-4 overflow-hidden">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="p-3 bg-[#000] w-fit rounded-full flex justify-center items-center">
          <TbLetterJ size={15} color="#f8d752c9" />
        </div>
        <hr className="border-black/30 border w-full mt-2" />
        <div className="flex flex-col gap-1 mt-4 no-scroll overflow-auto w-full">
          {primaryNavElements}
        </div>
        <TbLogout size={22} className="mt-auto mb-4" />
      </div>
      <div className="border-[1.5px] border-gray-200 bg-white/50 h-full w-full rounded-2xl overflow-auto p-2 no-scroll">
        <div className="flex items-start gap-2">
          <div className="p-3 bg-black/20 rounded-full">
            <TbUser size={20} />
          </div>
          <div>
            <h2 className="outfit font-medium text-lg">Oderinde Michael</h2>
            <p className="opensans text-[9px] font-light">
              Olubiyioderinde7@gmail.com
            </p>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-2 p-2">{secondaryNavElements}</div>
      </div>
    </div>
  );
};

export default Nav;
