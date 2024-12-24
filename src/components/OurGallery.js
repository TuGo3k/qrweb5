import React, { useState, useEffect, useRef } from "react";
import { FaLeaf } from "react-icons/fa";
import ReactCardFlip from "react-card-flip";

export const OurGallery = ({ chosen }) => {
  const Gallery = [
    { title: "HAIR CUT", image: "./pic2.jpg", text: "1" },
    { title: "FOOT", image: "./pic3.jpg", text: "2" },
    { title: "BODY", image: "./pic4.jpg", text: "3" },
    { title: "MASSAGE", image: "./pic5.jpg", text: "4" },
    { title: "FACE MASSAGE", image: "./pic6.jpg", text: "5" },
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [flippedIndex, setFlippedIndex] = useState(null);

  const containerRef = useRef(null); // Reference for the gallery container

  // Filter pictures based on active category
  const displayedPics =
    activeCategory === "All"
      ? Gallery // Show all categories
      : Gallery.filter((category) => category.title === activeCategory); // Filter based on category

  // Detect outside clicks
  const handleOutsideClick = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setFlippedIndex(null); // Reset flippedIndex
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full flex justify-center flex-col items-center text-center space-y-5 p-[5%]"
    >
      <h1 className="z-10 text-[23px]">
        <span className="text-pink-500">Our </span>Gallery
      </h1>
      <div className="flex items-center gap-4">
        <div className="w-[70px] bg-[#ec4899] h-[2px]"></div>
        <div>
          <FaLeaf />
        </div>
        <div className="w-[70px] bg-[#ec4899] h-[2px]"></div>
      </div>
      <p className="text-[16px] text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit
        elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>
      <div className="p-4">
        {/* Category Buttons */}
        <div className="flex flex-wrap text-sm font-medium mb-4">
          <button
            className={`py-2 px-4 rounded ${
              activeCategory === "All" ? "text-pink-500" : "text-gray-800"
            }`}
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering outside click
              setActiveCategory("All");
              setFlippedIndex(null);
            }}
          >
            All
          </button>
          {Gallery.map((gallery) => (
            <div key={gallery.title}>
              <span className="text-gray-400">/</span>
              <button
                className={`py-2 px-3 rounded cursor-pointer ${
                  activeCategory === gallery.title
                    ? "text-pink-500"
                    : "text-gray-800 hover:bg-gray-300"
                }`}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering outside click
                  setActiveCategory(gallery.title);
                  setFlippedIndex(null);
                }}
              >
                {gallery.title}
              </button>
            </div>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="">
          {displayedPics.map((category, index) => (
            <ReactCardFlip
              key={index}
              isFlipped={flippedIndex === index}
              flipDirection="horizontal"
            >
              {/* Front Side */}
              <div
                className="bg-gray-100 rounded shadow cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering outside click
                  setFlippedIndex(index);
                }}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover rounded"
                />
              </div>

              {/* Back Side */}
              <div
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering outside click
                  setFlippedIndex(null);
                }}
                className="w-full h-52 bg-pink-600 text-white font-semibold flex flex-col items-center justify-center rounded shadow-md space-y-4 cursor-pointer"
              >
                <h2 className="text-2xl">{category.title}</h2>
                <p>{category.text}</p>
              </div>
            </ReactCardFlip>
          ))}
        </div>
      </div>
    </div>
  );
};
