"use client";

import React from "react";
import Carousel from "../commons/carousel";
import Quote from "../commons/icons/quote";
import clsx from "clsx";
import { motion } from 'framer-motion';

function TestimonialSection({ TestimonialData, animate }) {

    const { TestimonialSectiondata, image, slider } = TestimonialData || {}
    console.log(animate, "ssss")
    return (
        <div className={clsx("relative z-10", image ? " py-32  min-h-screen flex items-center justify-center" : "pb-[60px] md:pb-[80px] lg:pb-[100px]")} style={{ backgroundImage: `url(${image})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
            {image && <div className='bg-black/30 px-8 w-full absolute inset-0 -z-10'></div>}
            <div className="container">
                {slider === true ? <Carousel
                    slidesPerView={1}
                    spaceBetween={16}
                    data={TestimonialSectiondata}
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
                            <div key={index} className="p-2 sm:p-4" >
                                <Quote className="w-[40px] md:w-[48px] h-[30px] md:h-[37.75px]" />
                                {item.description && <p className="PrimaryDescription !leading-[150%] font-Dosis tracking-[0.65px] my-5">{item.description}</p>}
                                {item.authore && <p className="SecondaryDescription font-OpenSans italic tracking-[0.65px]">{item.authore}</p>}
                            </div>
                        )
                    }}
                /> :
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8">
                        {TestimonialSectiondata && TestimonialSectiondata.map((item, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 100, }}
                                    transition={{ duration: 1, ease: "easeInOut", delay: index * 0.5 }}
                                    className="p-2 sm:p-4">
                                    <Quote className="w-[40px] md:w-[48px] h-[30px] md:h-[37.75px]" />
                                    {item.description && <p className="PrimaryDescription !leading-[150%] font-Dosis tracking-[0.65px] my-5">{item.description}</p>}
                                    {item.authore && <p className="SecondaryDescription font-OpenSans italic tracking-[0.65px]">{item.authore}</p>}
                                </motion.div>
                            )
                        })}
                    </div>
                }
            </div>
        </div>
    );
}

export default TestimonialSection;
