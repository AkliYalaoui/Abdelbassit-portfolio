import NavBar from ".//NavBar";
import Intro from "./Intro";
import Overlay from "./Overlay";
import { MdWork } from "react-icons/md";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { IoArrowDownCircle } from "react-icons/io5";

const Header = () => {
  return (
    <header
      className="min-h-screen relative"
      style={{
        backgroundImage: "url('./assets/chelfi.png')",
        backgroundAttachment: "fixed",
        backgroundPosition: "top right",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <NavBar />
      <div className="relative z-10  text-white">
        <h3 className="text-center mb-10 pt-24 text-gray-300">
          Available for freelancing
          <span className="inline-block ml-1">
            <MdWork />
          </span>
        </h3>
        <Intro />
        <div className="text-gray-300 flex items-center justify-center flex-col mt-14">
          <ul className="flex space-x-4 justify-center items-center flex-wrap">
            <li className="flex items-center flex-wrap justify-center space-x-1">
              <span>
                <FaEnvelope />
              </span>
              <a
                href="mailto:ia_abedmeraim@esi.dz"
                target="_blank"
                rel="noopener noreferrer"
              >
                ia_abedmeraim@esi.dz
              </a>
            </li>
            <li className="flex items-center flex-wrap justify-center space-x-1">
              <span>
                <FaPhoneAlt />
              </span>
              <a
                href="tel:0540625774"
                target="_blank"
                rel="noopener noreferrer"
              >
                0540625774
              </a>
            </li>
          </ul>
          <a href="#about-me" className="animate-bounce mb-4 mt-10">
            <IoArrowDownCircle color="#42d0fd" fontSize="50px" />
          </a>
        </div>
      </div>
      <Overlay></Overlay>
    </header>
  );
};

export default Header;
