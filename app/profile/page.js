"use client"
import React, { useState } from 'react'
import Button from '../components/commons/button';
import DownArrow from '../components/commons/icons/downArrow';
import Image from 'next/image';
import PluseIcon from '../components/commons/icons/pluseIcon';
import clsx from 'clsx';
import MoreIcon from '../components/commons/icons/moreIcon';

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Profile Management");
  const button = [
    { label: "Profile Management" },
    { label: "Service Management" },
    { label: "Membership Management" }
  ]
  const Meassages = [
    {
      image: "/active.svg",
      label: "Active",
      title: "Thai Massage",
      date: "26-12-2024",
      time: "14:00"
    },
    {
      image: "/pending.svg",
      label: "Pending",
      title: "Aromatherapy",
      date: "26-12-2024",
      time: "14:00"
    },
    {
      image: "/cancle.svg",
      label: "Cancel",
      title: "Deep Tissue",
      date: "26-12-2024",
      time: "14:00"
    }
  ]
  return (
    <div>
      <div>
        <div className='relative'>
          <Image src={"/serviceBgImage.png"} alt='image' width={1920} height={500} className='w-full object-cover h-[300px]' />
          <div className="flex items-center absolute bottom-6 left-[20px] 1xl:left-[150px] 3xl:left-[300px] gap-[15px]">
            <Image src={"/menPrfile.png"} alt='image' width={200} height={200} className='w-full max-w-[100px] object-cover h-[100px] rounded-full' />

            <div>
              <h5 className='PrimarySubtitle font-Dosis font-semibold mb-4'>{`Jhon Deo`}</h5>
              <span className="px-2.5 py-2.5 font-semibold text-black rounded-lg bg-gradient-to-r from-white via-gray-400 to-white border border-gray-500 shadow-md text-base font-OpenSans leading-[100%]">
                {`Platinum`}
              </span>
            </div>
          </div>
        </div>

        <div className='container flex flex-col lg:flex-row justify-between gap-6 pt-[101px]'>
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
              <div className='w-full lg:w-full lg:max-w-[423px] lg:flex flex-row lg:flex-col gap-[30px] [&>*:nth-child(2)]:bg-white/10 [&>*:nth-child(2)]:border-[1px]  hidden'>
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
          <div className='w-full max-w-[750px] xl:max-w-[872px]'>
            <div className='flex em:flex-row flex-col em:items-center justify-between gap-4 w-full'>
              <h5 className='text-[26px] md:text-[30px] lg:text-[35px] font-Dosis font-semibold'>{`Active Services`}</h5>
              <div className='pr-5 bg-white/10  border-[1px] border-white'>
                <select className='bg-transparent w-full text-lg em:text-xl text-white font-OpenSans font-semibold pl-5 py-[12px] outline-none'>
                  <option>{`All Service`}</option>
                </select>
              </div>

            </div>
            <div className='pr-5 bg-white/10  border-[1px] border-white mt-[30px]'>
              <div className='bg-transparent w-full  text-lg em:text-xl text-white font-OpenSans font-semibold pl-5 py-[12px] flex items-center justify-between'>
                <span>{`All Service`}</span>
                <PluseIcon />
              </div>
            </div>
            {Meassages &&
              <div className='flex flex-col gap-5 mt-5'>
                {
                  Meassages.map((item, index) => {
                    return (
                      <div key={index} className='bg-[#272727] p-5 flex w-full justify-between'>
                        <div>
                          <div className={clsx("flex items-center gap-[5px] px-2.5 py-[3px] text-base font-OpenSans rounded-full w-fit", item.label === "Active" ? "text-[#166534] bg-[#DCFCE7]" : item.label === "Pending" ? "text-[#854D0E] bg-[#FEF9C3]" : item.label === "Cancel" ? "text-[#EF4444] bg-[#FFE5DD]" : "")}>
                            <Image src={item.image} alt='image' width={30} height={30} className='w-[24px] h-[24px]' />
                            <span>{item.label}</span>
                          </div>
                          <h5 className=' text-lg md:text-xl font-semibold font-OpenSans my-[13px]'>{item.title}</h5>
                          <div className='flex items-center gap-5'>
                            <div className='flex items-center gap-2.5'>
                              <Image src={"/calendarIcon.png"} alt='images' width={30} height={30} className='w-[24px] h-[24px] object-cover' />
                              <span className='text-base font-OpenSans'>{item.date}</span>
                            </div>
                            <div className='flex items-center gap-2.5'>
                              <Image src={"/calendarIcon.png"} alt='images' width={30} height={30} className='w-[24px] h-[24px] object-cover' />
                              <span className='text-base font-OpenSans'>{item.time}</span>
                            </div>
                          </div>
                        </div>
                        <MoreIcon className={"cursor-pointer"}/>
                      </div>
                    )
                  })
                }
              </div>
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
