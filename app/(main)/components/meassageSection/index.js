"use client";

import React from "react";
import Carousel from "../commons/carousel";
import Quote from "../commons/icons/quote";
import clsx from "clsx";
import { motion } from 'framer-motion';
import Image from "next/image";
import Button from "../commons/button";

function MeassageSection({ meassageSectionData, animate }) {

    const { image, meassageSectionMeassage } = meassageSectionData || {}
    return (
        <div className={clsx("relative z-10 overflow-hidden", image ? " py-32  min-h-screen flex items-center justify-center" : "pb-[60px] md:pb-[80px] lg:pb-[100px]")}>

            <div>
                {image && <Image src={image} alt='' width={1920} height={1100} loading='eager' className='object-cover absolute inset-0 w-full min-h-screen -z-10 ' />}
                {image && <div className='bg-black/30 px-8 w-full absolute inset-0 -z-10'></div>}
            </div>
            <div className="container">
                <Carousel
                    slidesPerView={1}
                    spaceBetween={16}
                    data={meassageSectionMeassage}
                    dots={true}
                    loop={true}
                    swiperWrapperClass="!overflow-visible"
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                            dots: true
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                            dots: false
                        },
                    }}
                    renderSlide={(item, index) => {
                        const { title, description, button, varient, bgImage } = item || {}
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 100 }}
                                animate={animate || animate === true ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                                transition={{ duration: 1, ease: "easeInOut", delay: index * 0.4 }}
                                className='relative flex flex-col items-center justify-center  z-10'>
                                <div className='absolute inset-0 -z-10 flex items-center justify-center'>
                                    <Image src={bgImage} alt='' width={400} height={400} loading='eager' className='object-contain h-[180px] md:h-[230px] lg:h-auto ' />
                                </div>
                                <div className='h-full flex flex-col items-center justify-center gap-5'>
                                    <h5 className=' text-[26px] md:text-[30px] lg:text-[35px] font-semibold font-Dosis text-center'>
                                        {title}
                                    </h5>
                                    <p className='text-sm md:text-base text-center font-OpenSans tracking-[0.65px]'>{description}</p>
                                    <Button label={button} variant={varient} href={"#"} />
                                </div>


                            </motion.div>
                        )
                    }}
                />
            </div>
        </div>
    );
}

export default MeassageSection;
