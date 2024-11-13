import React from "react";
import Hero from "./sub-component/Hero";
import Timeline from "./sub-component/Timeline";
import About from "./sub-component/About";
import Skills from "./sub-component/Skills";
import Portfolio from "./sub-component/Portfolio";
import Contact from "./sub-component/Contact";
import MyApps from "./sub-component/MyApps";

const Home = () => {
  return (
    <article className="px-5 mt-10 sm:mt-14 md:mt-16 lg:mt-24 xl:mt-32 sm:mx-auto w-full max-w-[1050px] flex flex-col gap-14 ">

    <Hero/>
    <Timeline/>
    <About/>
    <Skills/>
    <Portfolio/>
    <MyApps/>
    <Contact/>


    </article>
  );
};

export default Home;
