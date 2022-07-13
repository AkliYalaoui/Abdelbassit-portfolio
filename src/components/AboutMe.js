import { FaHome } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { SiFlutter } from "react-icons/si";
import H2 from "./H2";
const AboutMe = () => {
  return (
    <>
      <div id="about-me"></div>
      <section className="p-10 mt-10 text-gray-700 max-w-3xl m-auto">
        <H2># About Me :</H2>
        <article className="flex flex-wrap items-center justify-center mt-4">
          <img
            className="h-40 w-40 rounded-full"
            src="./assets/chelfi2.jpg"
            alt="abdelbassit face"
          />
          <ul className="space-y-4 p-4 min-w-max">
            <li className="flex items-start space-x-3">
              <FaHome color="#42d0fd" fontSize="22px" />
              <span>
                Lives in <strong>chlef, Algeria</strong>.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <IoSchool color="#42d0fd" fontSize="22px" />
              <span>
                Final year student (SIT) at <strong>ESI ex INI</strong>.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <SiFlutter color="#42d0fd" fontSize="22px" />
              <span>
                Working with <strong>flutter</strong> since{" "}
                <strong>May 2020</strong>.
              </span>
            </li>
          </ul>
        </article>
        <H2>## BIO :</H2>
        <p className="my-4 text-gray-500 leading-7">
          Hey, it's Abdelbassit Abed-meraim, I am 21 years old flutter developer
          based in <strong>Chlef</strong>.<br />
          I'm a very <strong>passionate</strong> <strong>fast</strong> learner
          person. I have a good experience with mobile developement and I am
          open to new opportunities
        </p>
      </section>
    </>
  );
};

export default AboutMe;
