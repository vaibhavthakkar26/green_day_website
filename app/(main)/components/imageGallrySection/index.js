import Image from 'next/image'
import React from 'react'

const ImageGallrySection = ({ ImageGalleryData }) => {
    const { ImageGallry1, ImageGallry2 } = ImageGalleryData || {}
    return (
        <div className='pb-[30px] md:pb-[70px] lg:pb-[103px]'>
            {
                ImageGallry1 &&
                <div className='flex sm:flex-row flex-col gap-4 lg:gap-6'>
                    {ImageGallry1.map((item, index) => {
                        const { image } = item || {}
                        return (
                            <div key={index} className='mb-6 aspect-[16/9] sm:aspect-[4/3] lg:aspect-[3/2]'>
                                {image.src && <Image src={image.src} alt='image' width={image.width} height={image.height} className='object-cover' />}
                            </div>
                        )
                    })}
                </div>
            }
            {
                ImageGallry2 &&
                <div className='flex sm:flex-row flex-col gap-4 lg:gap-6 [&>*:nth-last-child(1)>button]:flex relative '>
                    {ImageGallry2.map((item, index) => {
                        const { image } = item || {}
                        return (
                            <div key={index} className="mb-6 relative aspect-[16/9] sm:aspect-[4/3] lg:aspect-[3/2]">
                                {image.src && <Image
                                    src={image.src}
                                    alt="image"
                                    width={image.width}
                                    height={image.height}
                                    className="object-cover w-full h-full"
                                />}
                                <button className="w-full h-full  flex-col items-center justify-center bg-black/40 absolute inset-0 hidden text-white">
                                    {`View More`}
                                </button>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default ImageGallrySection
