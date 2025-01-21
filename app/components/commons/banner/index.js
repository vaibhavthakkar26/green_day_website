import Link from 'next/link';
import React from 'react';



const Banner = ({ bannerData }) => {
    return (
        <div>
            {bannerData && bannerData.map((item, index) => {
                const { title, description, Titletag, button, image, link } = item;
                const TitleTagComponent = Titletag || 'h2';

                return (
                    <div key={index} className='flex flex-col items-center justify-center ' style={{ backgroundImage: `url(${image})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                        <div className='bg-black/30 py-[210px] md:py-[300px] lg:py-[358px] px-8 w-full'>
                            <div className='w-full max-w-[790px] mx-auto flex flex-col items-center'>
                                {title && <TitleTagComponent className='text-center font-bold font-Dosis text-white'>{title}</TitleTagComponent>}
                                {description && <p className='text-white text-center font-OpenSans SecondaryDescription py-[30px]'>{description}</p>}
                                {button && <Link href={link} className='text-[20px] md:text-[24px] leading-[100%] text-white font-OpenSans py-[27px] px-[60px] border-[1px] border-white backdrop-blur-[64px] block tracking-[0.65px] relative '>{button}</Link>}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Banner;
