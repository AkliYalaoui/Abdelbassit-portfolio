import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = ({ images, source }) => {
  const [id, setId] = useState(0);
  const nextImage = () => {
    setId((prev) => {
      if (prev === images.length - 1) return prev;
      return prev + 1;
    });
  };
  const previousImage = () => {
    setId((prev) => {
      if (prev === 0) return prev;
      return prev - 1;
    });
  };

  return (
    <div className="border-b border-gray-300">
      <div className="h-44 bg-gray-200">
        <img
          src={source + images[id]}
          alt="project preview"
          className="object-contain h-full"
        />
      </div>
      <div className="flex justify-center items-center p-2 space-x-2">
        <button
          disabled={id === 0}
          onClick={previousImage}
          className={`${
            id === 0
              ? "pointer-events-none bg-gray-400 cursor-not-allowed"
              : "cursor-pointer bg-black hover:bg-gray-800"
          } text-white p-1 rounded-full`}
        >
          <FaArrowLeft />
        </button>
        <button
          disabled={id === images.length - 1}
          onClick={nextImage}
          className={`${
            id === images.length - 1
              ? "pointer-events-none bg-gray-400 cursor-not-allowed"
              : "cursor-pointer bg-black hover:bg-gray-800"
          } text-white p-1 rounded-full`}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
