"use client";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";
import PlayIcon from "../commons/icons/playIcon";

const ServiceDetails = ({ deatilsData }) => {
    const { title, listItem, button, imageAndvideo, alignment } = deatilsData || {};

    const images = imageAndvideo?.filter((item) => item.type === "image") || [];
    const videos = imageAndvideo?.filter((item) => item.type === "video") || [];

    const [videoControls, setVideoControls] = useState({});

    const handlePlayClick = (index) => {
        const videoElement = document.getElementById(`video-${index}`);
        if (videoElement) {
            videoElement.muted = true;
            videoElement
                .play()
                .then(() => {
                    setVideoControls((prev) => ({ ...prev, [index]: true }));
                })
                .catch((error) => {
                    console.error("Video playback failed:", error);
                });
        } else {
            console.error(`Video element with ID 'video-${index}' not found.`);
        }
    };

    return (
        <div className="pb-[60px] md:pb-[100px]">
            <div className="container">
                <div
                    className={clsx(
                        "pt-[60px] md:pt-[87px] flex items-center justify-between gap-4 flex-col",
                        alignment === "left" ? " md:flex-row-reverse" : "md:flex-row"
                    )}
                >
                    <div className="w-full max-w-[648px]">
                        <h4 className="font-Dosis font-bold">{title}</h4>

                        <ul className="flex flex-col list-disc pl-6 mt-5">
                            {listItem &&
                                listItem.map((item, index) => (
                                    <li key={index}>
                                        <span className="SecondaryDescription font-OpenSans tracking-[0.65px]">{item.list}</span>
                                    </li>
                                ))}
                        </ul>
                        <button className="text-[20px] md:text-[24px] leading-[100%] text-white font-OpenSans py-[27px] px-[60px] border-[1px] border-white backdrop-blur-[64px] block tracking-[0.65px] relative bg-white/10 mt-[30px] hover:opacity-80">
                            {button}
                        </button>
                    </div>

                    {/* Media Section */}
                    <div className="w-full">
                        {videos.map((item, index) => (
                            <div key={index} className="w-full relative mb-6">
                                <video
                                    id={`video-${index}`}
                                    src={item.item}
                                    poster={item.thumbnail}
                                    width={400}
                                    height={400}
                                    controls={videoControls[index] || false}
                                    className="w-full h-[280px] lg:h-[318px] object-cover"
                                />
                                {!videoControls[index] && (
                                    <div
                                        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer"
                                        onClick={() => handlePlayClick(index)}
                                    >
                                        <PlayIcon />
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="columns-1 sm:columns-2 gap-4 w-full max-w-full md:max-w-[655px]">
                            {/* Map Images */}
                            {images.map((item, index) => (
                                <div key={index} className="w-full mb-4 sm:mb-0">
                                    <Image
                                        src={item.item}
                                        alt=""
                                        width={400}
                                        height={400}
                                        className="w-full h-[220px] md:h-[280px] lg:h-[318px] object-cover "
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
