import React, { useState } from "react";

function SportInfo() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "LOREM ISPUT DOLOR SIT AMET, CONSECTETUR ADIPISCING ",
      description: "LOREM ISPUT DOLOR SIT AMET, CONSECTETUR ADIPISCING ",
    },
    {
      title: "LOREM ISPUT DOLOR SIT AMET, CONSECTETUR ADIPISCING ",
      description: "LOREM ISPUT DOLOR SIT AMET, CONSECTETUR ADIPISCING ",
    },
    {
      title: "LOREM ISPUT DOLOR SIT AMET, CONSECTETUR ADIPISCING ",
      description: "LOREM ISPUT DOLOR SIT AMET, CONSECTETUR ADIPISCING ",
    },
    {
      title: "LOREM ISPUT DOLOR SIT AMET, CONSECTETUR ADIPISCING ",
      description: "LOREM ISPUT DOLOR SIT AMET, CONSECTETUR ADIPISCING ",
    },
  ];

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full py-[50px] px-[100px] bg-white">
      <div className="flex flex-col items-center justify-center text-center text-[#1A1A1A] bg-[#E8E8E8] ">
        <div className="flex flex-col items-center justify-center text-cente max-w-5xl py-28">
          <h1 className="font-poppins text-[58px] font-bold leading-[76px]">
            {slides[currentSlide].title}
          </h1>
          <p className="text-[26px] leading-[39px] pt-[14px] pb-[36px]">
            {slides[currentSlide].description}
          </p>
          <button className="py-[14.5px] px-[32px] bg-[#1A1A1A] text-[24px] text-[#FEFEFE] rounded-[8px]">
            See More
          </button>
        </div>

        <div className="flex pb-[44px] justify-center  items-center ">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-[14px] h-[14px]  space-x-2.5 rounded-full bg-[#B3B3B3] cursor-pointer mx-[5px] ${
                currentSlide === index ? "w-[66px]" : "w-[14px]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SportInfo;
