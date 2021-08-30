import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <h1
      style={{ lineHeight: "1.4" }}
      className="pr-6 py-8 pl-12 text-2xl sm:text-6xl w-11/12"
    >
      Hey, I am a flutter developer,
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("I create modern applications.")
            .pauseFor(500)
            .typeString(" I make your idea a flutter app")
            .start();
        }}
      />
    </h1>
  );
};

export default Intro;
