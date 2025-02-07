import Image from 'next/image'
import React from 'react'
import RighTopArrow from '../commons/icons/righTopArrow'

const NewsLatter = ({ newsLatterData }) => {
    const { title, descripion, image1, image2 } = newsLatterData || {}
    return (
        <div className='pb-[60px] md:pb-[80px] lg:pb-[100px] px-5'>
            <div className='container bg-[#272727]  relative pt-[60px] md:pt-[80px] lg:pt-[101px] pb-[54px] md:pb-[70px] lg:pb-[95px] z-10'>
                <div className='flex flex-col items-center justify-center w-full max-w-[920px] mx-auto'>
                    <h4 className='font-Dosis font-bold tracking-[0.65px] mb-4 text-center'>{title}</h4>
                    <p className='SecondaryDescription font-OpenSans text-center tracking-[0.65px] '>{descripion}</p>
                    <div className='bg-white/10 border-b-[1px] border-white w-full max-w-[424px] px-2.5 py-3 mt-[36px] md:mt-[50px] flex items-center justify-between gap-2'>
                        <input type='text' placeholder='Your E-mail ID' className='placeholder:text-base placeholder:font-OpenSans placeholder:text-white/30 bg-transparent outline-none block w-full' />
                        <RighTopArrow className="cursor-pointer" />
                    </div>
                </div>
                <div className='absolute bottom-4 left-[7%] -z-10 em:block hidden'>
                    <Image src={image1} alt='image' width={300} height={300} className='w-full max-w-[160px] lg:max-w-[195px] h-[165px] lg:h-[199px] object-cover' />
                </div>
                <div className='absolute bottom-4 right-[6%] -z-10 em:block hidden'>
                    <Image src={image2} alt='image' width={300} height={300} className='w-full max-w-[280px] lg:max-w-[336px] h-[160px] lg:h-[187px] object-cover' />
                </div>
            </div>
        </div>
    )
}

export default NewsLatter
