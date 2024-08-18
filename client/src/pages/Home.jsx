import React, { useEffect } from "react";
import PortfolioCard from "../Components/PortfolioCard";
import HomeCard from "../Components/HomeCard";
import AboutCard from "../Components/AboutCard";
import SkillsSection from "../Components/SkillsSection";
import ProjectSection from "../Components/ProjectSection";
import ContactSection from "../Components/ContactSection";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Components/NavBar";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="w-[80vw]  mx-auto">
        <Navbar/>
        <PortfolioCard />
        <div className="justify-items-center">
        <section id="about">
        <HomeCard />
        </section>
        <AboutCard />
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="projects">
          <ProjectSection />
        </section>
        <section id="contact">
         <ContactSection />
        </section>
        </div>
    </div>
  );
};

export default Home;