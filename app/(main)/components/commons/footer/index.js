"use client";

import { footerData } from '../../../../../lib/json/layoutData/index';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import TopArrow from '../icons/topArrow';
import clsx from 'clsx';
import { motion } from "framer-motion";

const footerdata = footerData;
const Footer = ({ animate }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const [translateValue, setTranslateValue] = useState(120);

  useEffect(() => {
    setIsMounted(true);
    setCurrentPath(window.location.pathname);
    const updateTranslate = () => {
      if (window.innerWidth < 480) {
        setTranslateValue(70);
      } else if (window.innerWidth < 768) {
        setTranslateValue(70);
      } else {
        setTranslateValue(120);
      }
    };
    updateTranslate(); // Run once on mount
    window.addEventListener("resize", updateTranslate);
    return () => window.removeEventListener("resize", updateTranslate);
  }, []);

  if (!isMounted) {
    return null;
  }

  const { ContactUs, copyright, description, label, openTime, socialIcon, title, subtitle } = footerdata || {};

  const backgroundIamge = {
    "/": "/images/homeFooterBg.webp",
    "/service": "/images/serviceFooterBg.webp",
    "/our-branch": "/images/ourBranchFooterBg.webp"
  };
  const isImageBackgroundPage = Object.keys(backgroundIamge).includes(currentPath);


  const characters = label.split('');
  const angleStep = 360 / characters.length;
  console.log(backgroundIamge[currentPath], "jjj")
  return (
    <div className="relative">
      {backgroundIamge[currentPath] && <Image src={backgroundIamge[currentPath]} alt='' width={1920} height={1100} loading='eager' className='object-cover absolute inset-0 w-full min-h-screen -z-10 ' />}
      <div className={clsx('overflow-hidden', isImageBackgroundPage ? "bg-black/30 pb-8 pt-28 sm:pt-32 min-h-screen flex items-center justify-center" : "py-[100px]")}>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={animate ? { opacity: 1, y: 0 } : { opacity: 1, y: 100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className='container'>

          <div className={clsx('flex sm:flex-row flex-col gap-y-12 items-center justify-between w-full md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1060px] ', isImageBackgroundPage ? "pb-8 md:pb-12" : " pb-[60px] md:pb-[80px] lg:pb-[100px]")}>
            <div className='w-full md:max-w-[650px]'>
              <h4 className='font-Dosis font-bold mb-4 em:mb-6 md:mb-[46px] text-white'>{title}</h4>
              <p className='w-full max-w-[536px] text-base sm:text-lg text-white font-OpenSans tracking-[0.65px] pb-4 md:pb-[30px]'>{description}</p>
              <div className='flex lg:flex-row flex-col  w-full justify-between gap-y-6 md:gap-y-8 gap-4'>
                <div className='flex  flex-col items-start  justify-between gap-4 md:gap-y-8'>
                  {ContactUs && ContactUs.map((item, index) => (
                    <Link href={item.link} className='flex items-center gap-2' key={index}>
                      <Image src={item.icon} alt="icon" width={30} height={30} className='w-[25px] sm:w-[30px] h-[25px] sm:h-[30px]' />
                      <span className='text-lg text-white font-OpenSans'>{item.name}</span>
                    </Link>
                  ))}
                </div>
                <div>
                  <p className='text-base em:text-lg text-white mb-4 font-OpenSans'>{subtitle}</p>
                  {openTime.map((item, index) => (
                    <div className='flex items-center gap-2' key={index}>
                      <Image src={item.icon} alt="icon" width={30} height={30} className='w-[25px] sm:w-[30px] h-[25px] sm:h-[30px]' />
                      <span className='text-lg text-white font-OpenSans'>{item.dateTime}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className='flex items-center gap-5 mt-6 sm:mt-10'>
                {socialIcon.map((item, index) => (
                  <Link key={index} href={item.link || "#"}>
                    <Image src={item.icon} alt="icon" width={30} height={30} className='w-[20px] sm:w-[30px] h-[20px] sm:h-[30px]' />
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative h-[120px] em:h-[150px] lg:h-[250px] flex items-center justify-center w-[280px] lg:w-auto">
              <div className="absolute inset-0 flex justify-center items-center animate-spin-slow">
                {characters.map((char, index) => (
                  <div
                    key={index}
                    className="absolute text-white font-Dosis text-xl font-bold translate-x-[120px]"
                    style={{

                      transform: `rotate(${angleStep * index}deg) translate(${translateValue}px)`,
                    }}
                  >
                    <span className='text-[36px] md:text-[45px]' style={{ transform: `rotate(-280deg)` }}>{char}</span>
                  </div>
                ))}
              </div>
              <TopArrow className="w-[40px] em:w-[60px] md:w-[90px] lg:w-[110px] h-[40px] em:h-[60px] md:h-[90px] lg:h-[110px]" />
            </div>
          </div>
          <p className='text-white text-base em:text-lg pt-2 sm:pt-[30px] border-t-[1px] border-white/10 text-center pb-6'>{copyright}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
