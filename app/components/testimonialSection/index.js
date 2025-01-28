"use client";

import React from "react";
import Carousel from "../commons/carousel";
import Quote from "../commons/icons/quote";

function TestimonialSection({ TestimonialData }) {
    return (
        <div className="pb-[60px] md:pb-[80px] lg:pb-[100px]">
            <div className="container">
                <Carousel
                    slidesPerView={1}
                    spaceBetween={16}
                    data={TestimonialData}
                    dots={true}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                    }}
                    renderSlide={(item, index) => {
                        return (
                            <div key={index} className="p-2 sm:p-4">
                                <Quote className="w-[40px] md:w-[48px] h-[30px] md:h-[37.75px]" />
                                {item.description && <p className="PrimaryDescription !leading-[150%] font-Dosis tracking-[0.65px] my-5">{item.description}</p>}
                                {item.authore && <p className="SecondaryDescription font-OpenSans italic tracking-[0.65px]">{item.authore}</p>}
                            </div>
                        )
                    }}
                />
            </div>
        </div>
    );
}

export default TestimonialSection;
