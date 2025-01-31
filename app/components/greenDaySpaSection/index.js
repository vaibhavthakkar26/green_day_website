import React from 'react'
import Button from '../commons/button'
import Image from 'next/image'

const GreenDaySpaSection = ({ GreenDaySpaData }) => {
    const { title, description, button, varient, bgImage, image } = GreenDaySpaData || {}
    return (
        <div className='relative z-10 py-[80px] md:py-[140px] lg:py-[152px]' style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} >
            {bgImage && <div className='bg-black/30 px-8 w-full absolute inset-0 -z-10'></div>}
            <div className='container flex sm:flex-row flex-col items-center justify-center gap-6 lg:gap-8'>
                <div className='w-full max-w-[635px]'>
                    <h4 className='font-Dosis font-bold'>{title}</h4>
                    <p className='SecondaryDescription font-OpenSans mt-[26px] mb-[30px]'>{description}</p>
                    <Button label={button} href={"#"} variant={varient} />
                </div>
                <div className='border-[1px]  w-full max-w-[550px] lg:max-w-[648px] h-[380px] sm:h-[500px]  md:h-[650px] lg:h-[756px]  border-white relative'>
                    <Image src={image} alt='image' width={400} height={400} className='absolute top-2 right-2 w-full max-w-[550px] lg:max-w-[648px]  h-[380px] sm:h-[500px]  md:h-[650px] lg:h-[756px] object-cover' />
                </div>
            </div>
        </div>
    )
}

export default GreenDaySpaSection
