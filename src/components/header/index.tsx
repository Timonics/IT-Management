"use client";

import { usePathname } from "next/navigation";
import React from "react";
import ThemeToggle from "../themeToggle";
import { TbNotification, TbSettings, TbUser } from "react-icons/tb";

const Header = () => {
  const pathName = usePathname();

  const pathArr = pathName.split("/");
  const headerName = pathArr[1];

  const headerNameArr = headerName.includes("_") ? headerName.replace("_", " ").split("") : headerName.split("");
  
  const headerNametoFirstCaps = headerNameArr[0].toUpperCase();
  headerNameArr.shift();

  const newheaderNameArr = [headerNametoFirstCaps, ...headerNameArr];
  const newHeaderName = newheaderNameArr.join("");

  return (
    <div className="flex items-center justify-between p-4 mb-2">
      <h2 className="urban text-5xl">{newHeaderName}</h2>
      <div className="flex items-center gap-2">
        <div className="p-3 rounded-full bg-[#fff]/70">
          <TbUser size={15} />
        </div>
        <div className="flex items-center bg-black/80 font-semibold text-white/70 p-3 rounded-full text-xs urban gap-2">
          <TbSettings size={15} color="" /> Settings
        </div>
        <div className="p-3 rounded-full bg-[#fff]/70">
          <TbNotification size={15} />
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
