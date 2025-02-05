// "use client";

// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import clsx from "clsx";
// const Carousel = ({
//     dots = false,
//     hasNavigation = false,
//     swiperWrapperClass = "",
//     wrapperClass = "",
//     className = "",
//     data = [], // Ensure default value is an array
//     renderSlide,
//     swiperSlideClass = "",
//     hasButtons = false,
//     dotVariant,
//     ...rest
// }) => {
//     const [selectedIndex, setSelectedIndex] = useState(0);
//     const swiperRef = useRef(null);

//     // Ensure data is an array
//     const safeData = Array.isArray(data) ? data : [];
//     if (!Array.isArray(data)) {
//         console.warn("Expected 'data' to be an array, but received:", data);
//     }

//     const handlePrev = () => {
//         swiperRef?.current?.swiper?.slidePrev();
//     };

//     const handleNext = () => {
//         swiperRef?.current?.swiper?.slideNext();
//     };

//     const handleSlideChange = (swiper) => {
//         setSelectedIndex(swiper.realIndex);
//     };

//     const goToSlide = (index) => {
//         swiperRef?.current?.swiper?.slideToLoop(index);
//         setSelectedIndex(index);
//     };

//     const paginationButtons = safeData.map((_, i) => (
//         <div>
//             {dotVariant === "priceRate" ?
//                 <div>
//                     <div className="w-full max-w-[1210px] h-[2px] bg-white/50"></div>
//                 </div>

//                 : <button
//                     key={i}
//                     className={clsx(
//                         "flex items-center",
//                         selectedIndex === i && "active border-[2px] border-white rounded-full w-[24px] h-[24px] flex flex-col items-center justify-center"
//                     )}
//                     onClick={() => goToSlide(i)}
//                     aria-label={`Go to slide ${i + 1}`}
//                 >
//                     <div
//                         className={clsx(
//                             "w-[14px] h-[14px] border-[2px] rounded-full",
//                             selectedIndex === i
//                                 ? "bg-white border-transparent"
//                                 : "bg-[#272727] border-transparent "
//                         )}
//                     />
//                 </button>}
//         </div>
//     ));

//     return (
//         <div className={className}>
//             {/* Other content unchanged */}
//             <div className={clsx(wrapperClass)}>
//                 <Swiper
//                     ref={swiperRef}
//                     grabCursor={true}
//                     className={clsx(swiperWrapperClass)}
//                     onSlideChange={handleSlideChange}
//                     {...rest}
//                 >
//                     {safeData.map((item, index) => (
//                         <SwiperSlide key={index} className={clsx(swiperSlideClass)}>
//                             {renderSlide(item, index)}
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>

//             {dots && (
//                 <div className="flex flex-wrap justify-center items-center gap-3 mt-[40px] md:mt-[70px] px-6">
//                     {paginationButtons}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Carousel;




"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import clsx from "clsx";
import RightArrow from "../icons/rightArrow";
import LeftArrow from "../icons/leftArrow";
import Image from "next/image";

const Carousel = ({
    dots = false,
    hasNavigation = false,
    swiperWrapperClass = "",
    wrapperClass = "",
    className = "",
    data = [],
    renderSlide,
    swiperSlideClass = "",
    hasButtons = false,
    dotVariant = "default", // Default dot style
    ...rest
}) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const swiperRef = useRef(null);

    // Ensure data is an array
    const safeData = Array.isArray(data) ? data : [];
    if (!Array.isArray(data)) {
        console.warn("Expected 'data' to be an array, but received:", data);
    }

    const handlePrev = () => {
        swiperRef?.current?.swiper?.slidePrev();
    };

    const handleNext = () => {
        swiperRef?.current?.swiper?.slideNext();
    };

    const handleSlideChange = (swiper) => {
        setSelectedIndex(swiper.realIndex);
    };

    const goToSlide = (index) => {
        swiperRef?.current?.swiper?.slideToLoop(index);
        setSelectedIndex(index);
    };

    return (
        <div className={className}>
            <div className={clsx(wrapperClass)}>
                <Swiper
                    ref={swiperRef}
                    grabCursor={true}
                    className={clsx(swiperWrapperClass)}
                    onSlideChange={handleSlideChange}
                    {...rest}
                >
                    {safeData.map((item, index) => (
                        <SwiperSlide key={index} className={clsx(swiperSlideClass)}>
                            {renderSlide(item, index)}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Custom pagination */}
            {dots && (
                <div className="relative flex justify-center items-center mt-6">
              {dotVariant === "priceRate" ? (
      <div className="relative w-full max-w-auto flex items-center gap-4 mt-10">
      {/* Background Line */}
      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/50 transform -translate-y-1/2"></div>

      {/* Moving Progress Bar with Dots Image */}
      <div
          className="absolute top-1/2 left-0 h-[10px] transition-all duration-500 ease-in-out flex items-center"
          style={{
              width: `${((selectedIndex + 1) / safeData.length) * 100}%`, 
              transform: "translateY(-50%)",
          }}
      >
          <Image
              src="/sliderDots.png"
              alt="Slider Dots"
              width={200} 
              height={10} 
              className="h-auto"
              style={{
                  transition: "transform 0.5s ease-in-out w-full",
                  transform: `translateX(${(selectedIndex / (safeData.length - 1)) * 100}%)`, // Move based on index
              }}
          />
      </div>

      {/* Left Arrow */}
      <button
          className="absolute left-0 lg:-translate-x-12"
          onClick={handlePrev}
      >
          <RightArrow />
      </button>

      {/* Right Arrow */}
      <button
          className="absolute right-0 ld:translate-x-12"
          onClick={handleNext}
      >
          <LeftArrow />
      </button>
  </div>
) : (
    // Default Dots Pagination
    <div className="flex gap-3">
        {safeData.map((_, i) => (
            <button
                key={i}
                className={clsx(
                    "flex items-center",
                    selectedIndex === i &&
                        "border-[2px] border-white rounded-full w-[24px] h-[24px] flex items-center justify-center"
                )}
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
            >
                <div
                    className={clsx(
                        "w-[14px] h-[14px] border-[2px] rounded-full",
                        selectedIndex === i
                            ? "bg-white border-transparent"
                            : "bg-[#272727] border-transparent"
                    )}
                />
            </button>
        ))}
    </div>
)}
                </div>
            )}
        </div>
    );
};

export default Carousel;
