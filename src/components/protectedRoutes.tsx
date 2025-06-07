'use client'

import useAuthStore from "@/stores/authStore";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuthStore();

  const pathName = usePathname();
  const router = useRouter();
  
  const authRoutes = ["/login", "/signup"];
  const protectedRoutes = ["/", "/dashboard"];

  useEffect(() => {
    const isPublic = authRoutes.includes(pathName);
    const isProtected = protectedRoutes.includes(pathName);

    if (isPublic && isAuthenticated) {
      router.replace("/");
    }
    if (isProtected && !isAuthenticated) {
      router.replace("/login");
    }
  }, [pathName, isAuthenticated, router]);

  return <div>{children}</div>;
};

export default ProtectedRoutes;
