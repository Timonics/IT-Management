import type { Metadata } from "next";
import "./globals.css";
import ProtectedRoutes from "@/components/protectedRoutes";

import { urbanist, opensans, outfit } from "@/fonts";

export const metadata: Metadata = {
  title: "IT Management App",
  description: "Created for the IT Unit of C&S Youth Fellowship.",
};

// const urbanist = Urbanist({
//   variable: "--font-urbanist",
//   subsets: ["latin"],
//   style: ["normal", "italic"],
// });

// const opensans = Open_Sans({
//   variable: "--font-opensans",
//   subsets: ["latin"],
//   style: ["normal", "italic"],
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`light ${urbanist.variable} ${opensans.variable} ${outfit.variable}`}
    >
      <body>
        <ProtectedRoutes>{children}</ProtectedRoutes>
      </body>
    </html>
  );
}
