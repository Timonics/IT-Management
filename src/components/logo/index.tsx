import Image from "next/image";
import React from "react";
import logo from "@/assets/image.png";

const Logo = () => {
  return (
    <div className="w-fit overflow-hidden rounded-lg bg-white shadow-md">
      <Image src={logo} alt="logo" height={80}/>
    </div>
  );
};

export default Logo;
