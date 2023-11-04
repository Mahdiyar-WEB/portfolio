"use client";
import Image from "next/image";
import React from "react";

const imageConfigs = [
  {
    id: 1,
    src: "/images/next.png",
    alt: "next-logo",
    className: "2xl:left-36 absolute xl:left-32 md:left-24 top-4",
  },
  {
    id: 2,
    src: "/images/html.png",
    alt: "html-logo",
    className: "absolute 2xl:left-40 xl:left-32 md:left-24 top-32",
  },
  {
    id: 3,
    src: "/images/typescript.png",
    alt: "typescript-logo",
    className: "absolute 2xl:left-14 xl:left-6 top-16",
  },
  {
    id: 4,
    src: "/images/react.png",
    alt: "react-logo",
    className: "absolute 2xl:right-36 xl:right-32 md:right-28 top-4",
  },
  {
    id: 5,
    src: "/images/css.png",
    alt: "css-logo",
    className: "absolute 2xl:right-40 xl:right-32 md:right-24 top-32 ",
  },
  {
    id: 6,
    src: "/images/javascript.png",
    alt: "javascript-logo",
    className: "absolute 2xl:right-14 xl:right-6 md:right-2 top-16 ",
  },
];

const About = () => {
  const yearsOfExperience =
    new Date().getFullYear() - new Date("2020-03-18").getFullYear();

  return (
    <section className="relative">
      {imageConfigs.map(({ src, alt, className, id }) => {
        return (
          <Image
            key={id}
            id={alt}
            src={src}
            alt={alt}
            className={`hidden lg:block ${className}`}
            quality={100}
            width={60}
            height={60}
            priority={true}
          />
        );
      })}
      <p className="sm:w-96 md:w-5/6 lg:w-3/5 leading-8 mx-auto dark:text-white text-slate-800 text-justify px-6 text-lg border rounded-md py-4 shadow-sm dark:shadow-md shadow-yellow-600 dark:shadow-yellow-800 border-yellow-600">
        My deep love for technology has always pushed me forward in my journey
        as a front-end web developer, constantly inspiring my thirst for
        learning and growth. With more than {yearsOfExperience} years of
        hands-on experience in this ever-changing field, I&apos;m continually
        adapting to stay at the forefront of web development trends.
      </p>
    </section>
  );
};

export default About;
