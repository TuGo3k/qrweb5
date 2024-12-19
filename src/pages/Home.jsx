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
  const [chosen, setChosen] = useState(1);

  const selected =
    "bg-pink-500 w-full flex justify-center flex-col items-center py-3 gap-5 text-white";
  const unselected =
    "bg-white w-full flex justify-center flex-col items-center py-3 gap-5 text-[#ec4899]";

  const option1 = [
    {
      title: "Massage Therapy",
      image: "/s1.jpg",
      lowprice: 40,
      highprice: 80,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy text of the printing and eentially unchanged.",
    },
    {
      title: "Facials",
      image: "/s2.jpg",
      lowprice: 40,
      highprice: 80,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy text of the printing and eentially unchanged.",
    },
    {
      title: "Pedicures",
      image: "/s3.jpg",
      lowprice: 40,
      highprice: 80,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy text of the printing and eentially unchanged.",
    },
    {
      title: "Manicures",
      image: "/s4.jpg",
      lowprice: 40,
      highprice: 80,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy text of the printing and eentially unchanged.",
    },
    {
      title: "Body Wraps",
      image: "/s5.jpg",
      lowprice: 40,
      highprice: 80,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy text of the printing and eentially unchanged.",
    },
    {
      title: "Waxing & Cosmetics",
      image: "/s6.jpg",
      lowprice: 40,
      highprice: 80,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy text of the printing and eentially unchanged.",
    },
  ];
  const option2 = [
    {
      title: "Hair Color",
      image: "/s1.jpg",
      lowprice: 40,
      highprice: 80,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy text of the printing and eentially unchanged.",
    },
    {
      title: "Braids & Twist",
      image: "/s2.jpg",
      lowprice: 40,
      highprice: 80,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy text of the printing and eentially unchanged.",
    },
    {
      title: "Corrective Color",
      image: "/s3.jpg",
      lowprice: 40,
      highprice: 80,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy text of the printing and eentially unchanged.",
    },
    {
      title: "Hair Extension",
      image: "/s4.jpg",
      lowprice: 40,
      highprice: 80,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy text of the printing and eentially unchanged.",
    },
    {
      title: "Hair Cut",
      image: "/s5.jpg",
      lowprice: 40,
      highprice: 80,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy text of the printing and eentially unchanged.",
    },
    {
      title: "Partial Foil",
      image: "/s6.jpg",
      lowprice: 40,
      highprice: 80,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy text of the printing and eentially unchanged.",
    },
  ];

  const [list, setList] = useState(
    option1.map((item, index) => ({
      ...item,
      selected: index === 0, // Set the default selected object
    }))
  );

  const toggleSelect = (id) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id
          ? { ...item, selected: !item.selected }
          : { ...item, selected: false } // Ensure only one is selected
      )
    );
  };


  const selectedItem = (`${chosen}` === 1 ? option1 : option2).find((item) => item.selected);
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
        <div className="flex w-full font-semibold">
          <div
            onClick={() => setChosen(1)}
            className={chosen === 1 ? selected : unselected}
          >
            <svg
              fill={chosen === 1 ? "#fff" : "#000000"}
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              width="800px"
              height="800px"
              viewBox="0 0 959.199 959.199"
              className="size-[60px]"
            >
              <g>
                <path
                  d="M788.143,259.2c-16.699-44.2-41.399-81.7-73.399-111.5c-32.7-30.5-73-52.8-120-66.5c0,0,0,0-0.101-0.1
		c-52.3-52.3-121.9-81.1-195.9-81.1s-143.5,28.8-195.8,81.1c-52.3,52.3-81.1,121.9-81.1,195.9c0,18.9,1.9,37.5,5.6,55.7
		c-14.3,41.7-20.8,85.9-19.4,132.101c2.4,78.5,27.9,160.899,75.6,244.899c0.1,0.102,0.2,0.301,0.3,0.4
		c18.6,140.6,138.9,249.1,284.6,249.1c128.3,0,237-84.199,273.8-200.398c9.8-7.5,19.101-15.602,27.9-24.5
		c52.3-52.301,81.1-121.9,81.1-195.9c0-50.9-13.6-99.701-39.1-142.201C812.443,370.3,809.843,316.5,788.143,259.2z M597.643,705.199
		c-33.5,0-60.6-27.1-60.6-60.6s27.1-60.6,60.6-60.6s60.601,27.1,60.601,60.6S631.043,705.199,597.643,705.199z M630.843,435.2h145.9
		c16.2,31.601,24.7,66.701,24.7,103.201c0,50-16.101,97.5-45.801,136.699c0-1,0-2.1,0-3.1
		C755.643,573.699,706.143,486.9,630.843,435.2z M762.143,385.2h-20.3c-76.8,0-153.399-1.2-230.3-1.3
		c-55.8,0-112.901,5-163.901,27.7c-83.399,37.1-133.399,117.099-155.1,203c-1.2-2.9-2.3-5.799-3.5-8.699
		c-19.2-49-29.7-96.801-31.1-142.701c-0.5-15.7,0.1-31.1,1.7-46.2c1.5-14,3.9-27.8,7.2-41.3c3.3-13.6,7.5-26.8,12.6-39.8
		c5.8-14.6,12.7-28.9,20.7-42.7c30.8-52.9,77.3-97.7,134.6-129.4c53.399-29.6,113.399-45.9,168.8-45.9c17.6,0,34.6,1.6,50.6,4.9
		c4.7,1,9.4,2,13.9,3.1c14.7,3.6,28.7,8.2,41.8,13.6c14.4,6,27.9,13,40.3,21.2c41.301,26.9,71.7,65.5,90.801,115.6
		c7,18.4,11.699,36.5,14.899,53.1c2.9,14.9,4.5,28.6,5.3,40.2C761.743,375.2,762.043,380.5,762.143,385.2z M398.842,50
		c31.2,0,61.4,6.3,89.3,18.2c-59.3,2.7-121.7,20.9-177.5,51.8c-55,30.5-101.399,71.7-135.8,120.4c7.5-46.7,29.4-89.7,63.5-123.8
		C281.142,73.6,338.142,50,398.842,50z M342.443,705.199c-33.5,0-60.601-27.1-60.601-60.6c0-18.799,8.5-35.5,21.9-46.6
		c6.7-5.5,14.5-9.6,23.1-11.9c5-1.299,10.2-2,15.5-2c3.3,0,6.5,0.301,9.7,0.801c28.9,4.6,50.9,29.6,50.9,59.799
		c0,11.602-3.301,22.5-8.9,31.701c-4.5,7.299-10.4,13.5-17.4,18.299c-7.1,4.9-15.3,8.301-24.1,9.701
		C349.342,704.9,345.943,705.199,342.443,705.199z M515.143,874.199c-5.899,13.201-23.8,22.801-45.1,22.801
		c-21.3,0-39.3-9.6-45.1-22.801c-2.101-4.6,3-9.299,10.1-9.299h70.201C512.243,864.9,517.243,869.5,515.143,874.199z M505.143,839.5
		h-70.2c-7.101,0-12.101-4.699-10.101-9.301c4.9-11.1,14-19.6,30.3-22.1c2-0.299,4,0,5.9,0.9l4.5,2.199c2.8,1.4,6.1,1.4,8.9,0
		l4.399-2.199c1.8-0.9,3.901-1.199,5.901-0.9c16.3,2.4,25.399,11,30.3,22.1C517.243,834.9,512.243,839.5,505.143,839.5z"
                />
                <path
                  d="M386.542,665.9c2.1-3.4,2.8-7.701,1.6-11.9c-2-6.9-8.399-11.199-15.199-10.9c-1.101,0.1-2.2,0.201-3.301,0.5
		c-7.1,2-14.699,3.201-22.6,3.5c-1.2,0-2.4,0.1-3.6,0.1c-8.801,0-17.4-1.1-25.301-3.299c-1.399-0.4-2.699-0.801-4-1.201
		c-7.899-2.6-16.3,1.701-18.899,9.5c-2.601,7.9,1.7,16.301,9.5,18.9c9.399,3.1,19.3,5,29.7,5.701c3,0.199,6,0.299,9,0.299
		c6.699,0,13.3-0.5,19.699-1.5c5-0.799,9.9-1.799,14.7-3.199C381.642,671.5,384.642,669.1,386.542,665.9z"
                />
                <path
                  d="M625.643,643.801c-8.199,2.299-17,3.5-26.199,3.5c-10.301,0-20.4-1.602-29.301-4.5c-7.899-2.602-16.3,1.699-18.899,9.5
		c-2.601,7.898,1.7,16.299,9.5,18.898c12.1,4,25.1,6,38.7,6c12,0,23.5-1.6,34.399-4.699c8-2.301,12.601-10.6,10.3-18.5
		C641.943,646.1,633.643,641.5,625.643,643.801z"
                />
              </g>
            </svg>

            <h2>SPA</h2>
          </div>
          <div
            onClick={() => setChosen(2)}
            className={chosen === 2 ? selected : unselected}
          >
            <svg
              fill={chosen === 1 ? "#000" : "#fff"}
              height="800px"
              width="800px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 266.484 266.484"
              className="size-[60px]"
            >
              <g>
                <g>
                  <g>
                    <path
                      d="M117.863,177.846c-0.36-1.084-0.312-2.228,0.132-3.212c0.42-0.932,1.152-1.608,2.064-1.912
				c0.452-0.148,0.924-0.2,1.42-0.144l4.472,0.52l-2.612-3.668c-3.112-4.376-8.316-6.616-13.552-5.844
				c-3.748,0.548-7.056,2.516-9.316,5.552c-2.26,3.036-3.208,6.768-2.66,10.512c0.548,3.744,2.52,7.052,5.556,9.316
				c2.472,1.844,5.412,2.812,8.436,2.812c0.688,0,1.384-0.052,2.076-0.152c4.772-0.696,8.824-3.752,10.836-8.168l1.704-3.74
				l-3.996,0.968C120.555,181.127,118.543,179.895,117.863,177.846z M113.295,187.667c-2.66,0.388-5.364-0.284-7.544-1.912
				c-2.18-1.624-3.592-4-3.984-6.684c-0.396-2.688,0.28-5.368,1.908-7.544c1.628-2.176,4-3.592,6.688-3.988
				c0.484-0.072,0.968-0.104,1.452-0.104c2.132,0,4.196,0.684,5.916,1.932c-1.484,0.768-2.66,2.016-3.384,3.612
				c-0.864,1.908-0.964,4.08-0.284,6.124c0.868,2.616,2.912,4.548,5.3,5.312C117.799,186.159,115.671,187.323,113.295,187.667z"
                    />
                    <path
                      d="M203.427,136.711c1.284-1.14,2.896-2.572,4.908-4.364l8.552-7.596l-32.304,7.588c-1.108,0.26-2.688,0.608-4.2,0.936
				l5.328-8.584l-3.764,0.152c-3.008,0.12-72.644,1.308-94.732,9.28c-21.804,7.872-67.416,41.092-69.092,54.94
				c-0.412,0.512-0.28,3.672-0.28,3.672c0.008,0.008,0.124,0.088,0.2,0.14c0,0,29.24,19.4,59.66,25.552
				c0.132,0.028,0.264,0.04,0.4,0.04c0.92,0,1.752-0.652,1.94-1.592c0.216-1.076-0.476-2.12-1.552-2.336
				c-27.676-5.596-49.968-19.416-56.412-23.708c22.94-16.884,39.064-26.284,53.18-31.624c-3.788,7.452-5.216,15.86-3.988,24.3
				c1.58,10.808,7.268,20.352,16.028,26.88c7.132,5.32,15.608,8.116,24.348,8.116c1.988,0,3.988-0.144,5.988-0.436
				c10.808-1.576,20.356-7.268,26.884-16.024s9.252-19.532,7.68-30.34c-0.756-5.184-2.536-10.036-5.076-14.44
				c14.736,2.532,30.592,4.772,44.252,2.736c3.548,2.044,6.296,3.784,7.888,4.844c-4.296,5.188-18.88,21.756-40.004,34.74
				c-0.932,0.576-1.228,1.796-0.652,2.732c0.576,0.936,1.8,1.216,2.732,0.652c25.908-15.924,42.36-37.88,43.02-38.748
				c0,0-3.06-2.672-7.22-5.38c11.928-3.092,21.592-10.296,26.368-24.776l1.372-4.152l-4.04,1.68
				C217.411,133.007,209.891,135.414,203.427,136.711z M148.271,172.279c0.156,1.052,0.24,2.104,0.304,3.156l-19.536,0.168
				c-0.628,0.004-1.132,0.516-1.124,1.144c0.004,0.624,0.512,1.124,1.132,1.124c0.004,0,0.008,0,0.008,0l19.564-0.168
				c-0.004,4.2-0.684,8.336-2.08,12.256l-17.976-7.188c-0.592-0.236-1.24,0.048-1.476,0.632c-0.232,0.584,0.052,1.244,0.632,1.476
				l17.96,7.18c-1.14,2.664-2.564,5.228-4.34,7.612c-0.712,0.956-1.468,1.864-2.256,2.736l-13.484-13.26
				c-0.452-0.44-1.168-0.436-1.604,0.012c-0.436,0.448-0.432,1.164,0.012,1.604l13.48,13.256c-3.412,3.34-7.4,5.952-11.792,7.736
				l-6.764-18.576c-0.216-0.584-0.872-0.888-1.452-0.676c-0.588,0.216-0.896,0.864-0.68,1.456l6.776,18.604
				c-2.096,0.704-4.264,1.248-6.5,1.576c-1.784,0.26-3.56,0.344-5.332,0.348l-0.168-19.608c-0.004-0.624-0.512-1.124-1.132-1.124
				c-0.004,0-0.008,0-0.008,0c-0.628,0.004-1.132,0.516-1.124,1.144l0.168,19.552c-3.968-0.236-7.836-1.14-11.512-2.624
				l7.132-17.836c0.232-0.584-0.052-1.244-0.632-1.476c-0.588-0.228-1.244,0.048-1.476,0.632l-7.116,17.8
				c-2.156-1.032-4.232-2.28-6.192-3.74c-1.264-0.944-2.432-1.98-3.552-3.056l13.488-13.72c0.436-0.448,0.432-1.164-0.016-1.604
				c-0.444-0.44-1.164-0.436-1.6,0.012l-13.472,13.704c-2.792-3.036-5.016-6.508-6.644-10.276l17.616-7.552
				c0.58-0.248,0.844-0.916,0.596-1.492c-0.248-0.576-0.92-0.844-1.488-0.596l-17.588,7.54c-0.836-2.32-1.448-4.74-1.812-7.236
				c-0.224-1.536-0.32-3.072-0.352-4.6l19.488-0.168c0.628-0.004,1.132-0.516,1.124-1.144c-0.004-0.624-0.512-1.124-1.132-1.124
				c-0.004,0-0.008,0-0.008,0l-19.468,0.168c0.156-3.916,0.936-7.752,2.304-11.4l18.324,7.324c0.14,0.056,0.28,0.084,0.42,0.084
				c0.448,0,0.876-0.268,1.056-0.712c0.232-0.584-0.052-1.244-0.632-1.476l-18.292-7.312c0.828-1.848,1.824-3.632,2.964-5.348
				c2.348-0.736,4.66-1.36,6.952-1.9l11.292,11.1c0.224,0.216,0.512,0.328,0.796,0.328c0.292,0,0.584-0.112,0.808-0.34
				c0.436-0.448,0.432-1.164-0.012-1.604l-10.244-10.072c2.78-0.576,5.552-1.044,8.356-1.404l4.732,9.204
				c0.2,0.392,0.596,0.616,1.008,0.616c0.176,0,0.352-0.04,0.52-0.128c0.556-0.284,0.772-0.968,0.488-1.528l-4.344-8.444
				c2.004-0.22,4.024-0.42,6.088-0.568c6.612-0.488,14.944,0.564,24.004,2.06l-9.872,9.516c-0.452,0.436-0.464,1.152-0.032,1.604
				c0.224,0.232,0.52,0.348,0.816,0.348c0.284,0,0.568-0.104,0.784-0.32l11.08-10.68c2.24,0.384,4.504,0.78,6.808,1.184
				c0.272,0.048,0.548,0.096,0.816,0.144c1.076,1.524,2.02,3.132,2.856,4.804l-18.2,7.804c-0.58,0.248-0.844,0.916-0.596,1.492
				c0.184,0.428,0.604,0.688,1.044,0.688c0.148,0,0.3-0.028,0.444-0.092l18.32-7.856
				C146.939,166.055,147.807,169.102,148.271,172.279z M141.723,152.255c-12.952-2.288-25.188-4.444-34.572-3.76
				c-27.9,2.028-47.924,10.524-82.792,35.708c9.352-14.044,44.732-40.948,63.828-47.22c22.324-7.332,74.88-7.276,90.136-7.976
				l-6.284,10.128l4.576-0.96c0,0,6-1.26,8.88-1.936l16.924-3.976c-2.888,2.572-15.116,9.724-15.116,9.724l9.852-0.4
				c5.808-0.236,14.9-2.684,20.992-4.748C206.115,163.611,171.987,157.599,141.723,152.255z"
                    />
                    <path
                      d="M254.403,55.503c-1.34-0.576-2.832-0.592-4.204-0.048c-1.364,0.544-2.432,1.584-3.012,2.928
				c-0.568,1.32-0.584,2.78-0.06,4.104c0.536,1.34,1.568,2.392,2.912,2.956c0.68,0.288,1.4,0.432,2.116,0.432
				c0.692,0,1.384-0.132,2.048-0.396c2.792-1.112,4.172-4.268,3.072-7.036C256.743,57.115,255.723,56.07,254.403,55.503z
				 M253.359,63.375c-0.788,0.316-1.66,0.312-2.44-0.02c-0.776-0.328-1.376-0.932-1.68-1.708c-0.308-0.764-0.296-1.604,0.032-2.368
				c0.34-0.788,0.968-1.4,1.772-1.72c0.392-0.156,0.796-0.236,1.204-0.236c0.428,0,0.856,0.088,1.26,0.26
				c0.76,0.328,1.352,0.932,1.656,1.696C255.807,60.887,254.995,62.723,253.359,63.375z"
                    />
                    <path
                      d="M265.683,55.087c-1.12-2.812-3.292-5.012-6.112-6.2c-2.804-1.184-5.92-1.212-8.828-0.052l-70.54,31.672
				c-1.536-0.932-3.068-1.9-4.624-2.748c-6.144-3.252-11.984-5.704-17.868-7.488c-7.868-2.34-15.244-3.384-22.736-3.228
				l-1.508,0.064c-1.724,0.068-3.504,0.14-4.704,0.36l-6.044,0.952c-3.86,0.8-7.764,1.98-11.928,3.604
				c-7.156,2.724-13.284,5.928-19.776,9.32l-1.196,0.624c-6.34,3.432-12.888,7.372-19.48,11.728
				c-0.44,0.3-48.424,34.224-56.752,42.612c-0.796,0.804-1.612,1.592-2.428,2.384c-2.956,2.856-6.016,5.816-8.236,9.492
				c-2.716,4.504-4.396,11.28-1.116,16.488l1.74,3.484l1.78-1.24c0,0,3.12-2.172,8.348-6.068l10.52-7.676
				c3.304-2.412,6.952-5.072,10.952-7.876c4.404-3.16,9.232-6.476,14.316-9.94c5.228-3.544,10.656-7.112,16.152-10.604
				c4.896-3.148,10.016-6.236,15.208-9.364l6.872-4.016c4.492-2.592,9.136-5.276,13.856-7.732
				c6.072-3.304,12.504-6.728,18.368-9.392c3.184-1.388,5.96-2.444,8.456-3.22l4.364-1.048c1.104-0.268,1.876-0.372,2.616-0.48
				c0.504-0.072,0.996-0.14,1.444-0.228c5.104-0.692,10.912-0.664,16.796,0.084c0.912,0.112,1.884,0.292,2.824,0.44l-7.588,2.488
				c-0.272,0.108-1.812,0.732-2.264,0.916l-7.848,1.672c0,0-10.352,1.988-15.772,4.152c-11.836,4.724-19.14,13.348-16.632,19.64
				c1.296,3.248,4.848,5.248,9.992,5.624c0.588,0.044,1.196,0.064,1.812,0.064c4.236,0,9.056-1.004,13.78-2.892
				c5.412-2.16,14.296-7.844,14.296-7.844l6.628-4.08c0.56-0.224,2.32-0.932,2.56-1.028l12.456-5.712
				c0.652-0.26,1.36-0.632,1.652-1.416c0.008-0.016,0.004-0.032,0.008-0.048l13.552-4.752c0.184,0.06,0.384,0.12,0.564,0.18
				l10.956,3.672c1.888,0.692,3.572,1.232,4.972,1.684c0.852,0.276,1.596,0.512,2.288,0.756l10.424,3.252l-5.868-5.76
				c-0.112-0.108-2.808-2.748-7.872-6.92l-0.084-0.072c-0.592-0.48-1.232-0.996-1.892-1.528l62.676-21.976
				c2.832-1.132,5.068-3.292,6.292-6.084C266.747,60.987,266.807,57.895,265.683,55.087z M154.083,85.426
				c-6.208-0.792-12.372-0.824-17.916-0.068c-0.488,0.092-0.92,0.152-1.364,0.212c-0.848,0.12-1.736,0.244-2.956,0.54
				c0,0-9.22,2.292-13.544,4.512c-5.868,3.016-12.516,6.192-18.616,9.512c-4.76,2.476-9.448,5.18-13.976,7.8l-6.936,4.056
				c-5.224,3.148-10.376,6.252-15.296,9.416c-5.516,3.508-10.98,7.096-16.244,10.664c-5.12,3.488-9.972,6.82-14.384,9.988
				c-4,2.808-7.672,5.484-10.996,7.904l-10.532,7.688c-2.752,2.048-4.912,3.612-6.328,4.632c-2.004-3.916-0.584-8.88,1.328-12.052
				c1.948-3.232,4.692-5.88,7.592-8.684c0.836-0.812,1.672-1.62,2.492-2.444c7.712-7.776,53.764-40.492,56.136-42.108
				c6.476-4.276,12.924-8.16,19.136-11.52l1.168-0.612c6.388-3.336,12.416-6.488,19.368-9.136c3.972-1.548,7.668-2.668,11.292-3.416
				l5.872-0.92c1.02-0.188,2.736-0.252,4.244-0.312l1.5-0.064c0.472-0.012,0.948-0.016,1.424-0.016c6.504,0,13.072,1.012,20.02,3.08
				c5.624,1.708,11.236,4.06,17.128,7.184c0.708,0.384,1.404,0.82,2.104,1.228l-10.82,4.86
				C161.095,86.482,157.523,85.842,154.083,85.426z M163.271,92.331l-3.968-0.5l2.936-0.964c0.172,0.036,0.344,0.072,0.512,0.108
				c0.036,0.112,0.068,0.216,0.116,0.34L163.271,92.331z M155.159,93.19c0.056,0.016,8.744,1.044,8.856,0.996l0.756,1.892
				l-13.512-1.612L155.159,93.19z M130.419,117.751c-4.868,1.94-9.792,2.852-13.816,2.552c-3.484-0.256-5.88-1.392-6.568-3.116
				c-1.416-3.548,4.148-10.352,14.4-14.444c5.776-2.304,10.944-2.864,14.704-2.356l3.584,8.984
				C140.331,112.319,136.171,115.455,130.419,117.751z M151.567,107.015l-5.412,3.312l-5.2-13.032l6.432-1.388
				c0.168-0.064,0.336-0.04,0.508-0.04c0.248,1.292,0.752,3.024,1.752,5.532c0.74,1.844,1.532,3.528,2.236,4.748
				c0.08,0.14,0.196,0.32,0.3,0.492C152.027,106.775,151.831,106.903,151.567,107.015z M154.891,105.622
				c-0.212-0.276-0.46-0.692-0.72-1.164l2.764,0.228L154.891,105.622z M160.355,103.119c-0.076-0.024-6.924-0.544-7.08-0.464
				c-0.344-0.752-0.692-1.544-1.02-2.368l11.644,1.208L160.355,103.119z M151.587,98.503c-0.276-0.772-0.5-1.488-0.684-2.136
				c0,0,14.492,1.612,14.604,1.564l0.66,1.652c0.032,0.08,0.064,0.136,0.096,0.212C166.263,99.799,151.755,98.406,151.587,98.503z
				 M195.891,96.69l-6.72-2.252l2.912-1.02c1.404,1.088,2.736,2.136,3.86,3.044l0.072,0.056c0.156,0.128,0.308,0.256,0.46,0.384
				C196.283,96.835,196.087,96.763,195.891,96.69z M261.883,62.199c-0.804,1.832-2.268,3.248-4.048,3.96l-89.44,31.36l-2.492-6.244
				l86.384-38.784c0.912-0.364,1.86-0.544,2.808-0.544c0.996,0,1.988,0.2,2.932,0.596c1.832,0.772,3.244,2.196,3.964,4.012v0.004
				C262.723,58.375,262.679,60.375,261.883,62.199z"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <h2>HAIR MAKEUP</h2>
          </div>
        </div>
        {/* <div className="grid grid-cols-2 place-items-between w-full py-5">
          {(chosen === 1 ? option1 : option2).map((el, index) => (
            <button
              key={index}
              className="flex border-2 flex-wrap p-2 rounded shadow-md hover:shadow-lg"
            >
              {el.title}
            </button>
          ))}
        </div> */}

<div className="grid grid-cols-2 place-items-between w-full py-5 gap-2">
        {(chosen === 1 ? option1 : option2).map((item, index) => (
          <button
            key={index}
            onClick={() => toggleSelect(index)}
            className={`p-4 border rounded ${
              item.selected ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
      {selectedItem ? (
        <div className="mt-5">
          <h2 className="text-lg font-semibold">Selected Item</h2>
          <p>ID: {selectedItem.id}</p>
          <p>Title: {selectedItem.title}</p>
        </div>
      ) : (
        <p className="mt-5 text-red-500">No item selected</p>
      )}


        {/* {(chosen === 1 ? option1 : option2).map((el, index) => (
          <div
            key={index}
            className="flex w-full justify-center items-center text-center"
          >
            <img className="w-32 h-32" src={el.image} alt={el.title} />
          </div>
        ))} */}

        {/* <div>{el}</div> */}
      </div>
    </div>
  );
};
