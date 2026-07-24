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
        className={`${visbyFont.variable} ${inter.className} dark:bg-slate-900 relative`}
      >
        {children}
        <a
          href="/resume.png"
          download="resume.png"
          className="group fixed bottom-6 right-6 z-50 flex items-center justify-center gap-0 overflow-hidden rounded-full border border-blue-200 bg-white p-4 text-blue-600 shadow-2xl transition-all duration-500 hover:gap-2 hover:px-6 dark:border-blue-900/50 dark:bg-neutral-900 dark:text-blue-400 md:gap-2 md:px-6 md:py-4"
          aria-label="Download Resume"
        >
          <span className="absolute inset-0 -z-10 h-full w-full  rounded-full bg-blue-400/30 dark:bg-blue-500/20" />

          <span className="absolute inset-0 -z-10 h-full w-full animate-pulse rounded-full bg-blue-400/10 dark:bg-blue-500/5 scale-150" />

          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
            >
              <path
                fillRule="evenodd"
                d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
                clipRule="evenodd"
              />
              <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
            </svg>
          </div>

          <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold transition-all duration-500 group-hover:max-w-xs md:max-w-xs">
            <span className="hidden md:inline">Download CV</span>
            <span className="md:hidden">CV</span>
          </span>

          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
        </a>
        <Toaster />
      </body>
    </html>
  );
}
