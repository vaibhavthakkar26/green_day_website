import React from 'react';
import Button from '../button/index';
import { SwiperSlide } from "swiper/react";
import Image from 'next/image';


const Banner = ({ bannerData }) => {
    return (
        <SwiperSlide className=''>
            {bannerData && bannerData.map((item, index) => {
                const { title, description, Titletag, button, image, link, variant } = item;
                const TitleTagComponent = Titletag || 'h2';

                return (
                    <div key={index} className='flex flex-col items-center justify-center w-full' >
                        <div className='bg-black/30 py-[210px] md:py-[300px] lg:py-[358px] px-8 w-full'>
                            {image && <Image src={image} alt='' priority width={1920} height={1060} className='absolute inset-0 min-h-screen -z-10 object-cover  ' />}
                            <div className='w-full max-w-[983px] mx-auto flex flex-col items-center'>
                                {title && <TitleTagComponent className='text-center font-bold font-Dosis text-white' >{title}</TitleTagComponent>}
                                {description && <p className='text-white text-center font-OpenSans SecondaryDescription pt-[30px] w-full max-w-[648px]'>{description}</p>}
                                {button &&
                                    <div className='pt-[40px]' >
                                        <Button label={button} href={link} variant={variant} />
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                );
            })}
        </SwiperSlide>
    );
};

export default Banner;
