import React from 'react'
import { FaLeaf } from "react-icons/fa";
export const OurPrice = () => {
    const priceplan = [
        {
          title: "BASIC PLAN",
          price: 29,
          image: "/pic1.jpg",
          services: [
            "✔ Phone & Email Support",
            "✘ 3 Social Account",
            "✘ Branded Reports",
            "✘ Unlock rewards",
            "✔ Support Forum",
          ],
        },
        {
          title: "PRO PLAN",
          price: 49,
          image: "/pic2.jpg",
          services: [
            "✔ Phone & Email Support",
            "✔ 3 Social Account",
            "✔ Branded Reports",
            "✔ Unlock rewards",
            "✔ Support Forum",
          ],
        },
        {
          title: "PREMIUM PLAN",
          price: 99,
          image: "/pic3.jpg",
          services: [
            "✔ Phone & Email Support",
            "✔ 3 Social Account",
            "✔ Branded Reports",
            "✔ Unlock rewards",
            "✔ Support Forum",
          ],
        },
      ];
  return (
    <div className="w-full flex justify-center flex-col items-center text-center space-y-5 p-[5%]">
    <h1 className="z-10 text-[23px]">
      <span className="text-pink-500">Our </span>Price
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

    {priceplan.map((priceplan, index) => (
      <div
        key={index}
        className="w-full bg-white rounded-lg shadow-lg overflow-hidden  border-b-4 border-pink-500"
      >
        {/* Image Section */}
        <div
          className="w-full relative h-48"
          style={{
            backgroundImage: `url('${priceplan.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full flex flex-col justify-end gap-1 py-5  h-full bg-black bg-opacity-70 ">
            <h3 className=" font-normal text-[20px] text-white">
              {priceplan.title}
            </h3>
            <p className="text-[44px] font-semibold text-white  ">
              ${priceplan.price}
              <span className="text-lg font-medium">/M</span>
            </p>
          </div>
        </div>

        {/* Plan Details */}
        <div className="p-6 text-center ">
          {/* Features */}
          <ul className="mt-4 flex flex-col text-gray-600 space-y-2">
            {priceplan.services.map((service, idx) => (
              <li key={idx} className="flex items-center justify-center">
                {service}
              </li>
            ))}
          </ul>

          {/* Purchase Button */}
          <button className="mt-6 bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition duration-300">
            PURCHASE
          </button>
        </div>
      </div>
    ))}
  </div>
  )
}
