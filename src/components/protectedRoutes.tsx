"use client";

import useAuthStore from "@/stores/authStore";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuthStore();

  const pathName = usePathname();
  const router = useRouter();

  const authRoutes = ["/", "/login"];
  const protectedRoutes = ["/dashboard"];

  useEffect(() => {
    const isPublic = authRoutes.includes(pathName);
    const isProtected = protectedRoutes.includes(pathName);

    if (isPublic && isAuthenticated) {
      router.replace("/dashboard");
    }
    if (isProtected && !isAuthenticated) {
      router.replace("/");
    }
  }, [pathName, isAuthenticated, router]);

  return <>{children}</>;
};

export default ProtectedRoutes;
