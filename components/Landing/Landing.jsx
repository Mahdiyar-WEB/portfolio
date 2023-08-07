import React from "react";
import Image from "next/image";

const Landing = () => {
  return (
    <section className="mt-10">
      <div className=" grid place-items-center">
        <Image
          src="/images/profile.jpeg"
          alt="mahdiyar"
          className="rounded-s-[40px] rounded-e-[40px] ring-2"
          width={200}
          height={200}
          priority={true}
        />
      </div>
      <h1 className="text-3xl mt-6 font-sans text-center">
        Hi, I'm Mahdiyar Marvi{" "}
      </h1>
      <h2 className="text-2xl mt-2 text-center text-blue-500 font-sans">
        Front-end Developer
      </h2>
    </section>
  );
};

export default Landing;
