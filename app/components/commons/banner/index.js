"use client";
import React, { useState } from 'react';
import Button from '../button';

const Banner = ({ bannerData }) => {
    const [click, setClick] = useState(0);
    const [animating, setAnimating] = useState(false);

    const handleClick = () => {
        if (animating) return;

        setAnimating(true);
        setClick((prevIndex) => (prevIndex + 1) % bannerData.length);

        setTimeout(() => setAnimating(false), 500);
    };

    const { title, description, Titletag, button, image, link, variant } = bannerData[click] || {};
    const TitleTagComponent = Titletag || 'h2';

    return (
        <div onClick={handleClick} className="relative">
            <div
                className={`transition-opacity duration-500 ${animating ? 'opacity-0' : 'opacity-100'}`}
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className='bg-black/30 py-[210px] md:py-[300px] lg:py-[358px] px-8 w-full'>
                    <div className='w-full max-w-[983px] mx-auto flex flex-col items-center'>
                        {title && <TitleTagComponent className='text-center font-bold font-Dosis text-white'>{title}</TitleTagComponent>}
                        {description && <p className='text-white text-center font-OpenSans SecondaryDescription pt-[30px] w-full max-w-[648px]'>{description}</p>}
                        {button && (
                            <div className='pt-[40px]'>
                                <Button label={button} href={link} variant={variant} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
