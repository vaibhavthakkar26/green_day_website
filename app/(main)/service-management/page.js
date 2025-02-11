"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Button from '../components/commons/button'
import clsx from 'clsx'
import DownArrow from '../components/commons/icons/downArrow'

const ServiceManagement = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Profile Management");

  const from = [
    {
      label1: "Full Name",
      placeholder: "Jhon Deo",
      image: "/images/profile.svg"
    },
    {
      label1: "Date of Birth",
      placeholder: "DD/MM/YYYY",
      image: "/images/mobileIcon.svg",
      label2: "Gender"
    },
    {
      label1: "Phone Number",
      placeholder: "+1 (555) 123-4567",
      image: "/images/mobileIcon.svg"
    },
    {
      label1: "Email ID",
      placeholder: "john.doe@example.com",
      image: "/images/emailIcon.svg"
    }
  ]
  const button = [
    { label: "Profile Management" },
    { label: "Service Management" },
    { label: "Membership Management" }
  ]
  return (
    <div>
      <div className='relative'>
        <Image src={"/images/serviceBgImage.webp"} alt='image' width={1920} height={500} className='w-full object-cover h-[300px]' />
        <div className="flex items-center absolute bottom-6 left-[20px] 1xl:left-[150px] 3xl:left-[300px] gap-[15px]">
          <Image src={"/iamges/menPrfile.webp"} alt='image' width={200} height={200} className='w-full max-w-[100px] object-cover h-[100px] rounded-full' />
          <div>
            <h5 className='PrimarySubtitle font-Dosis font-semibold mb-4'>{`Jhon Deo`}</h5>
            <span className="px-2.5 py-2.5 font-semibold text-black rounded-lg bg-gradient-to-r from-white via-gray-400 to-white border border-gray-500 shadow-md text-base font-OpenSans leading-[100%]">
              {`Platinum`}
            </span>
          </div>
        </div>
      </div>

      <div className='container flex flex-col lg:flex-row gap-6 pt-[101px]'>
        <div>

          <div className="block lg:hidden relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg text-white bg-white/10 shadow-md flex items-center justify-between"
            >
              {selected}
              <DownArrow
                className={`transform transition-transform duration-300 [&>g>g>path]:fill-white ${isOpen ? "rotate-180" : "rotate-0"
                  }`}
              />
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute w-full bg-[#272727] border border-gray-300 rounded-lg shadow-md transition-all duration-300 overflow-hidden ${isOpen ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}
            >
              {button.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelected(item.label);
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-white/10"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>


          {/* Desktop Sidebar Buttons */}
          {button && (
            <div className='w-full lg:w-full lg:max-w-[423px] lg:flex flex-row lg:flex-col gap-[30px] [&>*:nth-child(1)]:bg-white/10 [&>*:nth-child(1)]:border-[1px]  hidden'>
              {button.map((item, index) => (
                <div key={index}>
                  <Button
                    label={item.label}
                    variant={"grayButton"}
                    href={"#"}
                    className="w-full !bg-transparent !border-0 !px-5 !justify-start"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className='w-full lg:w-2/3 lg:max-w-[872px]'>
          <h4 className='font-Dosis font-bold tracking-[0.65px] mb-[30px]'>
            {`Personal Details`}
          </h4>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {from && from.map((item, index) => {
              const { label1, label2, placeholder, image } = item || {};
              return (
                <div key={index} className={clsx('', label2 ? "flex em:flex-row flex-col gap-6" : "")}>
                  {label2 && (
                    <div className=''>
                      <label className='text-base font-OpenSans font-semibold mb-2.5 block'>
                        {label2}
                      </label>
                      <div className='flex gap-6'>
                        <div className='flex items-center gap-2'>
                          <input type='radio' id={`male-${index}`} name="gender" className="hidden peer" />
                          <div className="w-5 h-5 border-2 border-white bg-[#272727] rounded-full flex items-center justify-center peer-checked:bg-[#DDDDDD] ">
                            <div className="w-2.5 h-2.5 bg-white rounded-full peer-checked:block hidden"></div>
                          </div>
                          <label htmlFor={`male-${index}`} className='text-base font-OpenSans cursor-pointer'>{`Male`}</label>
                        </div>
                        <div className='flex items-center gap-2'>
                          <input type='radio' id={`female-${index}`} name="gender" className="hidden peer" />
                          <div className="w-5 h-5 border-2 border-white bg-[#272727] rounded-full flex items-center justify-center peer-checked:bg-[#DDDDDD]">
                            <div className="w-2.5 h-2.5 bg-white rounded-full peer-checked:block hidden"></div>
                          </div>
                          <label htmlFor={`female-${index}`} className='text-base font-OpenSans cursor-pointer'>{`Female`}</label>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className='w-full'>
                    <label className='text-base font-OpenSans font-semibold mb-2.5 block'>
                      {label1}
                    </label>

                    <div className='bg-white/10 border-b-[1px] focus-within:border-[1px] basic-transition border-white flex items-center justify-between gap-3 p-2.5'>
                      <input
                        placeholder={placeholder}
                        className='placeholder:text-base placeholder:font-OpenSans placeholder:text-white/50 bg-transparent outline-none block w-full'
                      />
                      <Image
                        src={image}
                        alt='images'
                        width={30}
                        height={30}
                        className='w-[24px] h-[24px] object-cover'
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <Button
            label={`Log Out`}
            variant={"grayButton"}
            href={"#"}
            className="!py-[27px] w-full !bg-[#EF4444]/[10%] !border-[#EF4444] text-[#EF4444] mt-[45px] md:mt-[65px] lg:mt-[100px]"
          />
        </div>
      </div>
    </div>
  )
}

export default ServiceManagement;
