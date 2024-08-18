import React from "react";
import myImg from "../assets/myImg.png";

const HomeCard = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center mb-20 lg:mb-36">
      <div data-aos="fade-up-right" className="flex flex-col gap-5 lg:w-[50%]">
        <h1 className="text-5xl lg:text-7xl mb-10 gradient-text">Hey!</h1>
        <p className="text-gray-300 text-xl lg:text-2xl ">
Hi, I'm Dipanshu Mandal, a passionate and dedicated Computer Science student at Vellore Institute of Technology. With a strong foundation in web development and a knack for creating efficient, user-friendly digital solutions, I love turning ideas into reality.I have honed my skills in Java, JavaScript, React, and more. Alongside my technical pursuits, I have actively contributed to various leadership roles, driving impactful projects and initiatives. I'm always eager to learn, create, and collaborate on new challenges in the tech world.
        </p>
        <p className="text-gray-300 text-xl lg:text-2xl ">
          I'm committed to furthering my skills an achieving new milestones in
          my career. Let's connect and create something amazing together!
        </p>
      </div>
      <div data-aos="fade-up-left">
        <img
          src={myImg}
          alt="profile"
          className="rounded-full w-[300px] h-[295px] lg:w-[450px] lg:h-[450px] mx-auto "
        />
      </div>
    </div>
  );
};

export default HomeCard;