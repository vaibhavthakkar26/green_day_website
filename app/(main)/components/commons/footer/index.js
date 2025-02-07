"use client"
import { footerData } from '../../../../../lib/json/layoutData/index'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import TopArrow from '../icons/topArrow'
import clsx from 'clsx'

const footerdata = footerData
const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setIsMounted(true);
    setCurrentPath(window.location.pathname);
  }, []);

  if (!isMounted) {
    return null;
  }

  const { ContactUs, copyright, description, label, openTime, socialIcon, title, subtitle } = footerdata || {}

  const backgroundIamge = {
    "/": "/homeFooterBg.png",
    "/service": "/serviceFooterBg.png",
    "/our-branch": "/ourBranchFooterBg.png"
  };
  const isImageBackgroundPage = Object.keys(backgroundIamge).includes(currentPath);

  const backgroundStyle = isImageBackgroundPage
    ? { backgroundImage: `url(${backgroundIamge[currentPath]})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment:"fixed" }
    : { backgroundColor: '#0F0F0F' };

  const characters = label.split('');
  const angleStep = 360 / characters.length;

  return (
    <div style={backgroundStyle} className=" " >
      <div className={clsx('   overflow-hidden', isImageBackgroundPage ? "bg-black/30 pt-[100px] sm:pt-[180px] md:pt-[290px] lg:pt-[372px]" : "pt-[100px]")}>


        <div className='container '>
          <div className={clsx('flex md:flex-row flex-col-reverse gap-y-12 items-center justify-between w-full ', isImageBackgroundPage ? " pb-[120px] md:pb-[200px] lg:pb-[279px]" : " pb-[60px] md:pb-[80px] lg:pb-[100px]")}>


            <div className='w-full max-w-[648px]'>

              <h4 className='font-Dosis font-bold mb-[46px] text-white'>{title}</h4>
              <p className='w-full max-w-[536px] text-base text-white font-OpenSans tracking-[0.65px] pb-[30px]'>{description}</p>
              <div className='flex lg:flex-row flex-col items-start lg:items-center justify-between gap-y-8'>
                {
                  ContactUs &&
                  <div className='flex flex-col gap-4'>
                    {ContactUs.map((item, index) => {
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
                    })}
                  </div>
                }
                <div>
                  <p className='SecondaryDescription text-white mb-4 font-OpenSans'>{subtitle}</p>
                  {
                    openTime.map((item, index) => {
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
              {socialIcon && <div className='flex items-center gap-5 mt-10'>
                {
                  socialIcon && socialIcon.map((item, index) => {
                    const { icon, link } = item || {}
                    return (
                      <div key={index}>
                        <Link href={`${link}` || "#"}>
                          <Image src={icon} alt="logo" width={50} height={50} className='w-[25px] h-[25px]' />
                        </Link>
                      </div>
                    )
                  })
                }
              </div>}
            </div>
            <div>
              <div className="relative w-[200px] h-[200px] mx-auto flex items-center justify-center">
                <div className="absolute inset-0 flex justify-center items-center animate-spin-slow">
                  {characters.map((char, index) => (
                    <div
                      key={index}
                      className="absolute text-white font-Dosis"
                      style={{
                        transform: `rotate(${angleStep * index}deg) translate(90px)`, // keeps characters circular
                      }}
                    >
                      <h4 className='text-white font-Dosis font-semibold' style={{ transform: `rotate(-${angleStep * index}deg)` }}> {/* Fix text rotation */}
                        {char}
                      </h4>
                    </div>
                  ))}
                </div>
                <TopArrow className="w-[50px] md:w-[80px] lg:w-[101px] h-[50px] md:h-[80px] lg:h-[101px]" />
              </div>
            </div>
          </div>
          <p className='text-white text-base pt-[30px] border-t-[1px] border-white/10 text-center pb-6'>{copyright}</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
