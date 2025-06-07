"use client";

import { primaryNavItems, secondaryNavItems } from "@/constants/navItems";
import Link from "next/link";
import React, { useState } from "react";
import {
  TbChevronDown,
  TbChevronRight,
  TbLogout,
  TbUser,
} from "react-icons/tb";
import Image from "next/image";
import logo from "@/assets/image.png";
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();
  const [navIsSelected, setNavIsSelected] = useState<boolean>(false);
  const [selectedNavName, setSelectedNavName] = useState<string>("");

  const primaryNavElements = primaryNavItems.map((item) => {
    const Icon = item.icon;
    return (
      <Link
        key={item.name}
        href={item.link}
        className={`flex flex-col justify-center hover:bg-gray-200 py-2 rounded-md items-center gap-1 urban cursor-pointer`}
      >
        <div className="size-[40px] flex items-center justify-center rounded-full bg-black text-[#81e0fbc9]">
          <Icon />
        </div>
        <p className="text-black text-xs font-bold">Dashboard</p>
      </Link>
    );
  });

  const secondaryNavElements = secondaryNavItems.map((item) => {
    const Icon = item.icon;
    const hasSubLinks: boolean = item.sub_members ? true : false;

    const subElements = item.sub_members?.map((item, index) => (
      <Link
        key={index}
        href={item.link}
        className="text-[10px] outfit hover:bg-gray-400 hover:font-bold p-1.5 rounded-md hover:pl-4 transition-all ease-in-out flex flex-col"
      >
        {item.name}
      </Link>
    ));

    return (
      <div
        key={item.name}
        className={`flex flex-wrap cursor-pointer hover:bg-gray-200 p-1.5 hover:pl-4 transition-all ease-in-out dark:hover:text-black rounded-md items-center gap-2`}
        onClick={() => {
          if (hasSubLinks) {
            setNavIsSelected(!navIsSelected);
            setSelectedNavName(item.name);
          } else {
            router.push(item.link);
          }
        }}
      >
        <Icon size={20} />
        <p className="urban text-xs font-bold">{item.name}</p>
        {hasSubLinks &&
          (navIsSelected && selectedNavName == item.name ? (
            <TbChevronDown
              className="ml-auto"
              size={15}
              onClick={() => setNavIsSelected(!navIsSelected)}
            />
          ) : (
            <TbChevronRight
              className="ml-auto"
              size={15}
              onClick={() => setNavIsSelected(!navIsSelected)}
            />
          ))}
        {hasSubLinks && navIsSelected && selectedNavName == item.name && (
          <div className="w-full mt-2 transition-all rounded-md bg-gray-200 ease-in-out p-1.5">
            {subElements}
          </div>
        )}
      </div>
    );
  });

  return (
    <div className="h-full w-[85px] hover:shadow-2xl hover:w-[350px] transition-all ease-in-out delay-100 p-1.5 pt-2 backdrop-blur-md flex rounded-r-xl bg-[#fff]/70 shadow-md items-center gap-4 overflow-hidden dark:bg-white/20">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="w-[70px] rounded-lg overflow-hidden">
          <Image src={logo} alt="Logo" width={0} height={0} />
        </div>
        <hr className="border-black/30 border w-full mt-2" />
        <div className="flex flex-col gap-1 mt-4 no-scroll overflow-auto w-full">
          {primaryNavElements}
        </div>
        <TbLogout size={22} className="mt-auto mb-4" />
      </div>
      <div className="border-2 border-gray-200  bg-white/50 h-full w-full rounded-2xl overflow-auto p-2 no-scroll">
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
        <div className="mt-5 flex flex-col gap-2 p-2">
          {secondaryNavElements}
        </div>
      </div>
    </div>
  );
};

export default Nav;
