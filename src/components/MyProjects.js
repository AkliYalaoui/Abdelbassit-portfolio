import H2 from "./H2";

const MyProjects = () => {
  return (
    <>
      <div id="my-projects"></div>
      <section className="mt-10 p-10 text-gray-700 relative max-w-3xl m-auto">
        <H2>#### My Projects : </H2>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <div className="shadow-2xl w-72 h-72">a</div>
          <div className="shadow-2xl w-72 h-72">b</div>
        </div>
      </section>
    </>
  );
};

export default MyProjects;
