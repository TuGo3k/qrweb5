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
export const OurServices = () => {
    const details = [
        {
          id: 0,
          title: "Face Massage",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tristique lectus. Donec pulvinar, mauris sed consectetur lobortis, justo arcu ultricies massa, in egestas dui purus non velit. Donec vel orci in neque porttitor pellentesque.",
          image: "./s1.jpg",
          catId: [0, 3],
        },
        {
          id: 1,
          title: "Body Massage",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tristique lectus. Donec pulvinar, mauris sed consectetur lobortis, justo arcu ultricies massa, in egestas dui purus non velit. Donec vel orci in neque porttitor pellentesque.",
          image: "./s2.jpg",
          catId: [1, 2],
        },
        {
          id: 2,
          title: "Back Massage",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tristique lectus. Donec pulvinar, mauris sed consectetur lobortis, justo arcu ultricies massa, in egestas dui purus non velit. Donec vel orci in neque porttitor pellentesque.",
          image: "./s3.jpg",
          catId: [1, 2],
        },
        {
          id: 3,
          title: "Head Massage",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tristique lectus. Donec pulvinar, mauris sed consectetur lobortis, justo arcu ultricies massa, in egestas dui purus non velit. Donec vel orci in neque porttitor pellentesque.",
          image: "./s4.jpg",
          catId: [0, 3],
        },
      ];
    
  return (
<div className="service w-full flex justify-center flex-col items-center text-center space-y-5 p-[5%]">
        <h1 className="z-10 text-[23px]">
          <span className="text-pink-500">Services </span>for you
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
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="custom-swiper w-full max-w-4xl"
        >
          {details.map((el, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-xs mx-auto bg-white rounded-md shadow-lg p-4">
                <div className="relative">
                  <img
                    src={el.image} // Replace with your actual image path
                    alt={el.title}
                    className="rounded-md w-full"
                  />
                  <div className="absolute top-2 left-2 bg-pink-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    $36
                  </div>
                </div>
                <h3 className="text-center text-lg font-medium text-gray-800 mt-4">
                  {el.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{el.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  )
}
