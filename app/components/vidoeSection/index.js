"use client"
import React, { useState, useRef } from 'react';
import PlayIcon from '../commons/icons/playIcon';

const VideoSection = ({ videoData }) => {
    const [videoControls, setVideoControls] = useState(false);
    const videoRef = useRef(null);

    const handlePlayClick = () => {
        if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current
                .play()
                .then(() => {
                    setVideoControls(true);
                })
                .catch((error) => {
                    console.error("Video playback failed:", error);
                });
        } else {
            console.error("Video element not found.");
        }
    };

    return (
        <div className='pt-[80px] md:pt-[120px] lg:pt-[150px] pb-[60px] md:pb-[80px] lg:pb-[100px]'>

            <div className='container'>
                <div className="relative w-full h-[350px] md:h-[440px] lg:h-[550px]">
                    <video
                        ref={videoRef}
                        src={videoData.item}
                        poster={videoData.thumbnail}
                        width={400}
                        height={400}
                        controls={videoControls}
                        className="w-full h-[350px] md:h-[440px] lg:h-[550px] object-cover"
                    />

                    {!videoControls && (
                        <div
                            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer bg-white/10 backdrop-blur-[34px] w-[56px] md:w-[75px] lg:w-[100px] h-[56px] md:h-[75px] lg:h-[100px] rounded-full flex items-center justify-center"
                            onClick={handlePlayClick}
                        >
                            <PlayIcon className="w-6 md:w-8 lg:w-12 h-6 md:h-8 lg:h-12 text-white" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VideoSection;
