import React from "react";

const BackgroundVideo = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <iframe
          className="w-[200vw] h-[200vh] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
          src="https://www.youtube.com/embed/WRIENKuU-gY?autoplay=1&mute=1&loop=1&playlist=WRIENKuU-gY"
          frameBorder="0"
          allow="autoplay; loop; muted; fullscreen"
          allowFullScreen
        ></iframe>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Site</h1>
          <p className="text-lg md:text-xl">
            Creating immersive experiences with videos in the background.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
