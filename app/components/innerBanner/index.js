import React from 'react'

const InnerBanner = ({ BannerData }) => {
    const { image, title, Breadcrumb } = BannerData || {}
    return (
        <div>
            <div>
                <div className='flex flex-col items-center justify-center ' style={{ backgroundImage: `url(${image})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className='bg-black/30 py-[210px] md:py-[300px] lg:py-[313px] px-8 w-full'>
                        <div className='w-full max-w-[790px] mx-auto flex flex-col items-center'>
                            {title && <h3 className='text-center font-bold font-Dosis text-white'>{title}</h3>}
                            <p className='text-white'>{Breadcrumb}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InnerBanner
