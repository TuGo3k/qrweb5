import React from 'react'
import { FaLeaf } from "react-icons/fa";
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
export const WhatPeopleSay = () => {
    const comments = [
        {
          comment: [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and specimen book.",
          ],
          name: "RINDA SMITH",
          role: "Founder",
          image: "/comment1.jpg",
        },
        {
          comment: [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and specimen book.",
          ],
          name: "AGUSTINA",
          role: "Spa Experts",
          image: "/comment2.jpg",
        },
        {
          comment: [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and specimen book.",
          ],
          name: "RINDA SMITH",
          role: "Founder",
          image: "/comment1.jpg",
        },
        {
          comment: [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and specimen book.",
          ],
          name: "AGUSTINA",
          role: "Spa Experts",
          image: "/comment2.jpg",
        },
      ];
  return (
    <div className="w-full flex justify-center flex-col items-center text-center space-y-5 p-[5%] bg-gray-200">
    <h1 className="z-10 text-[23px]">
      <span className="text-pink-500">What </span>People Say
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
    <div className="w-full">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        navigation
        slidesPerView={1}
        // loop={true}
        // autoplay={{ delay: 3000 }}

        className="custom-swiper2 "
      >
        {comments.map((item, index) => (
          <SwiperSlide>
            <div
              key={index}
              className="bg-white w-full text-start  rounded-lg shadow-lg p-6 "
            >
              <img
                src={item.image} // Replace with the actual image URL
                alt="Profile"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <p className="text-pink-500 text-7xl">“</p>
              <p className="text-gray-600 text-sm mb-4">{item.comment}</p>
              <h4 className="text-gray-800 font-bold text-lg">
                {item.name}
              </h4>
              <p className="text-pink-500 text-sm">{item.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
  )
}
