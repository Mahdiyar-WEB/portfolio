"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsGithub, BsLink45Deg } from "react-icons/bs";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Tooltip } from "react-tooltip";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";
import Atropos from "atropos/react";

const projects = [
  {
    id: 1,
    url: "https://bootstrap4-5.vercel.app/",
    src: "/images/cars-store.jpg",
    alt: "cars store",
    name: "cars store",
    description:
      "practice project based  learning course for bootstrap 4 and 5",
    github: "https://github.com/Mahdiyar-WEB/Bootstrap4-5",
  },
  {
    id: 2,
    url: "https://mahdiyar-web.github.io/Dlfox.com-Design/",
    src: "/images/dlfox-design.png",
    alt: "dlfox design",
    name: "Dlfox design",
    description: "implemented with html css, not responsive for all devices",
    github: "https://github.com/Mahdiyar-WEB/Dlfox.com-Design",
  },
  {
    id: 3,
    url: "https://mahdiyar-web.github.io/Jobinja.ir-Design/",
    src: "/images/jobinja-design.png",
    alt: "jobinja design",
    name: "jobinja design",
    description: "jobinja design with html, not responsive for all devices",
    github: "https://github.com/Mahdiyar-WEB/Jobinja.ir-Design",
  },
  {
    id: 4,
    url: "https://react-to-next-mu.vercel.app/",
    src: "/images/member-panel.png",
    alt: "member panel",
    name: "member panel",
    description:
      "customer project for selling members in telegram based on react",
    github: "https://github.com/Mahdiyar-WEB/reactToNext",
  },
  {
    id: 5,
    url: "https://react-inventory-tau.vercel.app/",
    src: "/images/react-inventory.png",
    alt: "react inventory",
    name: "react inventory",
    description:
      "project to add new category and item with sort and filter options",
    github: "https://github.com/Mahdiyar-WEB/react-inventory",
  },
  {
    id: 6,
    url: "https://common-projects.netlify.app/",
    src: "/images/react-projects.png",
    alt: "react projects",
    name: "react projects",
    description:
      "three project inside one project: todo app, expense tracker, contact app",
    github: "https://github.com/Mahdiyar-WEB/react_projects",
  },
  {
    id: 7,
    url: "https://store-eight-iota.vercel.app/",
    src: "/images/react-store.png",
    alt: "shoes store",
    name: "shoes store",
    description: "store project for selling shoes",
    github: "https://github.com/Mahdiyar-WEB/react-store-static",
  },
];

const Projects = () => {
  const [toastCounts, setToastCounts] = useState(0);
  const copyHandler = () => {
    toast.success("Link Copied");
    toastCounts < 3 && setToastCounts(toastCounts + 1);
    toastCounts >= 3 && toast.dismiss();
    setTimeout(() => {
      toastCounts !== 0 && setToastCounts(toastCounts - 1);
    }, 2000);
  };

  return (
    <section id="projects" className="md:grid gap-12 grid-cols-12">
      <h2 className="col-span-12 dark:text-white text-slate-600 font-bold text-3xl font-sans text-center drop-shadow-2xl mb-16 sm:mb-8">
        My Projects
      </h2>
      {projects.map(({ alt, description, id, src, url, name, github }) => {
        return (
          <div
            key={id}
            className="md:col-span-6 md:last:col-start-4 lg:col-span-4 lg:last:col-start-5 grid"
          >
            <div className="flex flex-col items-stretch dark:bg-gray-800 dark:text-white text-slate-600 ring-1 ring-blue-500 border-slate-950 rounded-md shadow-md dark:shadow-xl py-3 px-2 mb-14">
              {/* header */}
              <div className="-translate-y-8">
                <Atropos
                  highlight={false}
                  className="shadow-lg"
                  shadowScale={0.8}
                >
                  <Link
                    target="_blank"
                    href={url}
                    // after-dynamic-value="click to display"
                    // before:absolute before:bottom-0 before:rounded-md before:left-0 before:w-full before:grid before:bg-black before:bg-opacity-80  rounded-md before:place-items-centerbefore:z-10 before:opacity-0 before:duration-300 hover:before:opacity-100 before:h-full before:content-[attr(after-dynamic-value)]
                    className="aspect-w-16 block rounded-md aspect-h-9 -mb-2 overflow-visible"
                  >
                    <Image
                      className="w-full h-full object-center object-cover rounded-md border border-stone-300 dark:border-none"
                      placeholder="blur"
                      blurDataURL={src}
                      src={src}
                      fill
                      quality={50}
                      alt={alt}
                    />
                    <span className="relative ms-auto z-20 flex h-3 w-3">
                      <span className="animate-ping absolute right-2 top-1 inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex right-2 top-1 rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                  </Link>
                </Atropos>
              </div>
              {/* body */}
              <h3 className="text-center text-lg font-semibold mb-3 px-1 capitalize">
                {name}
              </h3>
              <p className="text-center mb-10 px-4 flex-grow">{description}</p>
              {/* footer */}
              <div className="flex justify-between items-center w-full px-1 overflow-hidden pb-3">
                <div className="flex items-center gap-3">
                  <Link
                    target="_blank"
                    href={github}
                    className="px-3 py-1 dark:shadow-md shadow-sm shadow-stone-400 border border-stone-200 rounded-sm dark:border-none dark:shadow-slate-950 duration-150 hover:scale-110 active:scale-[.98]"
                    data-tooltip-id="github-tooltip"
                    data-tooltip-content="Source"
                    data-tooltip-delay-show={800}
                  >
                    <BsGithub size={24} />
                  </Link>
                  <CopyToClipboard text={url} onCopy={copyHandler}>
                    <button
                      className="dark:shadow-md shadow-sm shadow-stone-400 border border-stone-200 rounded-sm dark:border-none px-3 py-1 dark:shadow-slate-950 duration-150 hover:scale-110 active:scale-[.98]"
                      data-tooltip-id="link-tooltip"
                      data-tooltip-content="Copy Link"
                      data-tooltip-delay-show={800}
                    >
                      <BsLink45Deg size={24} />
                    </button>
                  </CopyToClipboard>
                  <Tooltip
                    id="github-tooltip"
                    place="bottom"
                    variant="dark"
                    className="text-xs font-semibold"
                  />
                  <Tooltip
                    id="link-tooltip"
                    place="bottom"
                    variant="dark"
                    className="text-xs font-semibold"
                  />
                </div>
                <Link
                  target="_blank"
                  href={url}
                  className="text-center overflow-hidden flex items-center group/button text-white bg-blue-500 px-6 py-2 rounded-md active:scale-[.98]"
                >
                  Visit
                  <HiArrowNarrowRight
                    className="duration-300 animated translate-x-1 group-hover/button:translate-x-2"
                    size={22}
                  />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
