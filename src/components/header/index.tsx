"use client";

import { usePathname } from "next/navigation";
import React from "react";
import ThemeToggle from "../themeToggle";
import { TbNotification, TbSettings, TbUser } from "react-icons/tb";
import { GrSearch } from "react-icons/gr";

const Header = () => {
  const pathName = usePathname();

  const pathArr = pathName.split("/");
  const headerName = pathArr[1];

  const headerNameArr = headerName.split("");
  const headerNametoFirstCaps = headerNameArr[0].toUpperCase();
  headerNameArr.shift();

  const newheaderNameArr = [headerNametoFirstCaps, ...headerNameArr];
  const newHeaderName = newheaderNameArr.join("");

  return (
    <div className="flex items-center justify-between p-4 mb-2">
      <h2 className="urban text-5xl">{newHeaderName}</h2>
      <div className="flex items-center gap-2">
        <div className="flex items-center p-2 rounded-full bg-[#f1f1f1] urban">
          <input className="outline-none px-2 w-[300px]" placeholder="Search"/>
          <GrSearch size={15}/>
        </div>
        <div className="flex items-center p-3 bg-[#f1f1f1] rounded-full text-xs urban gap-2">
          <TbSettings size={15} /> Settings
        </div>
        <div className="p-3 rounded-full bg-[#f1f1f1]">
          <TbNotification size={15} />
        </div>
        <div className="p-3 rounded-full bg-[#f1f1f1]">
          <TbUser size={15} />
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
