import React from 'react'
import { FaLeaf } from "react-icons/fa";
export const OurExperts = () => {
      const experts = [
        { name: "Camila", role: "Founder, Beauty Spa", image: "./ex1.jpg" },
        { name: "Milagros", role: "Founder, Beauty Spa", image: "./ex2.jpg" },
        { name: "Agustina", role: "Founder, Beauty Spa", image: "./ex3.jpg" },
      ];
  return (
    <div className="w-full flex justify-center flex-col items-center text-center space-y-5 p-[5%]">
    <h1 className="z-10 text-[23px]">
      <span className="text-pink-500">Our </span>Experts
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
    {experts.map((item, index) => (
      <div key={index} className="gap-5 flex flex-col">
        <img src={item.image} alt="Camila" className="w-full " />
        <div className="flex justify-center flex-col gap-5">
          <h2 className="text-[24px] text-center text-xl font-semibold">
            {item.name}
          </h2>
          <p className="text-[16px] text-gray-600 text-sm">{item.role}</p>
        </div>
      </div>
    ))}
  </div>
  )
}
