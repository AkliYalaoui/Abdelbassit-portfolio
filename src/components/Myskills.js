import Overlay from "./Overlay";
import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiMysql,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";

const Myskills = () => {
  return (
    <>
      <div id="my-skills"></div>
      <section
        style={{
          backgroundImage: "url('./flutter.png')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="mt-16 text-white relative"
      >
        <div className="relative z-10 p-4">
          <h2 className="capitalize text-center">
            <span className="p-2 border-b text-xl border-gray-300 font-bold">
              ### My skills
            </span>
          </h2>
          <div
            className="relative m-auto mt-8"
            style={{ height: "420px", width: "300px" }}
          >
            <img
              className="object-cover h-full w-full"
              src="./phone1.png"
              alt="skills displayed inside a phone"
            />
            <div className="grid grid-cols-2 gap-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="text-gray-600 flex justify-center items-center flex-col">
                <SiFlutter fontSize="25px" color="#42d0fd" />
                <h6 className="text-sm">Flutter</h6>
              </div>
              <div className="text-gray-600 flex justify-center items-center flex-col">
                <SiDart fontSize="25px" color="#03589c" />
                <h6 className="text-sm">Dart</h6>
              </div>
              <div className="text-gray-600 flex justify-center items-center flex-col">
                <SiFirebase fontSize="25px" color="#ffcb2d" />
                <h6 className="text-sm">Firebase</h6>
              </div>
              <div className="text-gray-600 flex justify-center items-center flex-col">
                <SiMysql fontSize="25px" color="#00758f" />
                <h6 className="text-sm">Mysql</h6>
              </div>
              <div className="text-gray-600 flex justify-center items-center flex-col">
                <AiFillGithub fontSize="25px" color="#24292f" />
                <h6 className="text-sm">Github</h6>
              </div>
              <div className="text-gray-600 flex justify-center items-center flex-col">
                <SiHtml5 fontSize="25px" color="#dd4b25" />
                <h6 className="text-sm">Html 5</h6>
              </div>
              <div className="text-gray-600 flex justify-center items-center flex-col">
                <SiCss3 fontSize="25px" color="#2862e9" />
                <h6 className="text-sm">Css 3</h6>
              </div>
              <div className="text-gray-600 flex justify-center items-center flex-col">
                <RiTeamLine fontSize="25px" color="purple" />
                <h6 className="text-sm">TeamWork</h6>
              </div>
            </div>
          </div>
        </div>
        <Overlay></Overlay>
      </section>
    </>
  );
};

export default Myskills;
