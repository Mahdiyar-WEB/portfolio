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
    <footer className="bg-slate-950 px-6 pt-4 pb-2 text-white">
      <button
        onClick={handleGoTop}
        data-tooltip-id="top-tooltip"
        data-tooltip-content="Go Top"
        data-tooltip-delay-show={500}
        className="bg-gray-800 p-2 group/button rounded-full mx-auto block -translate-y-7 ring ring-slate-950"
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
                className="text-gray-400 capitalize duration-150 hover:text-gray-300 font-semibold"
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
        className="font-semibold tracking-wide"
      />
      <small className="text-center inline-block w-full font-sans">made with ❤️</small>
    </footer>
  );
};

export default Footer;
