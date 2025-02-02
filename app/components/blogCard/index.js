import React from 'react'
import Button from '../commons/button'
import Image from 'next/image'

const BlogCard = ({ blogCard }) => {
    const { blogpost, button, varient } = blogCard || {}

    return (
        <div className='py-[96px]'>
            <div className='container'>
                {blogpost && (
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-y-[50px] gap-x-6'>
                        {blogpost.map((item, index) => {
                            const { title, decription, button, varient, image, authorePublishData, link } = item || {}


                            return (
                                <div key={index}>
                                    <div>
                                        <div className='border-[1px] w-full max-w-full md:max-w-[550px] lg:max-w-[628px] h-[380px] sm:h-[500px] md:h-[560px] lg:h-[628px] border-white relative pb-5 mb-6'>
                                            <Image
                                                src={image}
                                                alt='image'
                                                width={400}
                                                height={400}
                                                className='absolute top-4 -right-4 w-full max-w-full md:max-w-[550px] lg:max-w-[628px] h-[380px] sm:h-[500px] md:h-[560px] lg:h-[628px] object-cover'
                                            />
                                        </div>
                                        <span className='text-base italic font-OpenSans mb-5 block'>
                                            {authorePublishData}
                                        </span>
                                        <h4 className='PrimarySubtitle font-Dosis'>{title}</h4>
                                        <p className='py-5 SecondaryDescription font-OpenSans'>{decription}</p>
                                        <Button label={button} variant={varient} href={`${link}`} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
                <div className='flex items-center justify-center w-full pt-16'>
                    <Button label={button} variant={varient} href="#" />
                </div>
            </div>
        </div>
    )
}

export default BlogCard
