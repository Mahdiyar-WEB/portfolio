"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub, BsLink45Deg } from "react-icons/bs";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Tooltip } from "react-tooltip";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";

const projects = [
  {
    id: 1,
    url: "https://bootstrap4-5.vercel.app/",
    src: "/images/cars-store.jpg",
    alt: "cars store",
    name: "cars store",
    description: "cars store designed by bootstrap",
    github: "https://github.com/Mahdiyar-WEB/Bootstrap4-5",
  },
  {
    id: 2,
    url: "https://mahdiyar-web.github.io/Dlfox.com-Design/",
    src: "/images/dlfox-design.png",
    alt: "dlfox design",
    name: "dlfox design",
    description: "dlfox design",
    github: "https://github.com/Mahdiyar-WEB/Dlfox.com-Design",
  },
  {
    id: 3,
    url: "https://mahdiyar-web.github.io/Jobinja.ir-Design/",
    src: "/images/jobinja-design.png",
    alt: "jobinja design",
    name: "jobinja design",
    description: "jobinja design",
    github: "https://github.com/Mahdiyar-WEB/Jobinja.ir-Design",
  },
  {
    id: 4,
    url: "https://react-to-next-mu.vercel.app/",
    src: "/images/member-panel.png",
    alt: "member panel",
    name: "member panel",
    description: "member panel",
    github: "https://github.com/Mahdiyar-WEB/reactToNext",
  },
  {
    id: 5,
    url: "https://react-inventory-tau.vercel.app/",
    src: "/images/react-inventory.png",
    alt: "react inventory",
    name: "react inventory",
    description: "react inventory",
    github: "https://github.com/Mahdiyar-WEB/react-inventory",
  },
  {
    id: 6,
    url: "https://common-projects.netlify.app/",
    src: "/images/react-projects.png",
    alt: "react projects",
    name: "react projects",
    description: "react projects",
    github: "https://github.com/Mahdiyar-WEB/react_projects",
  },
  {
    id: 7,
    url: "https://store-eight-iota.vercel.app/",
    src: "/images/react-store.png",
    alt: "react store",
    name: "react store",
    description: "react store",
    github: "https://github.com/Mahdiyar-WEB/react-store-static",
  },
];

const Projects = () => {
  const copyHandler = () => {
    toast.success("Link Copied");
  };

  return (
    <section id="projects" className="md:grid gap-8 grid-cols-12">
      <h2 className="col-span-12 font-bold text-3xl font-sans text-center drop-shadow-2xl mb-14">
        Projects
      </h2>
      {projects.map(({ alt, description, id, src, url, name, github }) => {
        return (
          <div key={id} className="md:col-span-6">
            <div className="flex flex-col bg-gray-800 border-slate-950 rounded-md shadow-xl py-3 px-2 mb-14">
              {/* header */}
              <Link
                target="_blank"
                href={url}
                after-dynamic-value="click to display"
                className="aspect-w-16 -translate-y-8 aspect-h-9 -mb-2 relative before:absolute before:bottom-0 before:rounded-md before:left-0 before:w-full before:grid before:bg-black before:bg-opacity-80  rounded-md before:place-items-center before:z-10 before:opacity-0 before:duration-300 hover:before:opacity-100 before:h-full before:content-[attr(after-dynamic-value)]"
              >
                <Image
                  className="w-full h-full object-center object-cover rounded-md"
                  placeholder="blur"
                  blurDataURL={src}
                  src={src}
                  fill
                  alt={alt}
                />
                <span className="relative ms-auto z-20 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </Link>
              {/* body */}
              <h3 className="text-center text-lg font-semibold mb-3 px-1">
                {name}
              </h3>
              <p className="text-center mb-10 px-1">{description}</p>
              {/* footer */}
              <div className="flex justify-between items-center w-full px-1 overflow-hidden">
                <div className="flex items-center gap-3">
                  <Link
                    target="_blank"
                    href={github}
                    className="px-3 py-1 shadow-md shadow-slate-950 duration-150 hover:scale-110 active:scale-[.98]"
                    data-tooltip-id="github-tooltip"
                    data-tooltip-content="Source"
                    data-tooltip-delay-show={800}
                  >
                    <BsGithub size={24} />
                  </Link>
                  <CopyToClipboard text={url} onCopy={copyHandler}>
                    <button
                      className="shadow-md px-3 py-1 shadow-slate-950 duration-150 hover:scale-110 active:scale-[.98]"
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
                  className="text-center overflow-hidden flex items-center group/button bg-blue-500 px-6 py-2 rounded-md active:scale-[.98]"
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
