import React from "react";
import { FaLeaf } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { IoIosSend } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaRss, FaYoutube, FaInstagram } from "react-icons/fa";
export const OurClient = () => {
  const clientCat = [
    { index: 0, image: "./logo1.png" },
    { index: 1, image: "./logo2.png" },
    { index: 2, image: "./logo3.png" },
    { index: 3, image: "./logo4.png" },
  ];
  const [toggle, setToggle] = React.useState(null);
  const blogs = [
    {
      date: "20",
      month: "MAR",
      title: "Blog title first",
      author: "Admin",
      views: 28,
    },
    {
      date: "30",
      month: "MAR",
      title: "Blog title first",
      author: "Admin",
      views: 29,
    },
    {
      date: "31",
      month: "MAR",
      title: "Blog title first",
      author: "Admin",
      views: 30,
    },
  ];

  const icons = [
    { icon: <FaFacebookF />, link: "https://facebook.com" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
    { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
    { icon: <FaRss />, link: "#" },
    { icon: <FaYoutube />, link: "https://youtube.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
  ];

  const menuItems = ["About", "FAQ", "Career", "Our Team", "Services", "Gallery"];
  

  return (
    <div>
      <div className="w-full flex justify-center flex-col items-center text-center space-y-5 p-[5%] bg-white">
        <h1 className="z-10 text-[23px]">
          <span className="text-pink-500">Our </span>Client
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
          // spaceBetween={20}
          slidesPerView={2}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="custom-swiper w-full max-w-4xl"
        >
          {clientCat.map((el, index) => (
            <SwiperSlide key={index}>
              <div
                className={toggle === index ? "saturate-100" : "saturate-0"} // Highlight only the selected slide.
                onClick={() => setToggle(index)} // Update the `toggle` state to the clicked index.
              >
                <img
                  src={el.image}
                  alt={`Client ${index}`} // Add an alt for accessibility
                  className="cursor-pointer" // Add a pointer cursor to indicate interactivity
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full text-start text-white bg-pink-400 p-5 space-y-5">
        <h2 className="text-[18px]">
          We are ready to build your dream tell us more about your project
        </h2>
        <p className="text-[13px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          viverra mauris eget tortor.
        </p>
        <button className="py-2 px-5 rounded-sm bg-[#4b3941]">
          CONTACT US
        </button>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto space-y-8">
        {/* Section Title */}
        <div className="heregtei">
          <h2 className="text-2xl font-semi text-gray-800  flex items-center">
            About Company
          </h2>
          <div className="flex items-center gap-4">
            <div>
              <FaLeaf />
            </div>
            <div className="w-[70px] bg-[#ec4899] h-[2px]"></div>
          </div>
        </div>

        {/* Logo and Title */}
        <div className="flex items-center mb-4">
          <img
            src="./logo(1).png" // Replace with your logo's path
            alt="Beauty Spa Logo"
            className=" mr-4"
          />
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm">
          Thewebmax ipsum dolor sit amet, interior adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
          wisi enim ad minim veniam, quis tation. sit amet, consectet. ipsum
          dolor sit amet, consectetuer and item adipiscing. ipsum dolor sit.
        </p>
        <div className="heregtei">
          <h2 className="text-2xl font-semi text-gray-800  flex items-center">
            Resent Post
          </h2>
          <div className="flex items-center gap-4">
            <div>
              <FaLeaf />
            </div>
            <div className="w-[70px] bg-[#ec4899] h-[2px]"></div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100  max-w-lg mx-auto">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="flex items-start bg-white rounded-lg  p-4 "
          >
            {/* Date Box */}
            <div className="flex flex-col items-center justify-center bg-black text-white w-16 h-16 rounded-lg mr-4">
              <span className="text-2xl font-bold">{blog.date}</span>
              <span className="text-sm uppercase">{blog.month}</span>
            </div>

            {/* Blog Content */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-600 flex items-center">
                <span className="flex items-center mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 inline-block mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 20.25V3.75m-6.75 6.75h13.5"
                    />
                  </svg>
                  By {blog.author}
                </span>
                <span className="flex items-center ml-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 inline-block mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12h18m-9 9v-18"
                    />
                  </svg>
                  {blog.views}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto space-y-8">
        <div className="heregtei">
          <h2 className="text-2xl font-semi text-gray-800  flex items-center">
            Useful links
          </h2>
          <div className="flex items-center gap-4">
            <div>
              <FaLeaf />
            </div>
            <div className="w-[70px] bg-[#ec4899] h-[2px]"></div>
          </div>
        </div>
      </div>
        <div className="bg-gray-100 p-6 max-w-md mx-auto">
      {menuItems.map((item, index) => (
        <div key={index} className="flex justify-start items-center py-4 border-b border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="text-gray-800 text-sm">{item}</span>
        </div>
      ))}
    </div>
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto space-y-8">
        <div className="heregtei">
          <h2 className="text-2xl font-semi text-gray-800  flex items-center">
           Newsletter
          </h2>
          <div className="flex items-center gap-4">
            <div>
              <FaLeaf />
            </div>
            <div className="w-[70px] bg-[#ec4899] h-[2px]"></div>
          </div>
        </div>
       <div className="flex">
       <input value='' type="text" placeholder="ENTER YOUR EMAIL" className="p-2 w-full">
       </input>
       <button className="bg-pink-500 py-2 px-4"><IoIosSend className="text-white size-5" /> </button>
       </div>
        <div className="heregtei">
          <h2 className="text-2xl font-semi text-gray-800  flex items-center">
           Social Links
          </h2>
          <div className="flex items-center gap-4">
            <div>
              <FaLeaf />
            </div>
            <div className="w-[70px] bg-[#ec4899] h-[2px]"></div>
          </div>
        </div>
        <div className="flex space-x-2">
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center w-6 h-6 border border-gray-400 hover:bg-gray-200 transition-colors duration-200"
        >
          <span className="text-gray-700 text-lg">{item.icon}</span>
        </a>
      ))}
    </div>

      </div>
      <footer className="bg-gray-100 text-center py-6 relative">
    
      {/* Copyright */}
      <p className="text-gray-600 text-sm">
        © 2023 Your Company. All Rights Reserved. Designed By{' '}
        
      </p>
      {/* Footer Links */}
      <div className="mt-4">
        <a href="#" className="text-gray-600 text-sm mx-2 hover:underline">
          Terms & Condition
        </a>
        <span className="text-gray-400">/</span>
        <a href="#" className="text-gray-600 text-sm mx-2 hover:underline">
          Privacy Policy
        </a>
        <span className="text-gray-400">/</span>
        <a href="#" className="text-gray-600 text-sm mx-2 hover:underline">
          Contact Us
        </a>
      </div>
      {/* Back to Top Button */}
      
    </footer>
    </div>
  );
};
