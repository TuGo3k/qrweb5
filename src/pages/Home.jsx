import React, { use } from "react";
import ReactPlayer from "react-player";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useState } from "react";
import data from "../data/data.json"; // Adjust path if necessary

export const Home = () => {
  const categories = [
    { id: 0, title: "face-massage" },
    { id: 1, title: "body-massage" },
    { id: 2, title: "back-massage" },
    { id: 3, title: "head-massage" },
  ];

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

  const PriceCat = [
    { index: 0, title: "SPA", svg: "./woman.svg" },
    { index: 1, title: "HAIR MAKEUP", svg: "./eye-makeup.svg" },
    { index: 2, title: "WAXING", svg: "./female-hairs.svg" },
    { index: 3, title: "FACIAL", svg: "./facial.svg" },
    { index: 4, title: "MASSAGE", svg: "./massage.svg" },
  ];

  const stats = [
    { icon: "😊", number: "458+", label: "HAPPY CLIENTS" },
    { icon: "🏆", number: "698+", label: "WIN AWARDS" },
    { icon: "💇‍♀️", number: "894+", label: "OUR TRAINER" },
    { icon: "💆‍♂️", number: "758+", label: "TREATMENTS" },
  ];
  const experts = [
    { name: "Camila", role: "Founder, Beauty Spa", image: "./ex1.jpg" },
    { name: "Milagros", role: "Founder, Beauty Spa", image: "./ex2.jpg" },
    { name: "Agustina", role: "Founder, Beauty Spa", image: "./ex3.jpg" },
  ];

  const [chosen, setChosen] = useState(0);

  const selected =
    "bg-pink-500 w-full flex justify-center border-2 flex-col items-center py-3 gap-5 text-white";
  const unselected =
    "bg-white w-full flex justify-center flex-col items-center border-2 py-3 gap-5 text-[#ec4899]";

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

  const selectedData = getSelectedData(); // Get the selected option's data
  const [bg, setBg] = useState(0);
  const Gallery =[
    {title: "ALL", image: ['./pic1.jps', './pic2.jpg']},
    {title: "HAIR CUT", image: './pic2.jpg'},
    {title: "FOOT", image: './pic3.jpg'},
    {title: "BODY", image: './pic4.jpg'},
    {title: "MASSAGE", image: './pic4.jpg'},
    {title: "FACE MASSAGE", image: './pic4.jpg'},
]
 
  return (
    <div className="">
      <div className="navbar w-full bg-purple-500 flex justify-between px-[5%]">
        <img className="" src="./logo.png"></img>
        <GiHamburgerMenu />
      </div>
      <div className="video w-full  relative h-screen z-[-10] bg-green-600 ">
        {/* <ReactPlayer className="bg-cover w-full" url='https://www.youtube.com/watch?v=LXb3EKWsInQ' /> */}
      </div>
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
        <div className="flex w-full  font-semibold">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            // pagination={{ clickable: true }}
            // autoplay={{ delay: 3000 }}
            navigation
            loop={true}
            spaceBetween={20}
            slidesPerView={2}
            className="custom-swiper "
          >
            {PriceCat.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() => {
                    setChosen(index);
                    setBg(0); // Reset bg when a new chosen index is set
                  }}
                  className={`p-4 rounded-lg cursor-pointer  ${
                    chosen === index ? selected : unselected
                  }`}
                >
                  <img
                    className="w-[60px] mx-auto"
                    src={item.svg}
                    alt={item.title}
                  />
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
      <div className="relative w-full">
  {/* Background with Overlay */}
  <div
    className="bg-pink-400  bg-opacity-100 absolute top-0 left-0 w-full h-full"
    style={{ backgroundImage: `url('./hawai.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 1  }}
  >

  </div>

  {/* Content */}
  <div className="relative text-white p-8 flex flex-col space-y-8 bg-pink-700 bg-opacity-90">
    {stats.map((item, index) => (
      <div key={index} className="flex items-center space-x-4">
        <div className="text-4xl">{item.icon}</div>
        <div>
          <p className="text-4xl font-bold">{item.number}</p>
          <p className="uppercase font-medium">{item.label}</p>
        </div>
      </div>
    ))}
  </div>
</div>
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
          <h2 className="text-[24px] text-center text-xl font-semibold">{item.name}</h2>
          <p className="text-[16px] text-gray-600 text-sm">{item.role}</p>
        </div>
      </div>
    ))}



    </div>
    <div className="flex items-center justify-center w-full py-[65px] px-[40px] bg-pink-500">
      <div className="bg-pink-400 rounded-[50px] p-8 max-w-sm shadow-lg text-center">
        <h2 className="text-white text-[32px] font-bold mb-2">Our Special Offer</h2>
        <p className="text-white text-[18px] font-semibold mb-4">YOU OWE YOURSELF THIS MOMENT</p>
        <p className="text-white text-[14px] mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          hendrerit elit turpis, a porttitor tellus sollicitudin squ ad litora
          torquent per conubia.
        </p>
        <button className="bg-pink-600 text-white py-2 px-6 rounded-md hover:bg-pink-700">
          VIEW PACKAGES
        </button>
      </div>
    </div>
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
        <div className="flex flex-wrap flex-grow-1 justify-start space-x-4 text-gray-500 text-sm font-medium ">
        {Gallery.map((category, index) => (
          <span
            key={index}
            className={`cursor-pointer ${
              category.title === "All" ? "text-pink-500 font-bold" : "hover:text-pink-400"
            }`}
          >
            {category.title}
          </span>
        ))}
      </div>
    </div>
    </div>
  );
};
