import React from "react";
import { Server } from "lucide-react";

const Logo = () => {
  return (
    <div className="w-fit overflow-hidden rounded-lg bg-black items-center text-center p-2 gap-2 shadow-md flex flex-col">
      <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-sky-500 to-sky-600 rounded-lg shadow-lg">
        <Server className="w-6 h-6 text-white" />
      </div>
      <h1 className="text-2xl urban font-bold text-white">ServeFlow</h1>
    </div>
  );
};

export default Logo;
