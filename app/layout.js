"use client";
import "./globals.css";
import "atropos/css";
import "aos/dist/aos.css";
import { Inter } from "next/font/google";
import visbyFont from "@/constants/visbyFont";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${visbyFont.variable} ${inter.className} dark:bg-slate-900 `}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
