import React from 'react'
import { FaLeaf } from "react-icons/fa";
import { useState } from 'react';

export const OurGallery = () => {
  
   // Get the selected option's data
      const Gallery = [
        { title: "HAIR CUT", image: "./pic2.jpg" },
        { title: "FOOT", image: "./pic3.jpg" },
        { title: "BODY", image: "./pic4.jpg" },
        { title: "MASSAGE", image: "./pic5.jpg" },
        { title: "FACE MASSAGE", image: "./pic6.jpg" },
      ];
      const [activeCategory, setActiveCategory] = useState("All");
    
      // Combine all pictures for the "All" category
      // const allPics = Gallery.flatMap((category) => category.image);
    
      // Determine the pictures to display
      // const displayedPics =
      //   activeCategory === "All"
      //     ? allPics
      //     : Gallery.find((category) => category.title === activeCategory)?.image ||
      //       [];
      // Determine the pictures to display
      const displayedPics =
        activeCategory === "All"
          ? Gallery // Show all categories
          : Gallery.filter((category) => category.title === activeCategory); // Filter based on category
    
  return (
    <div className="w-full flex justify-center flex-col items-center text-center space-y-5 p-[5%]">
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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
      hendrerit elit turpis, a porttitor tellus sollicitudin at.Class aptent
      taciti sociosqu ad litora torquent per conubia nostra, per inceptos
      himenaeos.
    </p>
    <div className="p-4">
      {/* Category Buttons */}
      <div className="flex flex-wrap  text-sm font-medium mb-4">
        <button
          className={`py-2 px-4 rounded ${
            activeCategory === "All" ? " text-pink-500" : " text-gray-800"
          }`}
          onClick={() => setActiveCategory("All")}
        >
          All
        </button>
        {Gallery.map((gallery) => (
          <div>
             <span className="text-gray-400">/</span>
          <button
            key={gallery.title}
            className={`py-2 px-3 rounded cursor-pointer ${
              activeCategory === gallery.title
                ? "text-pink-500 "
                : " text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => setActiveCategory(gallery.title)}
          >
            {gallery.title}
          </button>
         
          </div>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="">
        {displayedPics.map((category, index) => (
          <div key={index} className="bg-gray-100 rounded shadow">
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-40 object-cover rounded"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}
