"use client";

import clsx from "clsx";
import React, { useState, useEffect } from "react";
import DownArrow from "../commons/icons/downArrow";
import Image from "next/image";
import Button from "../commons/button";
import SequratiyIcon from "../commons/icons/sequratiyIcon";

const serviceOptions = [
    "Aromatherapy",
    "Demo",
    "Demo",
    "Demo",
];

const branchOptions = [
    "Green Day Spa - Egmore",
    "Demo",
    "Demo",
];

const itemList = [
    { itemName: "Price (2 items)", itemPrice: "₹1,048" },
    { itemName: "Gift Card", itemPrice: "-₹250" },
    { itemName: "Coupons for you", itemPrice: "-₹0" },
    { itemName: "Delivery Charges", itemPrice: "₹60" },
]
const ServiceSection = () => {
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

    return (
        <div className="container pb-[45px] md:pb-[65px] lg:pb-[100px]">
            <h4 className="text-center font-Dosis font-bold tracking-[0.65px] mb-[50px]">
                {`Add Service`}
            </h4>
            <div className="flex md:flex-row flex-col gap-6 gap-y-12">
                <div className="w-full max-w-[872px] flex flex-col gap-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 w-full ">
                        {/* Branch Dropdown */}
                        <div className="relative dropdown">
                            <label className="text-base font-OpenSans font-semibold mb-2.5 block">
                                {`Branch`}
                            </label>
                            <div
                                className="bg-white/10 border-[1px] border-[#A9A9A9] flex items-center justify-between p-3 cursor-pointer"
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
                                {`Service Select`}
                            </label>
                            <div className='bg-white/10 border-[1px] border-[#A9A9A9] flex items-center justify-between gap-3 p-2.5'>
                                <input placeholder={`₹ 599.00`} className=' placeholder:text-base placeholder:font-OpenSans placeholder:text-white/10 bg-transparent outline-none block w-full' />
                                <Image src={"/images/moneyIcon.webp"} alt='images' width={30} height={30} className='w-[24px] h-[24px] object-cover' />
                            </div>
                        </div>
                        <div className='w-full'>
                            <label className='text-base font-OpenSans font-semibold mb-2.5 block'>
                                {`Time And Date`}
                            </label>
                            <div className='bg-white/10 border-b-[1px] border-white flex items-center justify-between gap-3 p-2.5'>
                                <input placeholder={`DD/MM/YYYY, 00:00`} className=' placeholder:text-base placeholder:font-OpenSans placeholder:text-white/10 bg-transparent outline-none block w-full' />
                                <Image src={"/images/calendarIcon.webp"} alt='images' width={30} height={30} className='w-[24px] h-[24px] object-cover' />
                            </div>
                        </div>
                    </div>

                    <Button label={"Add Service"} href={"#"} variant={"grayButton"} className={"mt-[6px] w-full em:w-fit"} />
                </div>
                <div className="bg-[#272727] rounded-lg w-full max-w-full md:max-w-[424px] p-[22px]">
                    <div className='w-full flex em:flex-row flex-col  em:items-center gap-2.5'>
                        <div className='bg-white/10 border-b-[1px] border-white flex items-center justify-between gap-3 p-2.5 w-full'>
                            <input placeholder={`aromatherapy`} className=' placeholder:text-base placeholder:font-OpenSans placeholder:text-white/60 bg-transparent outline-none block w-full' />
                        </div>
                        <Button label={"Apply"} href={"#"} variant={"grayButton"} className={"mt-[6px] !text-base !px-6 !py-2.5 w-full "} />
                    </div>
                    {itemList &&
                        <div className="flex flex-col gap-3 mt-6">
                            {
                                itemList.map((item, index) => {
                                    return (
                                        <div key={index} className="flex items-center justify-between">
                                            <span className="SecondaryDescription font-OpenSans">{item.itemName}</span>
                                            <span className="SecondaryDescription font-OpenSans">{item.itemPrice}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                    <div className="flex items-center justify-between border-t-[1px] border-white pt-4 mt-6">
                        <span className="SecondaryDescription font-OpenSans font-bold">{`Total Amount`}</span>
                        <span className="SecondaryDescription font-OpenSans font-bold">{`₹858`}</span>
                    </div>
                    <span className="SecondaryDescription font-OpenSans mt-1">{`You will save ₹4,522 on this order`}</span>
                    <Button label={"Buy Now"} href={"#"} variant={"grayButton"} className={"mt-6 !text-xl  !py-3 w-full text-center font-semibold"} />
                    <div className="flex items-center gap-1.5 mt-4">
                        <SequratiyIcon className="" />
                        <span className="caption font-OpenSans !leading-[130%]">     {`Safe and Secure Payments.Easy returns.100% Authentic products`}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;

