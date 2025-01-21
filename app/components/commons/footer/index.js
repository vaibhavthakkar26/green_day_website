"use client"
import { footerData } from '../../../../lib/json/layoutData/index'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

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

  // Set background image based on the route
  const backgroundIamge = {
    "/": "/images/homeFooterBg.png",
    "/service": "/images/serviceFooterBg.png",
    "/our-branch": "/images/ourBranchFooterBg.png"
  };
  const isImageBackgroundPage = Object.keys(backgroundIamge).includes(currentPath);

  const backgroundStyle = isImageBackgroundPage
    ? { backgroundImage: `url(${backgroundIamge[currentPath]})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { backgroundColor: 'black' };

  return (
    <div style={backgroundStyle} className=" ">
      <div className='bg-black/30 pt-[372px]  px-8'>


        <div className='container '>
          <div className='flex items-center justify-between w-full pb-[279px]'>


            <div className='w-full max-w-[648px]'>
              <h4 className='font-Dosis font-bold mb-[46px] text-white'>{title}</h4>
              <p className='w-full max-w-[536px] text-base text-white font-OpenSans tracking-[0.65px] pb-[30px]'>{description}</p>
              <div className='flex items-center justify-between'>
                {
                  ContactUs &&
                  <div>
                    {ContactUs.map((item, index) => {
                      const { icon, name, link } = item || {};
                      return (
                        <Link href={link} className='flex items-center gap-2' key={index}>
                          <div>
                            <Image src={icon} alt="logo" width={50} height={50} className='w-[25px] h-[25px]' />
                          </div>
                          <div>
                            <span className='SecondaryDescription text-white'>{name}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                }
                <div>
                  <p className='SecondaryDescription text-white'>{subtitle}</p>
                  {
                    openTime.map((item, index) => {
                      const { icon, dateTime } = item || {};
                      return (
                        <div className='flex items-center gap-2' key={index}>
                          <div>
                            <Image src={icon} alt="logo" width={50} height={50} className='w-[25px] h-[25px]' />
                          </div>
                          <div>
                            <span className='SecondaryDescription text-white'>{dateTime}</span>
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

            <h4 className='text-white capitalize'>{label}</h4>
          </div>
          <p className='text-white text-base pt-[30px] border-t-[1px] border-white/10 text-center pb-6'>{copyright}</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
