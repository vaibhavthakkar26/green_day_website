import clsx from "clsx";
import Image from "next/image";
import React from "react";

const ServiceDetails = ({ deatilsData }) => {
    const { title, listItem, button, imageAndvideo, alignment } = deatilsData || {};

    // Filter the media into separate arrays
    const images = imageAndvideo?.filter((item) => item.type === "image") || [];
    const videos = imageAndvideo?.filter((item) => item.type === "video") || [];

    return (
        <div>
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
                            <div key={index} className="w-full">
                                <video
                                    src={item.item}
                                    poster={item.thumbnail}
                                    width={400}
                                    height={400}
                                    controls
                                    className="w-full h-[280px] lg:h-[318px] object-cover"
                                />
                            </div>
                        ))}
                        <div className="columns-1 sm:columns-2 gap-4 w-full max-w-full md:max-w-[648px]">
                            {/* Map Images */}
                            {images.map((item, index) => (
                                <div key={index} className="w-full mb-4 sm:mb-0">
                                    <Image
                                        src={item.item}
                                        alt=""
                                        width={400}
                                        height={400}
                                        className="w-full h-[280px] lg:h-[318px] object-cover "
                                    />
                                </div>
                            ))}

                            {/* Map Videos */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
