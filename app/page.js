import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Experience from "@/components/Experiences/Experiences";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Landing from "@/components/Landing/Landing";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import React from "react";

export const metadata = {
  title: "Portfolio",
  description: "mahdiyar portfolio",
};

const Home = () => {
  return (
    <>
      <Header />
      <main className="px-6 md:px-4 lg:px-10 flex flex-col gap-10 md:gap-14 text-white md:container mx-auto">
        <Landing />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
