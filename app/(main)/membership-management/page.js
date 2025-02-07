"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import DownArrow from '../components/commons/icons/downArrow';
import Button from '../components/commons/button';

const MembershipManagement = () => {
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
                            <div className='w-full lg:w-full lg:max-w-[423px] lg:flex flex-row lg:flex-col gap-[30px] [&>*:nth-child(3)]:bg-white/10 [&>*:nth-child(3)]:border-[1px]  hidden'>
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
                    <div className='w-full max-w-[872px]'>
                        <h5 className='text-[26px] md:text-[30px] lg:text-[35px] font-Dosis font-semibold'>{`Membership Management`}</h5>
                        <div className='w-full bg-white/10 p-2.5 mt-[30px]'>
                            <h6 className='text-[26px] md:text-[30px] lg:text-[35px] font-Dosis font-semibold'>{`Current Membership`}</h6>
                            <div className='flex items-center gap-2.5 my-2.5'>
                                <Image src={"/platinum.svg"} alt="image" width={30} height={30} className='w-[24px] h-[24px]' />
                                <span className='text-nase font-OpenSans'>{`Platinum Plan`}</span>
                            </div>
                            <div className='flex items-center gap-2.5'>
                                <Image src={"/calendarIcon.png"} alt="image" width={30} height={30} className='w-[24px] h-[24px]' />
                                <span className='text-nase font-OpenSans'>{`Renews on April 1, 2024`}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MembershipManagement
