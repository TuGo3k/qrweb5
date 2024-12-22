import React, { useState } from "react";

const categories = [
  { name: "Nature", pics: ["nature1.jpg", "nature2.jpg", "nature3.jpg"] },
  { name: "Cities", pics: ["city1.jpg", "city2.jpg", "city3.jpg"] },
  { name: "Animals", pics: ["animal1.jpg", "animal2.jpg", "animal3.jpg"] },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Combine all pictures for the "All" category
  const allPics = categories.flatMap((category) => category.pics);

  // Determine the pictures to display
  const displayedPics =
    activeCategory === "All"
      ? allPics
      : categories.find((category) => category.name === activeCategory)?.pics ||
        [];

  return (
    <div className="p-4">
      {/* Category Buttons */}
      <div className="flex gap-4 mb-4">
        <button
          className={`py-2 px-4 rounded ${
            activeCategory === "All"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setActiveCategory("All")}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category.name}
            className={`py-2 px-4 rounded ${
              activeCategory === category.name
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setActiveCategory(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedPics.map((pic, index) => (
          <div key={index} className="bg-gray-100 rounded shadow">
            <img
              src={pic}
              alt=""
              className="w-full h-40 object-cover rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
