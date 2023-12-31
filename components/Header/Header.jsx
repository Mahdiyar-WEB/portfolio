"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { MdDesktopWindows } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Tooltip } from "react-tooltip";

const links = [
  { title: "projects", href: "#projects" },
  { title: "experiences", href: "#experiences" },
  { title: "skills", href: "#skills" },
  { title: "contact", href: "#contact" },
];

const themes = [
  { title: "light", element: <BsSunFill size={18} /> },
  { title: "dark", element: <BsMoonFill size={16} /> },
  { title: "system", element: <MdDesktopWindows size={18} /> },
];

const Header = () => {
  const [showItems, setShowItems] = useState(false);
  const [activeTheme, setActiveTheme] = useState({ title: "", element: "" });
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const dropdownRef2 = useRef(null);
  const buttonRef2 = useRef(null);

  useEffect(() => {
    localStorage.getItem("theme")
      ? handleChangeTheme(localStorage.getItem("theme"))
      : handleChangeTheme(themes[2].title);
  }, []);

  const handleChangeTheme = (title) => {
    title === "system" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? document.documentElement.classList.add("dark")
      : title === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", title);
    setIsOpen(false);
    setActiveTheme(themes.find((theme) => theme.title === title));
  };

  const handleToggleShowItems = () => {
    document.body.style.overflow = showItems ? "visible" : "hidden";
    setIsOpen(false);
    setShowItems(!showItems);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleClickOutside = (event) => {
    if (
      isOpen &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target) &&
      dropdownRef2.current &&
      !dropdownRef2.current.contains(event.target) &&
      buttonRef2.current &&
      !buttonRef2.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  return (
    <header className="sm:px-6 px-2">
      <div className="my-3 md:container md:mx-auto mx-2 px-4 py-3 rounded-md dark:bg-transparent shadow-md border dark:border-slate-800 shadow-stone-300 bg-white text-slate-600 dark:shadow-slate-950 dark:text-white flex justify-between  items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-bold font-sans bg-gradient-to-r from-orange-500 via-blue-500 to-green-400 text-transparent bg-300% bg-clip-text animate-gradient ">
            Mahdiyar
          </h1>
          <div className="hidden md:flex relative ">
            <button
              type="button"
              className="capitalize flex w-32 mx-auto items-center justify-center gap-x-1.5 rounded-md text-slate-700 dark:bg-gray-900 py-2 text-sm font-semibold dark:text-white shadow-sm ring-1 ring-inset "
              onClick={() => setIsOpen(!isOpen)}
              ref={buttonRef}
            >
              <div className="flex me-auto ms-3  items-center gap-2">
                {activeTheme?.element}
                <p>Theme</p>
              </div>
              <svg
                className={`h-5 w-5 me-2 text-gray-400 duration-300 ${
                  isOpen && "rotate-180"
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              ref={dropdownRef}
              className={`absolute -bottom-[115px] left-0 w-32 mx-auto rounded-md bg-white dark:bg-gray-800 dark:text-white shadow-lg ring-1 focus:outline-none transition-opacity duration-300 ${
                isOpen ? "z-20" : "opacity-0 -z-20"
              }`}
            >
              {themes.map(({ title, element }, index) => {
                return index + 1 === themes.length ? (
                  <div key={title}>
                    <hr className="h-px self-stretch dark:opacity-20 bg-slate-100 dark:bg-gradient-to-tr  dark:from-transparent dark:via-neutral-500 dark:to-transparent" />
                    <button
                      onClick={() => handleChangeTheme(title)}
                      className="w-full capitalize flex items-center gap-3 px-3 py-2 text-sm"
                    >
                      {element}
                      {title}
                    </button>
                  </div>
                ) : (
                  <button
                    key={title}
                    onClick={() => handleChangeTheme(title)}
                    className="w-full capitalize flex items-center gap-3 px-3 py-2 text-sm"
                  >
                    {element}
                    {title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        {/* other sizes  */}
        <ul className="hidden space-x-10 pe-4 capitalize font-semibold font-sans md:flex">
          {links.map(({ title, href }) => {
            return (
              <li key={title}>
                <Link href={href}>{title}</Link>
              </li>
            );
          })}
        </ul>
        {/* mobile size */}
        <button
          onClick={() => handleToggleShowItems()}
          className="border border-gray-300 dark:border-gray-600 md:hidden rounded-md py-1 px-2"
          data-tooltip-delay-show={500}
        >
          <BiMenu fontSize={25} />
        </button>
        <div
          className={`fixed top-0 right-0 w-full h-full duration-300 transition-opacity md:hidden bg-black ${
            showItems ? "bg-opacity-70 z-10" : "-z-10 bg-opacity-0"
          }`}
        ></div>
        <aside
          className={`${
            showItems
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full"
          } duration-300 ease-out fixed left-0 top-0 w-full h-screen md:hidden z-20`}
          onClick={() => handleToggleShowItems()}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`flex flex-col ms-auto h-[100dvh] overflow-hidden sm:pb-0 w-3/5 relative bg-white text-slate-700 dark:bg-slate-900 shadow-2xl shadow-slate-950 dark:text-white`}
          >
            <button
              onClick={() => handleToggleShowItems()}
              className="absolute top-3 right-3 text-slate-500 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-md duration-150 hover:scale-110 active:scale-[.98] px-1"
              data-tooltip-id="close-tooltip"
              data-tooltip-content="close"
              data-tooltip-delay-show={500}
            >
              <IoClose size={25} />
            </button>
            <Tooltip
              id="close-tooltip"
              place="bottom"
              variant="dark"
              className="font-semibold tracking-wide"
            />

            {/* links */}
            <ul className="pt-20 font-semibold flex flex-col uppercase">
              {links.map(({ title, href }, index) => {
                return (
                  <li onClick={() => handleToggleShowItems()} key={title}>
                    <Link
                      className="px-4 flex items-center justify-end w-full duration-300 ease-in hover:-translate-x-2 h-14"
                      href={href}
                    >
                      {title}
                    </Link>

                    {index + 1 !== links.length && (
                      <hr className="h-px self-stretch opacity-20 bg-slate-900 dark:bg-gradient-to-tr dark:from-transparent dark:via-neutral-500 dark:to-transparent" />
                    )}
                  </li>
                );
              })}
            </ul>
            {/* Themes */}
            <div className="mt-auto flex flex-col mb-4">
              <div
                ref={dropdownRef2}
                className={` mb-2 font-semibold w-40 mx-auto rounded-md dark:bg-gray-800 dark:text-white shadow-md dark:shadow-lg ring-1 focus:outline-none transition-opacity duration-300 ${
                  isOpen ? "z-20" : "opacity-0 -z-20"
                }`}
              >
                {themes.map(({ title, element }, index) => {
                  return index + 1 === themes.length ? (
                    <div key={title}>
                      <hr className="h-px self-stretch opacity-20 bg-slate-900 dark:bg-gradient-to-tr dark:from-transparent dark:via-neutral-500 dark:to-transparent" />
                      <button
                        onClick={() => handleChangeTheme(title)}
                        className="w-full capitalize flex items-center gap-3 px-4 py-2 text-sm"
                      >
                        {element}
                        {title}
                      </button>
                    </div>
                  ) : (
                    <button
                      key={title}
                      onClick={() => handleChangeTheme(title)}
                      className="w-full capitalize flex items-center gap-3 px-4 py-2 text-sm"
                    >
                      {element}
                      {title}
                    </button>
                  );
                })}
              </div>
              <button
                ref={buttonRef2}
                type="button"
                className="capitalize flex w-40 mx-auto items-center justify-center gap-x-1.5 rounded-md dark:bg-gray-900 dark:text-white py-3 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-inset "
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="flex me-auto ms-3  items-center gap-2">
                  {activeTheme?.element}
                  <p>Theme</p>
                </div>
                <svg
                  className={`h-5 w-5 me-2 text-gray-400 duration-300 ${
                    isOpen && "rotate-180"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <p className="text-center text-lg font-sans pb-4 bg-gradient-to-r from-orange-500 via-blue-500 to-green-400 text-transparent bg-300% bg-clip-text animate-gradient">
              Mahdiyar
            </p>
          </div>
        </aside>
      </div>
    </header>
  );
};

export default Header;
