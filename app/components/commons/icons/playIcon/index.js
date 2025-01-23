import React from 'react'

const PlayIcon = ({ className }) => {
    return (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g filter="url(#filter0_b_20_645)">
                <circle cx="25" cy="25" r="25" fill="black" fillOpacity="0.1" />
                <circle cx="25" cy="25" r="24.5" stroke="white" />
            </g>
            <path d="M34.409 22.3528C34.8893 22.6082 35.291 22.9895 35.5712 23.4558C35.8514 23.9221 35.9994 24.4558 35.9994 24.9998C35.9994 25.5438 35.8514 26.0775 35.5712 26.5438C35.291 27.0101 34.8893 27.3914 34.409 27.6468L21.597 34.6138C19.534 35.7368 17 34.2768 17 31.9678V18.0328C17 15.7228 19.534 14.2638 21.597 15.3848L34.409 22.3528Z" fill="white" />
            <defs>
                <filter id="filter0_b_20_645" x="-34" y="-34" width="118" height="118" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="17" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_20_645" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_20_645" result="shape" />
                </filter>
            </defs>
        </svg>

    )
}

export default PlayIcon
