"use client";
import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";
import { Tooltip } from "react-tooltip";

const links = [
  { title: "projects", href: "#projects" },
  { title: "skills", href: "#skills" },
  { title: "contact", href: "#contact" },
];

const Footer = () => {
  const handleGoTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="dark:bg-slate-950 bg-zinc-50 border border-slate-300 dark:border-none px-6 pt-4 pb-2 text-white">
      <button
        onClick={handleGoTop}
        data-tooltip-id="top-tooltip"
        data-tooltip-content="Go Top"
        data-tooltip-delay-show={500}
        className="dark:bg-gray-800 p-2 group/button rounded-full mx-auto block -translate-y-8 dark:-translate-y-7 ring-1 bg-slate-500 ring-slate-600 dark:ring dark:ring-slate-950"
      >
        <IoIosArrowUp
          className="duration-300 group-hover/button:-translate-y-1"
          size={24}
        />
      </button>
      <ul className="flex gap-4 justify-center mb-4">
        {links.map(({ title, href }) => {
          return (
            <li key={title}>
              <Link
                className="dark:text-gray-400 text-slate-500 hover:text-slate-600 capitalize duration-150 dark:hover:text-gray-300 font-bold"
                href={href}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
      <Tooltip
        id="top-tooltip"
        place="top"
        variant="dark"
        className="font-semibold tracking-wide "
      />
      <small className="text-center inline-block w-full dark:text-white text-slate-700 font-sans mb-3">made with ❤️</small>
    </footer>
  );
};

export default Footer;
