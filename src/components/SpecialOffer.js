import React from 'react'

export const SpecialOffer = () => {
  return (
    <div className="flex items-center justify-center w-full py-[65px] px-[40px] bg-pink-500">
         <div className="bg-pink-400 rounded-[50px] p-8 max-w-sm shadow-lg text-center">
           <h2 className="text-white text-[32px] font-bold mb-2">
             Our Special Offer
           </h2>
           <p className="text-white text-[18px] font-semibold mb-4">
             YOU OWE YOURSELF THIS MOMENT
           </p>
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
  )
}
