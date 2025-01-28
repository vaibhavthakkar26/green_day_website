"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import clsx from "clsx";
const Carousel = ({
    dots = false,
    hasNavigation = false,
    swiperWrapperClass = "",
    wrapperClass = "",
    className = "",
    data = [], // Ensure default value is an array
    renderSlide,
    swiperSlideClass = "",
    hasButtons = false,
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

    const paginationButtons = safeData.map((_, i) => (
        <button
            key={i}
            className={clsx(
                "flex items-center",
                selectedIndex === i && "active border-[2px] border-white rounded-full w-[24px] h-[24px] flex flex-col items-center justify-center"
            )}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
        >
            <div
                className={clsx(
                    "w-[14px] h-[14px] border-[2px] rounded-full",
                    selectedIndex === i
                        ? "bg-white border-transparent"
                        : "bg-[#272727] border-transparent "
                )}
            />
        </button>
    ));

    return (
        <div className={className}>
            {/* Other content unchanged */}
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

            {dots && (
                <div className="flex flex-wrap justify-center items-center gap-3 mt-[40px] md:mt-[70px] px-6">
                    {paginationButtons}
                </div>
            )}
        </div>
    );
};

export default Carousel;
