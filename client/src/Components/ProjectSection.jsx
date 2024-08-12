import React from "react";
// import ProjectCard from "./ProjectCard";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { useRef } from "react";
import AboutDay from "../assets/QuickSign.png";
import QuickSign from "../assets/QuickSign.png";
import { AiFillGithub } from "react-icons/ai";
import { RiSignalTowerFill } from "react-icons/ri";

const ProjectSection = () => {
  const scrollRef = useRef(null);

  const hScrollRight = () => {
    scrollRef.current.scrollLeft += 500;
  };

  const hScrollLeft = () => {
    scrollRef.current.scrollLeft -= 500;
  };
  return (
    <div data-aos="fade-down" className="mb-20 lg:mb-36">
      <h1 className="text-5xl lg:text-7xl gradient-text mb-10">My Projects</h1>
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll gap-8 lg:p-3 scroll-hide"
      >
        <div className="p-4 -m-4">
      <div className="h-fit w-[300px] md:w-[320p] border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-clip lg:overlow-hidden hover:shadow-md lg:hover:scale-105 transition-all backdrop-blur-3xl shadow-xl">
        <a href="">
          <img
            src={AboutDay}
            alt="project-img"
            className="lg:h-48 h-[200px] w-full object-cover object-center"
          />
        </a>
        <div className="p-4 flex flex-col lg:gap-3">
          <h2 className="tracking-widest text-2xl text-white">Focusify</h2>
          <h1 className="text-lg lg:text-xl font-bold text-gray-400">
          Developed a Chrome extension to streamline tab management, allowing users to save, close, and reopen tabs with ease. Implemented session storage with Chrome's storage.sync API and designed a user-friendly interface for efficient task focus.
          </h1>
          <div className="flex items-center justify-between">
            <a href="#">
              <AiFillGithub className="text-pink-500 font-bold inline-flex item-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-purple-600 cursor-pointer" />
            </a>
            <a href="#">
              <RiSignalTowerFill className="text-pink-500 font-bold inline-flex item-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-purple-600 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="p-4 -m-4">
      <div className="h-fit w-[300px] md:w-[320p] border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-clip lg:overlow-hidden hover:shadow-md lg:hover:scale-105 transition-all backdrop-blur-3xl shadow-xl">
        <a href="">
          <img
            src={AboutDay}
            alt="project-img"
            className="lg:h-48 h-[200px] w-full object-cover object-center"
          />
        </a>
        <div className="p-4 flex flex-col lg:gap-3">
          <h2 className="tracking-widest text-2xl text-white">Focusify</h2>
          <h1 className="text-lg lg:text-xl font-bold text-gray-400">
          Developed a Chrome extension to streamline tab management, allowing users to save, close, and reopen tabs with ease. Implemented session storage with Chrome's storage.sync API and designed a user-friendly interface for efficient task focus.
          </h1>
          <div className="flex items-center justify-between">
            <a href="#">
              <AiFillGithub className="text-pink-500 font-bold inline-flex item-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-purple-600 cursor-pointer" />
            </a>
            <a href="#">
              <RiSignalTowerFill className="text-pink-500 font-bold inline-flex item-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-purple-600 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="p-4 -m-4">
      <div className="h-fit w-[300px] md:w-[320p] border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-clip lg:overlow-hidden hover:shadow-md lg:hover:scale-105 transition-all backdrop-blur-3xl shadow-xl">
        <a href="">
          <img
            src={QuickSign}
            alt="project-img"
            className="lg:h-48 h-[200px] w-full object-cover object-center"
          />
        </a>
        <div className="p-4 flex flex-col lg:gap-3">
          <h2 className="tracking-widest text-2xl text-white">QuickSign</h2>
          <h1 className="text-lg lg:text-xl font-bold text-gray-400">
          Developed an advanced online tool for creating and saving digital signatures, featuring customizable options, responsive design, and seamless storage, retrieval, and PNG download capabilities.

          </h1>
          <div className="flex items-center justify-between">
            <a href="https://github.com/dipanshumandal/QuickSign" target="_blank">
              <AiFillGithub className="text-pink-500 font-bold inline-flex item-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-purple-600 cursor-pointer" />
            </a>
            <a href="#">
              <RiSignalTowerFill className="text-pink-500 font-bold inline-flex item-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-purple-600 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
        {/* <ProjectCard />
        <ProjectCard /> */}
      </div>
      <div className="flex justify-center items-center gap-3 mt-2 select-none">
        <HiArrowSmLeft
          onClick={hScrollLeft}
          className="text-xl lg:text-2xl cursor-pointer text-yellow-500 hidden lg:block"
        />
        <h2 className="gradient-text font-mono text-lg uppercase">
          Slide for more
        </h2>
        <HiArrowSmRight
          onClick={hScrollRight}
          className="text-xl lg:text-2xl cursor-pointer text-yellow-500 hidden lg:block"
        />
      </div>
    </div>
  );
};

export default ProjectSection;