"use client"

import React from 'react';
import Button from '../../(main)/components/commons/button/index';
import Image from 'next/image';
import { motion } from "framer-motion";

const HomeHeroSection = ({ bannerData, animate }) => {
    return (
        <div>
            <div className=''>
                {bannerData && bannerData.map((item, index) => {
                    const { title, description, Titletag, button, link, variant, mediaType } = item;
                    const TitleTagComponent = Titletag || 'h2';

                    return (
                        <div key={index} className='flex flex-col items-center justify-center w-full relative z-10'>
                            <div className='bg-black/30   w-full max-w-[1920px] absolute inset-0 -z-10'>
                            </div>
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className='w-full max-w-[1250px] py-32 px-4 sm:px-8 min-h-screen  mx-auto flex flex-col items-center justify-center'>
                                {title && <TitleTagComponent className='text-center font-bold font-Dosis text-white'>{title}</TitleTagComponent>}
                                {description && <p className='text-white text-center font-OpenSans SecondaryDescription pt-[30px] w-full max-w-[648px]'>{description}</p>}
                                {button &&
                                    <div className='pt-[40px]'>
                                        <Button label={button} href={link} variant={variant} />
                                    </div>
                                }
                            </motion.div>
                            {mediaType === 'image' ? (
                                <Image
                                    src={item.image}
                                    alt='image'
                                    width={1920}
                                    height={1063}
                                    priority
                                    loading='eager'
                                    className='absolute inset-0 w-full max-w-[1920px] h-[1063px] -z-10'
                                />
                            ) : (
                                <video
                                    src={item.item}
                                    poster={item.thumbnail}
                                    width={1920}
                                    height={1063}
                                    autoPlay
                                    muted
                                    playsInline
                                    loop
                                    className='absolute inset-0 w-full h-full max-h-screen -z-10 object-cover'
                                >
                                    <source src={item.item} type="video/mp4" />
                                </video>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HomeHeroSection;
