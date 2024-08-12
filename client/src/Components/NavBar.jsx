import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-end px-5 py-5 fixed top-0 left-0 right-0 shadow-md gap-1 sm:gap-0 z-30 opacity-100">
      <ul className="flex gap-5 text-lg font-semibold text-gray-400 ml-auto">
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-100}
          className="cursor-pointer sm:p-2 transform hover:scale-110 transition duration-300 ease-in-out"
        >
          About
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          offset={-100}
          className="cursor-pointer sm:p-2 transform hover:scale-110 transition duration-300 ease-in-out"
        >
          Skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-100}
          className="cursor-pointer sm:p-2 transform hover:scale-110 transition duration-300 ease-in-out"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-100}
          className="cursor-pointer sm:p-2 transform hover:scale-110 transition duration-300 ease-in-out"
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
