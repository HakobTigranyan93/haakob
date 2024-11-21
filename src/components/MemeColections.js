import { useState, useRef } from "react";
import HeaderSection from "./Section/HeaderSection";

function MemeColections({ newsData }) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    containerRef.current.style.transition = "none";
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    const moveX = e.clientX - startX;
    containerRef.current.scrollLeft = scrollLeft - moveX;
  };

  const onMouseUp = () => {
    setIsDragging(false);
    containerRef.current.style.transition = "scroll-left 0.3s ease-out";
  };

  const onMouseLeave = () => {
    setIsDragging(false);
    containerRef.current.style.transition = "scroll-left 0.3s ease-out";
  };

  return (
    <div className="px-[100px] font-poppins bg-[#666666]">
      <HeaderSection
        title="Meme Collections"
        buttonText="See all"
        titleClass="text-[#fefefe]"
        buttonClass="text-[#e8e8e8]"
        containerClass="pt-[80px]"
        reverseOrder={true}
      />

      <div
        ref={containerRef}
        className="overflow-hidden pt-[50px] pb-[100px]"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
      >
        <div className="flex space-x-[20px]">
          {newsData.map((meme) => (
            <div key={meme.id} className="flex-shrink-0">
              <div
                className="bg-[#b3b3b3] rounded-t-[8px] w-full h-[502px]"
                style={{
                  backgroundImage: `url(${meme.imageUrl})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="px-[166px] rounded-b-[8px] bg-[#fefefe] py-[24px] text-center">
                {meme.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MemeColections;
