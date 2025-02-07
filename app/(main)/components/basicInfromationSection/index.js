import Image from 'next/image'
import React from 'react'

const BasicInfromationSection = ({ basicInfromationData }) => {

    return (
        <div>
            <div className='container'>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-4 gap-y-8'>
                    {basicInfromationData && basicInfromationData.map((item, index) => {
                        const { title, data } = item || {}
                        return (
                            <div key={index}>
                                <h5>
                                    {title}
                                </h5>
                                {data && data.map((item, index) => {
                                    const { icon, subtitle, days } = item || {}
                                    return (
                                        <div key={index} className='mt-[30px]'>
                                            <span className='text-base font-OpenSans mb-[15px] block'>{days}</span>
                                            <div className='flex items-start w-full max-w-[306px]'>
                                                <Image src={icon} alt='image' width={40} height={40} className='w-[24px] h-[24px]' />
                                                <h6 className='text-base font-OpenSans ml-1'>
                                                    {subtitle}
                                                </h6>
                                            </div>

                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default BasicInfromationSection
