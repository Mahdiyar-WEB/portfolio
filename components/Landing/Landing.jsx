import React from "react";
import Image from "next/image";

const Landing = () => {
  return (
    <section className="mt-10 md:flex md:flex-row-reverse md:items-center md:justify-evenly">
      <div className="grid place-items-center">
        <Image
          src="/images/profile.jpeg"
          alt="mahdiyar"
          quality={100}
          className="rounded-s-[40px] rounded-e-[40px] ring-2"
          width={200}
          height={200}
          priority={true}
        />
      </div>
      <div className="mt-6 ">
        <h1 className="text-3xl font-sans text-center">
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
