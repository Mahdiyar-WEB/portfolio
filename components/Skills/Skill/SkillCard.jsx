"use client";

import Image from "next/image";
import React from "react";

const SkillCard = ({
  title,
  slug,
  iconSrc,
  color = "000000",
  category,
  featured = false,
  summary,
  accent,
  lightTint,
  darkTint,
  lightBorder,
  darkBorder,
  iconOpacityLight = 0.24,
  iconOpacityDark = 0.13,
  iconInvertDark = false,
}) => {
  const iconUrl =
    iconSrc || (slug ? `https://cdn.simpleicons.org/${slug}/${color}` : "");

  return (
    <div
      className={[
        "skill-card group relative overflow-hidden rounded-[28px] border transition-all duration-300",
        "min-h-[11.5rem]",
        "border-[color:var(--light-border)]",
        "shadow-[0_12px_32px_rgba(15,23,42,0.08),0_0_0_1px_color-mix(in_srgb,var(--accent)_18%,white),inset_0_1px_0_rgba(255,255,255,0.84),inset_0_0_0_1px_color-mix(in_srgb,var(--accent)_10%,transparent)]",
        "hover:-translate-y-1.5",
        "hover:border-[color:color-mix(in_srgb,var(--accent)_72%,white)]",
        "hover:shadow-[0_18px_40px_rgba(15,23,42,0.12),0_0_0_1px_color-mix(in_srgb,var(--accent)_28%,white),0_0_28px_color-mix(in_srgb,var(--accent)_10%,transparent),inset_0_1px_0_rgba(255,255,255,0.84),inset_0_0_0_1px_color-mix(in_srgb,var(--accent)_18%,transparent)]",
        "dark:border-[color:var(--dark-border)]",
        "dark:shadow-[0_16px_42px_rgba(0,0,0,0.34),0_0_0_1px_color-mix(in_srgb,var(--accent)_22%,transparent),inset_0_1px_0_rgba(255,255,255,0.04),inset_0_0_0_1px_color-mix(in_srgb,var(--accent)_12%,transparent)]",
        "dark:hover:border-[color:color-mix(in_srgb,var(--accent)_78%,white_10%)]",
        "dark:hover:shadow-[0_22px_52px_rgba(0,0,0,0.42),0_0_0_1px_color-mix(in_srgb,var(--accent)_30%,transparent),0_0_34px_color-mix(in_srgb,var(--accent)_18%,transparent),inset_0_1px_0_rgba(255,255,255,0.05),inset_0_0_0_1px_color-mix(in_srgb,var(--accent)_16%,transparent)]",
        featured
          ? "xl:col-span-6 xl:row-span-2 xl:min-h-[19rem]"
          : "xl:col-span-3",
      ].join(" ")}
      style={{
        "--accent": accent,
        "--light-tint": lightTint,
        "--dark-tint": darkTint,
        "--light-border": lightBorder,
        "--dark-border": darkBorder,
        "--icon-light": String(iconOpacityLight),
        "--icon-dark": String(iconOpacityDark),
      }}
    >
      <div aria-hidden="true" className="skill-bg-light absolute inset-0" />
      <div aria-hidden="true" className="skill-bg-dark absolute inset-0" />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[1px] opacity-100"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--accent) 20%, transparent 65%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[1px] rounded-[26px] border border-white/70 dark:border-white/[0.06]"
      />

      {iconUrl && (
        <div className="pointer-events-none absolute right-4 top-4 transition-transform duration-300 group-hover:scale-[1.05] md:right-5 md:top-5">
          <Image
            src={iconUrl}
            alt={title}
            width={20}
            height={20}
            unoptimized
            className={[
              " select-none object-contain",
              featured
                ? "h-[5.6rem] w-[5.6rem] md:h-[7.2rem] md:w-[7.2rem]"
                : "h-[5.6rem] w-[5.6rem]",
            ].join(" ")}
          />
        </div>
      )}

      <div className="relative z-10 flex h-full flex-col justify-end p-5 md:p-6">
        <div className="mb-3 flex items-center gap-2">
          <span
            className="h-2.5 w-2.5 rounded-full shadow-[0_0_0_4px_rgba(255,255,255,0.55)] dark:shadow-none"
            style={{ backgroundColor: accent }}
          />
          <span className="text-[10px] font-bold uppercase tracking-[0.30em] text-slate-600 dark:text-slate-400">
            {category}
          </span>
        </div>

        <h3 className="max-w-[82%] text-[27px] font-black leading-none tracking-tight text-slate-950 dark:text-white md:text-[29px]">
          {title}
        </h3>

        <p className="mt-3 max-w-[92%] text-sm leading-6 text-slate-700 dark:text-slate-300">
          {summary || "Reliable production-ready expertise."}
        </p>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-5 h-[3px] w-16 rounded-full transition-all duration-300 group-hover:w-24"
        style={{ backgroundColor: accent }}
      />

      <style jsx>{`
        .skill-bg-light {
          background:
            radial-gradient(
              circle at 88% 14%,
              var(--light-tint) 0%,
              transparent 30%
            ),
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.985) 0%,
              rgba(248, 250, 252, 0.98) 100%
            );
        }

        .skill-bg-dark {
          display: none;
        }

        :global(.dark) .skill-bg-light {
          display: none;
        }

        :global(.dark) .skill-bg-dark {
          display: block;
          background:
            radial-gradient(
              circle at 86% 16%,
              var(--dark-tint) 0%,
              transparent 28%
            ),
            linear-gradient(
              135deg,
              rgba(15, 23, 42, 0.98) 0%,
              rgba(2, 6, 23, 0.98) 100%
            );
        }

        .skill-icon {
          opacity: var(--icon-light);
          filter: saturate(1.08) drop-shadow(0 10px 22px rgba(15, 23, 42, 0.16))
            drop-shadow(0 0 18px rgba(255, 255, 255, 0.55));
        }

        :global(.dark) .skill-icon {
          opacity: var(--icon-dark);
          filter: saturate(1.04) drop-shadow(0 14px 26px rgba(0, 0, 0, 0.34))
            drop-shadow(
              0 0 22px color-mix(in srgb, var(--accent) 42%, transparent)
            );
        }

        :global(.dark) .skill-card {
          background: rgba(2, 8, 23, 0.72);
          box-shadow:
            0 12px 38px rgba(0, 0, 0, 0.28),
            0 0 0 1px color-mix(in srgb, var(--accent) 18%, transparent),
            inset 0 1px 0 rgba(255, 255, 255, 0.03);
        }

        .skill-card:hover {
          border-color: color-mix(in srgb, var(--accent) 56%, white);
        }

        :global(.dark) .skill-card:hover {
          border-color: color-mix(in srgb, var(--accent) 62%, white 12%);
        }
      `}</style>
    </div>
  );
};

export default SkillCard;
