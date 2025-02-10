import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

const InnerBanner = ({ BannerData }) => {
    const { image, title, Breadcrumb } = BannerData || {}
    return (
        <div>
            <div>
                <div className=' '>
                    <div className={clsx(image ? 'bg-black/30 h-[420px] md:h-[590px] lg:h-[750px] flex flex-col items-center justify-center  px-8 w-full' : "pt-[100px] md:pt-[120px] lg:pt-[150px] pb-[30px] md:pb-[50px]")}>
                        <Image src={image} alt='' width={1920} height={1060} loading='eager' className='object-cover absolute inset-0 w-full h-[420px] md:h-[590px] lg:h-[750px] -z-10 ' />
                        <div className='w-full max-w-[790px] mx-auto flex flex-col items-center'>
                            {title && <h3 className='text-center font-bold font-Dosis text-white'>{title}</h3>}
                            {Breadcrumb && <p className='text-white italic text-base font-OpenSans'>{Breadcrumb}</p>}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InnerBanner
