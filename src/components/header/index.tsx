"use client";

import { MenuSquare } from "lucide-react";
// import { useRouter } from "next/router";
import React, { useState } from "react";
import Nav from "../nav";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  //   const router = useRouter();

  //   const currentPathname = router.pathname;

  //   console.log(currentPathname);

  return (
    <div className="py-2 md:py-4 px-2 flex items-center justify-between">
      <MenuSquare className="md:hidden" onClick={() => setIsOpen(true)} />
      <h1 className="urban text-3xl md:text-5xl font-semibold">Dashboard</h1>
      <div className="flex items-center gap-4 mr-2">
        <div className="md:size-12 size-10 bg-black/5 rounded-full" />
      </div>

      {isOpen && (
        <div
          className="fixed bg-black/50 top-0 w-full h-full"
          onClick={() => setIsOpen(false)}
        />
      )}

      {isOpen && <Nav />}
    </div>
  );
};

export default Header;
