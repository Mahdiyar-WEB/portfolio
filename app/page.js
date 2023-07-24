import About from "@/components/About/About";
import Header from "@/components/Header/Header";
import Landing from "@/components/Landing/Landing";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <main className="px-4 flex flex-col text-white">
        <Landing/>
        <About />
      </main>
    </>
  );
};

export default Home;
