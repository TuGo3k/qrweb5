import React from 'react'
import { FaLeaf } from "react-icons/fa";
export const Welcome = () => {
  return (
    <div className="w-full flex justify-center flex-col items-center text-center space-y-5 p-[5%]">
    <h1 className="z-10 text-[23px]">
      <span className="text-pink-500">Welcome to </span>Spa center
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
    <p className="text-[16px] text-gray-500">
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting,
      remaining unchanged. It was popularised in the 1960s with the release
      Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley.
    </p>
    {[
      {
        icon: "/female-hairs.svg",
        title: "Massage Therapy",
        label:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        icon: "/scissors.svg",
        title: "Natural Spa",
        label:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        icon: "/razors.svg",
        title: "Skin & Beauty Care",
        label:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
    ].map((item, id) => (
      <div
        key={id}
        className="flex flex-col items-center text-center bg-white p-6 shadow-md rounded-md w-64"
      >
        <div className="border-2 p-2 mb-4">
          <div className="w-16 h-16 bg-[#4b3941] flex items-center justify-center rounded-md ">
            {/* Replace the path inside `src` with your logo's path */}
            <img
              src={item.icon}
              alt="Massage Therapy Logo"
              className="h-8 w-8 font-white"
            />
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-600 text-sm">{item.label}</p>
      </div>
    ))}
    <div className="buttons w-full flex justify-center gap-4 p-10">
      <button className="bg-pink-500 text-white px-4 py-1 rounded-sm">
        SEE OUR PLANS
      </button>
      <button className="bg-[#4b3941] text-white px-4 py-1 rounded-sm">
        MORE DETAIL
      </button>
    </div>
  </div>
  )
}
