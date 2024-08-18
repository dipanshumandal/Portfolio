import React from "react";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useForm, ValidationError } from '@formspree/react';

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mnnabajj");
  return (
    <div
      data-aos="fade-left"
      className="flex flex-col lg:flex-row lg:items-center mb-20 lg:mb-36 "
    >
      <span className="uppercase text-3xl lg:text-2xl font-bold gradient-text mb-8 lg:mb-0 rotate-0 lg:-rotate-90">
        Get Started!
      </span>
      <div className="flex flex-col lg:flex-row lg:ml-20 lg:gap-36">
        <div className="mb-5 lg:mb-0">
          <h1 className="text-5xl lg:text-7xl gradient-text mb-5 lg:mb-10">
            Contact me
          </h1>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:dipanshumandal2002@gmail.com"
              className="text-white font-mono underline text-lg lg:text-2xl"
            >
              dipanshumandal2002@gmail.com
            </a>
            <a
              href="tel:+919898988989"
              className="text-white font-mono underline text-lg lg:text-2xl"
            >
            </a>
          </div>
          <div className="flex gap-2 mt-4">
            <a
                href="https://github.com/dipanshumandal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-4xl hover:scale-110 transition duration-300 ease-in-out">
                <AiFillGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/dipanshu-mandal-8799001a5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-4xl hover:scale-110 transition duration-300 ease-in-out"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/dipanshu.jpg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-4xl hover:scale-110 transition duration-300 ease-in-out"
                >
                  <AiFillInstagram />
                </a>
                <div className="mt-0 flex items-center justify-center px-11">
                    <a
                    href="
                    https://drive.google.com/file/d/1zTL0b-icTj9k1XMDcgLANPoQl6PFuJ-Y/view?usp=sharing"
                    download="DipanshuMandalResume.pdf"
                    target="_blank"
                    className="px-3 py-2 text-lg lg:text-1xl bg-purple-500 hover:bg-purple-600 border font-bold text-white rounded-lg">
                    Show Resume
                    </a>
                </div>
            </div>
    </div>
        <div>
          <form className="flex flex-col p-3" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 transition-all duration-100 rounded-lg border-white gradient-text font-mon text-lg lg:text-2xl  mb-5 lg:mb-10 w-full lg:w-[30vw]"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 transition-all duration-100 rounded-lg border-white gradient-text font-mon text-lg lg:text-2xl  mb-5 lg:mb-10 w-full lg:w-[30vw]"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
            <textarea
              name="message"
              id="message"
              rows="3"
              className="bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 transition-all duration-100 rounded-lg border-white gradient-text font-mon text-lg lg:text-2xl  mb-5 lg:mb-10 w-full lg:w-[30vw]"
              placeholder="Enter your message"
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <button
              type="submit"
              className="px-3 py-2 text-lg lg:text-2xl bg-purple-500 hover:bg-purple-600 border font-bold text-white rounded-lg"
              disabled={state.submitting}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;