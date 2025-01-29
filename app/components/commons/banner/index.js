import Link from 'next/link';
import React from 'react';
import Button from '../button';



const Banner = ({ bannerData }) => {
    return (
        <div>
            {bannerData && bannerData.map((item, index) => {
                const { title, description, Titletag, button, image, link, variant } = item;
                const TitleTagComponent = Titletag || 'h2';

                return (
                    <div key={index} className='flex flex-col items-center justify-center ' style={{ backgroundImage: `url(${image})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                        <div className='bg-black/30 py-[210px] md:py-[300px] lg:py-[358px] px-8 w-full'>
                            <div className='w-full max-w-[983px] mx-auto flex flex-col items-center'>
                                {title && <TitleTagComponent className='text-center font-bold font-Dosis text-white'>{title}</TitleTagComponent>}
                                {description && <p className='text-white text-center font-OpenSans SecondaryDescription pt-[30px] w-full max-w-[648px]'>{description}</p>}
                                {button &&
                                    <div className='pt-[40px]'>
                                        <Button label={button} href={link} variant={variant} />
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Banner;
