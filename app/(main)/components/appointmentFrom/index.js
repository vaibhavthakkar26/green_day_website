"use client";

import clsx from 'clsx';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import DownArrow from '../commons/icons/downArrow';
import Button from '../commons/button';


const serviceOptions = [
    "Select Category",
    "Demo",
    "Demo",
    "Demo",
];

const branchOptions = [
    "Select Service",
    "Demo",
    "Demo",
];
const AppointmentFrom = () => {
    const [selectedService, setSelectedService] = useState(serviceOptions[0]);
    const [isServiceOpen, setIsServiceOpen] = useState(false);

    const [selectedBranch, setSelectedBranch] = useState(branchOptions[0]);
    const [isBranchOpen, setIsBranchOpen] = useState(false);

    // Close dropdowns when clicking outside
    useEffect(() => {

        const handleClickOutside = (event) => {
            if (!event.target.closest(".dropdown")) {
                setIsServiceOpen(false);
                setIsBranchOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const from = [
        {
            label: "Full Name",
            placeholder: "Jhon Deo",
            image: "/images/profile.svg"
        },
        {
            label: "Phone Number",
            placeholder: "+91 99999 88888",
            image: "/images/mobileIcon.svg"
        },
        {
            label: "Email ID",
            placeholder: "example@email.com",
            image: "/images/emailIcon.svg"
        }
    ]
    return (
        <div className='pt-[49px] pb-[50px] md:pb-[65px] lg:pb-[100px]'>
            <div className='container'>

                <div className='pb-[50px]'>
                    <h4 className='font-Dosis font-bold tracking-[0.65px] mb-[30px]'>{`Select service`}</h4>
                    <div className="grid grid-cols-1 em:grid-cols-2 md:grid-cols-3 items-center gap-6 w-full ">
                        {/* Branch Dropdown */}
                        <div className="relative dropdown">
                            <label className="text-base font-OpenSans font-semibold mb-2.5 block">
                                {`Category`}
                            </label>
                            <div
                                className="bg-white/10 border-b-[1px] focus-within:border-[1px] basic-transition border-[#A9A9A9] flex items-center justify-between p-3 cursor-pointer"
                                onClick={() => setIsBranchOpen(!isBranchOpen)}
                            >
                                <span className="text-[#A9A9A9]">{selectedBranch}</span>
                                <DownArrow

                                    className={clsx("transition-transform duration-300", {
                                        "rotate-180": isBranchOpen,
                                    })}
                                />
                            </div>

                            {/* Dropdown Options */}
                            <ul
                                className={clsx(

                                    "absolute left-0 z-10 w-full bg-[#272727] shadow-md border border-[#A9A9A9] mt-2 transition-all duration-300 ease-in-out transform origin-top",
                                    isBranchOpen
                                        ? "opacity-100 scale-100 translate-y-0"
                                        : "opacity-0 scale-95 -translate-y-[100%] pointer-events-none"
                                )}
                            >
                                {branchOptions.map((option, index) => (
                                    <li
                                        key={index}
                                        className="p-2 hover:bg-white/10 cursor-pointer"
                                        onClick={() => {
                                            setSelectedBranch(option);
                                            setIsBranchOpen(false);
                                        }}
                                    >
                                        {option}
                                    </li>
                                ))}
                            </ul>

                        </div>

                        {/* Service Dropdown */}

                        <div className="relative dropdown">
                            <label className="text-base font-OpenSans font-semibold mb-2.5 block">
                                {`Select Service`}
                            </label>
                            <div
                                className="bg-white/10 border-b-[1px] border-[#A9A9A9] flex items-center justify-between p-3 cursor-pointer"
                                onClick={() => setIsServiceOpen(!isServiceOpen)}
                            >
                                <span>{selectedService}</span>
                                <DownArrow
                                    className={clsx("transition-transform duration-300", {
                                        "rotate-180": isServiceOpen,
                                    })}
                                />
                            </div>
                            {/* Dropdown Options */}
                            <ul
                                className={clsx(
                                    "absolute left-0 z-10 w-full bg-[#272727] shadow-md border border-[#A9A9A9] mt-2 transition-all duration-300 ease-in-out transform origin-top",
                                    isServiceOpen
                                        ? "opacity-100 scale-100 translate-y-0"
                                        : "opacity-0 scale-95 -translate-y-[100%] pointer-events-none"
                                )}
                            >
                                {serviceOptions.map((option, index) => (
                                    <li
                                        key={index}
                                        className="p-2 hover:bg-white/10 cursor-pointer"
                                        onClick={() => {
                                            setSelectedService(option);
                                            setIsServiceOpen(false);
                                        }}
                                    >
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        </div>



                        <div className='w-full'>
                            <label className='text-base font-OpenSans font-semibold mb-2.5 block'>
                                {`Date`}
                            </label>
                            <div className='bg-white/10 border-b-[1px] focus-within:border-[1px] basic-transition border-white flex items-center justify-between gap-3 p-2.5'>
                                <input placeholder={`DD/MM/YYYY,`} className=' placeholder:text-base placeholder:font-OpenSans placeholder:text-white/10 bg-transparent outline-none block w-full' />
                                <Image src={"/images/calendarIcon.webp"} alt='images' width={30} height={30} className='w-[24px] h-[24px] object-cover' />
                            </div>
                        </div>
                        <div className='w-full max-w-[200px]'>
                            <label className='text-base font-OpenSans font-semibold mb-2.5 block'>
                                {`Time Slot`}
                            </label>
                            <div className='bg-white/10 border-b-[1px] focus-within:border-[1px] basic-transition border-white flex items-center justify-between gap-3 p-2.5'>
                                <input placeholder={`08:00 am`} className=' placeholder:text-base placeholder:font-OpenSans placeholder:text-white/10 bg-transparent outline-none block w-full' />
                                <Image src={"/images/clock.svg"} alt='images' width={30} height={30} className='w-[24px] h-[24px] object-cover' />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className='font-Dosis font-bold tracking-[0.65px] mb-[30px]'>{`Personal Details`}</h4>
                    <div className='grid grid-cols-1 em:grid-cols-2 md:grid-cols-3 gap-6'>
                        {from && from.map((item, index) => {
                            const { label, placeholder, image } = item || {}
                            return (
                                <div key={index} className=''>
                                    <label className='text-base font-OpenSans font-semibold mb-2.5 block'>
                                        {label}
                                    </label>
                                    <div className='bg-white/10 border-b-[1px] focus-within:border-[1px] basic-transition border-white flex items-center justify-between gap-3 p-2.5'>
                                        <input placeholder={placeholder} className=' placeholder:text-base placeholder:font-OpenSans placeholder:text-white/50 bg-transparent outline-none block w-full' />
                                        <Image src={image} alt='images' width={30} height={30} className='w-[24px] h-[24px] object-cover' />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='flex flex-col mt-[26px] mb-[29px]'>
                        <label className='text-base font-OpenSans font-semibold mb-2.5'>
                            {`Note`}
                        </label>
                        <textarea rows={6} placeholder='Description' className='placeholder:text-base placeholder:font-OpenSans placeholder:text-white/50 bg-white/10 outline-none border-b-[1px] focus-within:border-[1px] basic-transition border-white resize-none px-2.5 py-2.5' />
                    </div>
                    <Button label={`Book Appointment`} variant={"grayButton"} href={"#"} className="!py-[27px] w-full em:w-fit" />
                </div>
            </div>
        </div>
    )
}

export default AppointmentFrom
