"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Experience = ({
  title,
  website,
  from,
  to,
  jobTitle,
  description,
  borderColor,
  logo,
}) => {
  const calcDate = (date1, date2) => {
    const d1 = new Date(date1).getTime();
    const d2 = new Date(date2).getTime();
    const calc = new Date(Math.abs(d2 - d1));
    const y = Math.abs(calc.getFullYear() - 1970);
    const m = calc.getMonth();
    return (
      [
        y > 0 ? `${y} yr${y > 1 ? "s" : ""}` : "",
        m > 0 ? `${m} mo${m > 1 ? "s" : ""}` : "",
      ]
        .filter(Boolean)
        .join(" ") || "0 mo"
    );
  };

  const duration = to !== "Present" ? calcDate(from, to) : null;

  return (
    <div className="col-span-12 md:col-span-6">
      <div
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border p-5 sm:p-6
          bg-white dark:bg-slate-900/60
          border-gray-300 dark:border-white/10
          shadow-lg dark:shadow-[0_2px_30px_-4px_rgba(0,0,0,0.4)]"
      >
        {/* Glow — constrained to right 40% so it doesn't bleed over text */}
        <motion.div className="pointer-events-none absolute inset-y-0 right-0 w-2/5">
          <div
            className="absolute -top-10 -right-10 w-32 h-32 md:h-40 md:w-40 rounded-full blur-3xl"
            style={{ backgroundColor: borderColor }}
          />
        </motion.div>

        {/* Company logo watermark — right side only, no text overlap */}
        {logo && (
          <div className="pointer-events-none absolute top-2 right-4 w-16 h-16 md:w-24 md:h-20">
            <Image
              src={logo}
              alt={title}
              fill
              className="object-contain object-center select-none grayscale "
            />
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col">
          <div className="mb-4 flex flex-col gap-0.5">
            {website ? (
              <Link
                href={website}
                target="_blank"
                className="w-fit text-xl sm:text-2xl font-bold text-slate-900 dark:text-white hover:underline"
              >
                {title}
              </Link>
            ) : (
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {title}
              </h3>
            )}
            <h4 className="text-sm font-semibold sm:text-base text-slate-600 dark:text-gray-400 ">
              {jobTitle}
            </h4>
          </div>

          <p className="flex-grow text-sm leading-relaxed md:w-4/5 text-slate-600 dark:text-gray-300">
            {description}
          </p>

          <div className="mt-5 flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 dark:text-gray-400">
            <span>{from}</span>
            <span className="opacity-50">—</span>
            <span>{to}</span>
            {duration && (
              <>
                <span className="opacity-50">|</span>
                <span>{duration}</span>
              </>
            )}
          </div>
        </div>

        {/* Bottom gradient bar */}
        <div
          className="absolute inset-x-0 bottom-0 h-[3px] rounded-b-2xl"
          style={{
            background: `linear-gradient(90deg, ${borderColor}, transparent)`,
          }}
        />
      </div>
    </div>
  );
};

export default Experience;
