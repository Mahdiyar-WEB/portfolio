"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const links = [
  { title: "about", href: "#about" },
  { title: "skills", href: "#skills" },
  { title: "projects", href: "#projects" },
];

const Header = () => {
  const [showItems, setShowItems] = useState(false);

  const handleToggleShowItems = () => {
    if (showItems) {
      setShowItems(false);
    } else {
      setShowItems(true);
    }
  };

  return (
    <header className="border my-3 mx-2 px-4 py-3 rounded-md bg-slate-900 text-white flex justify-between items-center">
      <h1 className="text-lg font-semibold">Mahdiyar</h1>

      <button
        onClick={() => handleToggleShowItems()}
        className="border border-gray-600 rounded-md py-1 px-2 text-gray-300"
      >
        <BiMenu fontSize={25} />
      </button>

      <div
        className={`fixed top-0 right-0 w-full h-screen duration-300 bg-black ${
          showItems ? "bg-opacity-70 z-10" : "-z-10 bg-opacity-0"
        }`}
      ></div>
      <aside
        className={`${
          showItems ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        } duration-300 ease-out fixed left-0 top-0 w-full h-screen z-20`}
        onClick={() => handleToggleShowItems()}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`ms-auto h-full w-3/5 relative bg-white text-black`}
        >
          <button
            onClick={() => handleToggleShowItems()}
            className="absolute top-3 right-3 text-gray-700 border border-gray-300 rounded-md active:scale-110 px-1"
          >
            <IoClose size={25} />
          </button>

          {/* links */}
          <ul className="pt-20 font-semibold  flex flex-col  ">
            {links.map(({ title, href }, index) => {
              return (
                <li onClick={() => handleToggleShowItems()} key={title}>
                  <Link
                    className="px-4 flex items-center justify-end w-full  duration-300 ease-in transition hover:-translate-x-2 h-14"
                    href={href}
                  >
                    {title}
                  </Link>
                  <hr className={`${index + 1 === links.length && "hidden"}`} />
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </header>
  );
};

export default Header;
