import React, { useState } from "react";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className={`relative w-64 h-96 transform-style-3d transition-transform duration-500 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Card Inner */}
        <div className="absolute inset-0 w-full h-full transform-style-3d">
          {/* Front Side */}
          <div
            className="absolute inset-0 bg-blue-500 text-white flex items-center justify-center backface-hidden cursor-pointer"
            onClick={handleFlip}
          >
            <p className="text-xl font-bold">Click to Flip</p>
          </div>

          {/* Back Side */}
          <div
            className="absolute inset-0 bg-pink-500 text-white flex items-center justify-center backface-hidden transform rotate-y-180"
            onClick={handleFlip}
          >
            <p className="text-xl font-bold">Back Side</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
