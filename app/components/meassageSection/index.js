import React from 'react'
import Button from '../commons/button'
import Image from 'next/image'

const MeassageSection = ({ meassageSectionData }) => {
    return (
        <div>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-4'>
                    {meassageSectionData &&
                        meassageSectionData.map((item, index) => {
                            const { title, description, button, varient, bgImage } = item || {}
                            return (
                                <div key={index} className='relative flex flex-col items-center justify-center  z-10'>
                                    <div className='absolute inset-0 -z-10 flex items-center justify-center'>
                                        <Image src={bgImage} alt='' width={400} height={400} className='object-contain' />
                                    </div>
                                    <div className='h-full flex flex-col items-center justify-center gap-5'>
                                        <h5 className=' text-[26px] md:text-[30px] lg:text-[35px] font-semibold font-Dosis text-center'>
                                            {title}
                                        </h5>
                                        <p className='text-sm md:text-base text-center font-OpenSans tracking-[0.65px]'>{description}</p>
                                        <Button label={button} variant={varient} href={"#"} />
                                    </div>


                                </div>
                            )
                        })
                    }
                </div>
            </div>


        </div>
    )
}

export default MeassageSection
