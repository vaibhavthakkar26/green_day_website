"use client";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";
import PlayIcon from "../commons/icons/playIcon";
import Button from "../commons/button";

const ServiceDetails = ({ deatilsData }) => {

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
        <div>
            {
                deatilsData && (
                    <div>
                        {deatilsData.map((item, index) => {
                            const { title, listItem, button, imageAndvideo, alignment, variant } = item || {};
                            const images = imageAndvideo?.filter((item) => item.type === "image") || [];
                            const videos = imageAndvideo?.filter((item) => item.type === "video") || [];

                            return (
                                <div className="pb-[60px] md:pb-[100px]" key={index}>
                                    <div className="container">
                                        <div
                                            className={clsx(
                                                "pt-[60px] md:pt-[87px] flex items-center justify-between gap-4 gap-y-8 flex-col",
                                                alignment === "left" ? " md:flex-row-reverse" : "md:flex-row"
                                            )}
                                        >
                                            <div className="w-full max-w-[648px] flex flex-col items-start">
                                                <h4 className="font-Dosis font-bold">{title}</h4>

                                                <ul className="flex flex-col list-disc pl-6 mt-5">
                                                    {listItem &&
                                                        listItem.map((item, index) => (
                                                            <li key={index}>
                                                                <span className="SecondaryDescription font-OpenSans tracking-[0.65px]">{item.list}</span>
                                                            </li>
                                                        ))}
                                                </ul>
                                                <Button label={button} variant={variant} href={`#`} className="mt-[30px]" />
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
                                                <div className="columns-1 sm:columns-2  w-full max-w-full md:max-w-[655px] ">
                                                    {/* Map Images */}
                                                    {images.map((item, index) => (
                                                        <div key={index} className="w-fit mb-4">
                                                            <Image
                                                                src={item.item}
                                                                alt=""
                                                                width={400}
                                                                height={400}
                                                                className="w-full h-[220px] md:h-[280px] lg:h-[318px] object-cover"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            }
        </div>
    );
};

export default ServiceDetails;
