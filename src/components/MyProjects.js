import H2 from "./H2";
import { projects } from "../Projects";
import Carousel from "./Carousel";

const MyProjects = () => {
  return (
    <>
      <div id="my-projects"></div>
      <section className="mt-10 p-10 text-gray-700 relative max-w-3xl m-auto">
        <H2>#### My Projects : </H2>
        <div className="mt-6 flex flex-wrap items-stretch justify-center gap-4">
          {projects.map((prj, id) => (
            <article key={id} className="shadow-2xl w-72">
              <Carousel images={prj.images} source={prj.folder} />
              <h3 className="text-base font-semibold text-center p-2">
                {prj.title}
              </h3>
              <div>
                <h4 className="border-l-4 border-gray-800 ml-2 p-1">
                  Description{" "}
                  <span className="font-extrabold text-gray-800">:</span>{" "}
                </h4>
                <p
                  style={{ lineHeight: "1.7", textIndent: "20px" }}
                  className="p-2"
                >
                  {prj.overview}
                </p>
              </div>

              <div>
                <h4 className="border-l-4 border-gray-800 ml-2 p-1">
                  Github repo
                  <span className="font-extrabold text-gray-800"> :</span>{" "}
                </h4>
                <a
                  style={{ color: "#42d0fd" }}
                  className="underline py-2 pr-2 pl-5"
                  href={prj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  prj.github
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default MyProjects;
