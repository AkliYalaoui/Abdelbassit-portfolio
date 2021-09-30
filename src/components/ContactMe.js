import Overlay from "./Overlay";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const ContactMe = () => {
  return (
    <>
      <div id="contact-me"></div>
      <section className="mt-16 text-white relative">
        <div className="relative z-10">
          <div className=" p-10 max-w-3xl m-auto flex flex-col sm:flex-row justify-evenly">
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:ia_abedmeraim@esi.dz"
                  target="_blank"
                  className="flex items-center flex-wrap space-x-2"
                  rel="noopener noreferrer"
                >
                  <span>
                    <FaEnvelope color="#ea4335" />
                  </span>
                  <span>ia_abedmeraim@esi.dz</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center flex-wrap space-x-2"
                  href="tel:0540625774"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <FaPhoneAlt color="#34a853" />
                  </span>
                  <span>0540625774</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AbdelbassitAb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center flex-wrap  space-x-2"
                >
                  <span>
                    <FaGithub />
                  </span>
                  <span>AbdelbassitAb</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/abdelbassit-abed-meraim-909b54174/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center flex-wrap  space-x-2"
                >
                  <span>
                    <FaLinkedin />
                  </span>
                  <span>Abdelbassit Abed Meraim</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center flex-wrap  space-x-2"
                  href="https://www.facebook.com/basset.abedmeraim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <FaFacebook color="#1877f2" />
                  </span>
                  <span>Abdelbassit Abedmeraim</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center flex-wrap space-x-2"
                  href="https://www.instagram.com/basset_ab/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <FaInstagram color="#c32aa3" />
                  </span>
                  <span>Bassit Ab</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center flex-wrap space-x-2"
                  href="https://twitter.com/basset123456"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <FaTwitter color="#1da1f2" />
                  </span>
                  <span>Abdelbassit Abedmeraim</span>
                </a>
              </li>
            </ul>
            <div className="mt-8 sm:mt-0 sm:ml-4 grid grid-cols-3 gap-2">
              <span className="inline-block px-2 py-1 rounded border">
                Flutter
              </span>
              <span className="inline-block px-2 py-1 rounded border">
                Dart
              </span>
              <span className="inline-block px-2 py-1 rounded border">Git</span>
              <span className="inline-block px-2 py-1 rounded border">
                Github
              </span>
              <span className="inline-block px-2 py-1 rounded border">
                Projects
              </span>
              <span className="inline-block px-2 py-1 rounded border">
                Teamwork
              </span>
              <span className="inline-block px-2 py-1 rounded border">
                Mobile
              </span>
              <span className="inline-block px-2 py-1 rounded border">Web</span>
              <span className="inline-block px-2 py-1 rounded border">Dev</span>
              <span className="inline-block px-2 py-1 rounded border">
                Html
              </span>
              <span className="inline-block px-2 py-1 rounded border">
                Freelance
              </span>
              <span className="inline-block px-2 py-1 rounded border">
                Learning
              </span>
              <span className="inline-block px-2 py-1 rounded border">Css</span>
              <span className="inline-block px-2 py-1 rounded border">
                Work
              </span>
              <span className="inline-block px-2 py-1 rounded border">
                Apps
              </span>
            </div>
          </div>
          <footer
            className="flex justify-center items-center space-x-1 p-8 pt-4 border-t"
            style={{ borderColor: "#555" }}
          >
            <p>
              Made by{" "}
              <a
                style={{ color: "#42d0fd" }}
                className="hover:underline"
                href="https://akliyalaoui.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Akli Yalaoui
              </a>
            </p>
            <span>. &copy; {new Date().getFullYear()}</span>
          </footer>
        </div>
        <Overlay></Overlay>
      </section>
    </>
  );
};

export default ContactMe;
