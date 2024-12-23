import React from 'react'

export const Status = () => {
      const stats = [
        { icon: "😊", number: "458+", label: "HAPPY CLIENTS" },
        { icon: "🏆", number: "698+", label: "WIN AWARDS" },
        { icon: "💇‍♀️", number: "894+", label: "OUR TRAINER" },
        { icon: "💆‍♂️", number: "758+", label: "TREATMENTS" },
      ];
  return (
          <div className="relative w-full">
            {/* Background with Overlay */}
            <div
              className="absolute w-full h-full"
              style={{
                backgroundImage: `url('./hawai.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
    
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
  )
}
