import About from "@/components/About/About";
import Header from "@/components/Header/Header";
import Landing from "@/components/Landing/Landing";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <main className="px-4 flex flex-col text-white md:container mx-auto">
        <Landing/>
        <About />
        <Skills/>
        <Projects/>
      </main>
    </>
  );
};

export default Home;
