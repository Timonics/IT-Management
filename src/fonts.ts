import localFont from "next/font/local";

export const urbanist = localFont({
  src: [
    {
      path: "../public/fonts/urbanist.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-urban",
  display: "swap",
});

export const opensans = localFont({
  src: [
    {
      path: "../public/fonts/openSans.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-opensans",
  display: "swap",
});

export const outfit = localFont({
  src: [
    {
      path: "../public/fonts/Outfit.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-outfit",
  display: "swap",
});
