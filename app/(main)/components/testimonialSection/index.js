"use client";

import React from "react";
import Carousel from "../commons/carousel";
import Quote from "../commons/icons/quote";
import clsx from "clsx";
import { motion } from 'framer-motion';
import Image from "next/image";

function TestimonialSection({ TestimonialData, animate }) {

    const { TestimonialSectiondata, image } = TestimonialData || {}
    const TestimonialSectiondatalength = TestimonialSectiondata?.length || 0
    return (
        <div className={clsx("relative z-10", image ? " py-32  min-h-screen flex items-center justify-center" : "pb-[60px] md:pb-[80px] lg:pb-[100px]")}>

            <div>
                {image && <Image src={image} alt='' width={1920} height={1100} loading='eager' className='object-cover absolute inset-0 w-full min-h-screen -z-10 ' />}
                {image && <div className='bg-black/30 px-8 w-full absolute inset-0 -z-10'></div>}
            </div>
            <div className="container">
                <Carousel
                    slidesPerView={1}
                    spaceBetween={16}
                    data={TestimonialSectiondata}
                    dots={true}
                    loop={true}
                    breakpoints={{
                        640: {
                            dots: TestimonialSectiondatalength > 2,
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                    }}
                    renderSlide={(item, index) => {
                        return (
                            <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 100 }}
                            animate={animate || animate === true ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                            transition={{ duration: 1, ease: "easeInOut", delay: index * 0.5 }}
                            className="p-2 sm:p-4">
                            <Quote className="w-[40px] md:w-[48px] h-[30px] md:h-[37.75px]" />
                            {item.description && <p className="PrimaryDescription !leading-[150%] font-Dosis tracking-[0.65px] my-5">{item.description}</p>}
                            {item.authore && <p className="SecondaryDescription font-OpenSans italic tracking-[0.65px]">{item.authore}</p>}
                        </motion.div>
                        )
                    }}
                />
            </div>
        </div>
    );
}

export default TestimonialSection;
