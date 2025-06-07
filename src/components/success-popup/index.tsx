"use client";

import useAuthStore from "@/stores/authStore";
import { useEffect } from "react";

const SuccessPopup = () => {
  const { setIsAuthenticated } = useAuthStore();

  useEffect(() => {
    setTimeout(() => {
      setIsAuthenticated(true);
    }, 4000);
  }, []);

  return (
    <div className="absolute inset-0 backdrop-blur-xs bg-black/10 rounded-xl flex items-center justify-center">
      <div className="urban flex flex-col border py-8 px-6 rounded-lg shadow-xl bg-black text-white items-center gap-1">
        <h2 className="text-3xl">Welcome, Oderinde Michael</h2>
        <p className="outfit">
          You have successfully completed your registration process
        </p>
        <p className="text-xs italic mt-12">
          ...redirecting you to your dashboard...
        </p>
      </div>
    </div>
  );
};

export default SuccessPopup;
