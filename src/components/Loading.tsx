'use client'

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  const router = useRouter();
  useEffect(() => {
    return router.replace('/dashboard')
  }, [router]);

  return (
    <div className="absolute inset-0 backdrop-blur-lg flex items-center justify-center">
      <FaSpinner className="animate-spin text-3xl" />
    </div>
  );
};

export default Loading;
