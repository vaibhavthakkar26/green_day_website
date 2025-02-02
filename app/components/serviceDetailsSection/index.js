"use client";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";
import PlayIcon from "../commons/icons/playIcon";
import Button from "../commons/button";

const ServiceDetails = ({ deatilsData, className }) => {

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
        <div className={className}>
            {
                deatilsData && (
                    <div>
                        {deatilsData.map((item, index) => {
                            const { title, listItem, button, imageAndvideo1, imageAndvideo2, alignment, variant, description,link } = item || {};
                            const images1 = imageAndvideo1?.filter((item) => item.type === "image") || [];
                            const videos1 = imageAndvideo1?.filter((item) => item.type === "video") || [];
                            const images2 = imageAndvideo2?.filter((item) => item.type === "image") || [];
                            const videos2 = imageAndvideo2?.filter((item) => item.type === "video") || [];
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

                                                {description ? (
                                                    <p
                                                        className="SecondaryDescription font-OpenSans tracking-[0.65px] flex flex-col gap-8"
                                                        dangerouslySetInnerHTML={{ __html: description }}
                                                    />
                                                ) : (
                                                    listItem && (
                                                        <ul className="flex flex-col list-disc pl-6 mt-5">
                                                            {listItem.map((item, index) => (
                                                                <li key={index}>
                                                                    <span className="SecondaryDescription font-OpenSans tracking-[0.65px]">{item.list}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )
                                                )}
                                                <Button label={button} variant={variant} href={link?link:`#`} className="mt-[30px]" />
                                            </div>

                                            {/* Media Section */}
                                            <div className="w-full max-w-full md:max-w-[648px] flex flex-col gap-4 sm:gap-6">
                                                {videos1.map((item, index) => (
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
                                                                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer bg-white/10 backdrop-blur-[34px] w-[50px] h-[50px] rounded-full flex items-center justify-center"
                                                                onClick={() => handlePlayClick(index)} >
                                                                <PlayIcon className={"w-[24px] h-[24px]"} />
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                                <div className="flex sm:flex-row flex-col gap-4 sm:gap-6  ">
                                                    {/* Map Images */}
                                                    {images1.map((item, index) => (
                                                        <div key={index} className="w-full sm:w-fit">
                                                            <Image
                                                                src={item.item}
                                                                alt=""
                                                                width={500}
                                                                height={400}
                                                                className="w-full md:w-auto h-[320px] sm:h-full sm:max-h-[380px] object-cover sm:object-contain"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                                {videos2.map((item, index) => (
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
                                                                onClick={() => handlePlayClick(index)} >
                                                                <PlayIcon />
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                                <div className="flex sm:flex-row flex-col gap-4 sm:gap-6   ">
                                                    {/* Map Images */}
                                                    {images2.map((item, index) => (
                                                        <div key={index} className="w-full sm:w-fit">
                                                            <Image
                                                                src={item.item}
                                                                alt=""
                                                                width={500}
                                                                height={400}
                                                                className="w-full md:w-auto h-[320px] sm:h-full sm:max-h-[380px] object-cover sm:object-contain"
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
