import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Landing from "@/components/Landing/Landing";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <main className="px-4 flex flex-col gap-10 md:gap-14 text-white md:container mx-auto">
        <Landing />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
