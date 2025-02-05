"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../../../public/logo.png';
import ToggelIcon from '../icons/toggelicon';
import clsx from 'clsx';
import { headerData } from '../../../../lib/json/layoutData/index';
import Link from 'next/link';
import ToggleCloseIcon from '../icons/toggelCloseIcon';

const Header = () => {
    const [toggle, setToggel] = useState(false);

    const handelClick = () => {
        setToggel(true);
        document.body.style.overflow = 'hidden';
    };

    const handelClose = () => {
        setToggel(false);
        document.body.style.overflow = 'auto';
    };


    const navitemData = headerData?.navItem || [];
    const conatctUsDetails = headerData?.ContactUs || {};
    const openTimeDetails = headerData?.openTime || {};

    return (
        <div>
            <div className=' container relative z-50'>
                <div className='flex items-center justify-between pt-[30px] fixed right-0 left-0 w-full max-w-[1320px] mx-auto px-5'>
              <Link href={"/"}>
              <Image src={logo} alt="logo" width={100} height={100} className='w-full max-w-[80px] sm:max-w-[110px] h-[50px] sm:h-[70px] object-cover' />
              </Link>
                    <div onClick={handelClick} className='cursor-pointer'>
                        <ToggelIcon className='w-[34px] h-[18px]' />
                    </div>

                    <div className={clsx('fixed inset-0 w-full h-screen bg-lightBlack transition-all duration-500 ease-linear pt-[30px] overflow-y-auto pb-20 z-50', toggle ? "translate-x-0 opacity-100" : "translate-x-[100%] opacity-0")}>
                        <div className='container relative'>
                            <div className='flex items-center justify-between'>
                                <Image src={logo} alt="logo" width={100} height={100} className='w-full max-w-[80px] sm:max-w-[110px] h-[50px] sm:h-[69px] object-cover' />
                                <div onClick={handelClose} className='cursor-pointer'>
                                    <ToggleCloseIcon className='w-[28px] h-[28px]' />
                                </div>
                            </div>

                            <div className='flex em:flex-row flex-col  items-start em:items-center justify-between gap-x-4 gap-y-12 w-full max-w-[850px]'>
                
                                <div className='flex flex-col gap-6 pt-[50px] md:pt-[89px]'>
                                    {navitemData.map((item, index) => (
                                        <h4 key={index}>
                                            <Link href={item.link} onClick={handelClose} className='text-white hover:text-white/70 font-Dosis font-semibold basic-transition '>
                                                {item.item}
                                            </Link>
                                        </h4>
                                    ))}
                                </div>

                                <div>
                                    <div>
                                        <h5 className='text-white mb-[30px] font-Dosis font-medium'>{conatctUsDetails.title}</h5>
                                        <div className='flex flex-col gap-[15px]'>
                                            {
                                                conatctUsDetails.contactusData && conatctUsDetails.contactusData.map((item, index) => {
                                                    const { icon, name, link } = item || {};
                                                    return (
                                                        <Link href={link} className='flex items-center gap-2' key={index}>
                                                            <div>
                                                                <Image src={icon} alt="logo" width={50} height={50} className='w-[25px] h-[25px]' />
                                                            </div>
                                                            <div>
                                                                <span className='SecondaryDescription text-white font-OpenSans'>{name}</span>
                                                            </div>
                                                        </Link>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className='mt-[40px] em:mt-[60px] md:mt-[87px]'>
                                        <h5 className='text-white mb-[30px] font-Dosis font-medium'>{openTimeDetails.title}</h5>
                                        <div>
                                            <p className='SecondaryDescription text-white font-OpenSans mb-4'>{openTimeDetails.subtitle}</p>
                                            {
                                                openTimeDetails.openDateTime && openTimeDetails.openDateTime.map((item, index) => {
                                                    const { icon, dateTime } = item || {};
                                                    return (
                                                        <div className='flex items-center gap-2' key={index}>
                                                            <div>
                                                                <Image src={icon} alt="logo" width={50} height={50} className='w-[25px] h-[25px]' />
                                                            </div>
                                                            <div>
                                                                <span className='SecondaryDescription text-white font-OpenSans'>{dateTime}</span>
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className=' absolute right-0 1xl:right-[-2%] 3xl:right-[-8%] bottom-[-60px] -z-10'>
                                    <Image src={headerData.image} alt="logo" width={600} height={700} className='w-full max-w-[558px] h-[550px]' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
