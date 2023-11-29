import React from "react";
import Image from "next/image";

const Landing = () => {
  return (
    <section className="mt-10 md:flex md:flex-row-reverse md:items-center md:justify-evenly">
      <div className="grid place-items-center  mx-auto sm:mx-0">
        <Image
          src="/images/profile.webp"
          alt="mahdiyar"
          quality={100}
          width={300}
          height={300}
          priority={true}
        />
      </div>
      <div className="mt-6 ">
        <h1 className="text-3xl font-sans text-center dark:text-white text-slate-600">
          Hi, I&apos;m Mahdiyar Marvi{" "}
        </h1>
        <h2 className="text-2xl mt-2 text-center text-blue-500 font-sans">
          Front-end Developer
        </h2>
      </div>
    </section>
  );
};

export default Landing;
