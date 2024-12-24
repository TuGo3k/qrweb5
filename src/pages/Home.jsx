import React, { use } from "react";
import ReactPlayer from "react-player";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useState, useEffect } from "react";
import data from "../data/data.json";
import ContactInfo from "../components/ContactInfo";
import { WhatPeopleSay } from "../components/WhatPeopleSay";
import { OurProduct } from "../components/OurProduct";
import { OurPrice } from "../components/OurPrice";
import { OurGallery } from "../components/OurGallery";
import { SpecialOffer } from "../components/SpecialOffer";
import { OurExperts } from "../components/OurExperts";
import { OurServices } from "../components/OurServices";
import { Welcome } from "../components/Welcome";
import { Status } from "../components/Status";
import { OurClient } from "../components/OurClient";
import { ReactComponent as Woman } from "../assets/svg/woman.svg";
import { ReactComponent as EyeMakeUp } from "../assets/svg/eye-makeup.svg";
import { ReactComponent as FemaleHair } from "../assets/svg/female-hair.svg";
import { ReactComponent as Facial } from "../assets/svg/facial.svg";
import { ReactComponent as Massage } from "../assets/svg/massage.svg";
// import {video } from "./video.webm";

export const Home = () => {
  const categories = [
    { id: 0, title: "face-massage" },
    { id: 1, title: "body-massage" },
    { id: 2, title: "back-massage" },
    { id: 3, title: "head-massage" },
  ];

  const PriceCat = [
    { index: 0, title: "SPA", svg: <Woman /> },
    { index: 1, title: "HAIR MAKEUP", svg: <EyeMakeUp /> },
    { index: 2, title: "WAXING", svg: <FemaleHair /> },
    { index: 3, title: "FACIAL", svg: <Facial /> },
    { index: 4, title: "MASSAGE", svg: <Massage /> },
  ];

  const [bg, setBg] = useState(0);
  const [chosen, setChosen] = useState(0);
  // Function to get the selected option based on `chosen`
  const getSelectedData = () => {
    switch (chosen) {
      case 0:
        return data.option1;
      case 1:
        return data.option2;
      case 2:
        return data.option3;
      case 3:
        return data.option4;
      case 4:
        return data.option5;
      default:
    }
  };

  const selectedData = getSelectedData();

  const selected =
    "bg-pink-500 w-full flex justify-center border-2 flex-col items-center py-3 gap-5 text-white";
  const unselected =
    "bg-white w-full flex justify-center flex-col items-center border-2 py-3 gap-5 text-[#ec4899]";

  const [isScrolled, setIsScrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Check if scrolled down
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      <div
        className={`navbar w-full ${
          isScrolled ? "bg-[#1a1a1a]" : "bg-none"
        } fixed top-0 z-50 flex justify-between py-5 px-[5%] items-center transition-all duration-300`}
      >
        <img className="h-5" src="./logo.png" alt="Logo" />
        <GiHamburgerMenu className="text-white text-xl" />
      </div>

      {/* YouTube Video Background */}
      <div className="relative w-full h-screen bg-cover bg-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <iframe
            className="w-[200vw] h-[200vh] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
            src={'/video.webm'}
            frameBorder="0"
            allow="autoplay; loop; muted; fullscreen"
            allowFullScreen
          ></iframe>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to My Site
            </h1>
            <p className="text-lg md:text-xl">
              Creating immersive experiences with videos in the background.
            </p>
          </div>
        </div>
      </div>
      <Welcome />
      <OurServices />
      <div className="w-full flex justify-center flex-col items-center text-center space-y-5 p-[5%]">
        <h1 className="z-10 text-[23px]">
          <span className="text-pink-500">Our </span>Pricing
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
        <div className="flex w-full font-semibold">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            navigation
            loop={true}
            spaceBetween={20}
            slidesPerView={2}
            className="custom-swiper"
          >
            {PriceCat.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() => {
                    setChosen(index);
                    setBg(0); // Reset bg when a new chosen index is set
                  }}
                  className={`p-4 rounded-lg cursor-pointer ${
                    chosen === index ? selected : unselected
                  }`}
                >
                  {/* Render the inline SVG */}
                  <div className="w-[60px] mx-auto">
                    {React.cloneElement(item.svg, {
                      className: "w-[60px] h-[60px]",
                      fill: chosen === index ? "white" : "#ec4899",
                    })}
                  </div>
                  <h2 className="text-center mt-2">{item.title}</h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="grid grid-cols-2 w-full py-5">
          {selectedData.map((el, index) => (
            <button
              onClick={() => setBg(index)}
              key={index}
              className={`${
                bg === index ? "bg-pink-600 text-white" : "bg-white"
              } flex border-2 flex-wrap p-2 rounded shadow-md hover:shadow-lg`}
            >
              {el.title}
            </button>
          ))}
        </div>
        {/* {selectedData.map((el, index) => ())} */}

        <div className="w-full ">
          {selectedData[bg] && (
            <div className="flex w-full   flex-col">
              <img
                className="w-full "
                src={selectedData[bg].image}
                alt={selectedData[bg].title || "Image"}
              />
              <div className="flex items-start text-start flex-col ">
                <h2 className="text-xl font-semibold mt-5">
                  {selectedData[bg].title}
                </h2>
                <p className="text-[18px] mt-2 text-[#ec5598] font-semibold">
                  ${selectedData[bg].lowprice} - ${selectedData[bg].highprice}
                </p>
                <p className="text-gray-600 mt-2">
                  {selectedData[bg].description}
                </p>
                <button className="mt-5 px-8 py-2 text-[14px] font-bold bg-[#ec5598] text-white rounded-sm">
                  MORE
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Status />
      <OurExperts />
      <SpecialOffer />
      <OurGallery/>
      <OurPrice />
      <OurProduct />
      <WhatPeopleSay />
      <ContactInfo />
      <OurClient />
    </div>
  );
};
