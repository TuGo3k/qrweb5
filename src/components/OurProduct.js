import React from 'react'
import { FaLeaf } from "react-icons/fa";
export const OurProduct = () => {
    const productCat = [
        {
          title: "Massage Soup",
          img: "/img1.jpg",
          price: 199.99,
        },
        {
          title: "Massage Soup",
          img: "/img2.jpg",
          price: 159.99,
        },
        {
          title: "Massage Soup",
          img: "/img3.jpg",
          price: 109.99,
        },
      ];
    
  return (
    <div>
        <div className="w-full flex justify-center flex-col items-center text-center space-y-5 p-[5%]">
        <h1 className="z-10 text-[23px]">
          <span className="text-pink-500">Our </span>Product
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

        {productCat.map((el, index) => (
          <div
            key={index}
            className="w-full bg-white rounded-lg  overflow-hidden  border-gray-200"
          >
            {/* Product Image */}
            <div className="w-full h-full bg-gray-100">
              <img
                src={el.img} // Replace with the actual product image URL
                alt="Massage Soap"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {el.title}
              </h3>
              <p className="text-pink-500 text-xl font-bold mt-2">
                ${el.price}
              </p>

              {/* Add to Cart Button */}
              <button className="mt-4  bg-pink-500 text-white p-2 rounded hover:bg-pink-600 transition duration-300">
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
