import Image from 'next/image'
import React from 'react'

const InstagramPost = ({ instagramPostData }) => {
    const { imageAndButton } = instagramPostData || {}
    return (
        <div>
            <div className='container'>
                <div className='grid grid-cols-2 lg:grid-cols-5 [&>*:nth-child(3)]:col-span-2 [&>*:nth-child(3)]:lg:col-span-1 gap-5'>
                    {imageAndButton &&
                        imageAndButton.map((item, index) => {
                            const { post, button } = item || {}
                            return (
                                <div key={index} className='h-full flex flex-col items-center justify-center'>
                                    {post && <Image src={post} alt='image' width={300} height={300} className='w-full max-w-full lg:max-w-[257px] h-[220px] sm:h-[257px] object-cover' />}
                                    {button && <div
                                        className='w-full max-w-[180px] sm:max-w-[209px] h-[180px] sm:h-[209px] border-[1px] border-white relative mx-auto '>
                                        <button className='bg-[#272727] text-[28px] sm:text-[35px] font-semibold text-white font-Dosis px-4 flex flex-col items-center justify-center w-full h-full absolute top-2 right-2'>
                                            {button}
                                        </button>
                                    </div>}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default InstagramPost
