import Image from 'next/image'
import React from 'react'
import Button from '../commons/button'
import WhatsappIcon from '../commons/icons/whatsappIcon'
import clsx from 'clsx'

const ListSection = ({ ListSectionData }) => {
    const { listItem, button, variant } = ListSectionData || {}
    return (
        <div className='pt-[60px] md:pt-[80px] lg:pt-[103px] pb-[60px] md:pb-[80px] lg:pb-[100px]'>
            <div className='container'>
                {listItem &&
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                        {listItem.map((item, index) => {
                            const { title, description, mobileNumber, button, vactoreImage, image } = item || {}
                            return (
                                <div key={index} className='bg-white/10 flex lg:flex-row flex-col justify-between gap-4 relative  border-[1px] border-white '>
                                    <div className='pl-5 pt-5 pb-8 lg:pr-0 pr-5 w-full max-w-full lg:max-w-[292px]'>
                                        {title && <h6 className='PrimarySubtitle font-Dosis font-semibold'>
                                            {title}
                                        </h6>}
                                        {description && <p className='SecondaryDescription font-OpenSans mt-5'>{description}</p>}
                                        {mobileNumber && <div className='flex items-center gap-1 py-5'>
                                            <WhatsappIcon className="w-[24px] h-[24px]" />
                                            <span className='SecondaryDescription font-OpenSans'>{mobileNumber}</span>
                                        </div>}
                                        {
                                            button &&

                                            <div className='flex flex-row items-center gap-5 '>
                                                {
                                                    button.map((item, index) => {
                                                        const { label, varient, link } = item || {}
                                                        const correctedLink = link.startsWith("/") ? link : `/${link}`;
                                                        return (
                                                            <div key={index}>
                                                                <Button label={label} href={correctedLink} variant={varient} className={clsx("", varient === "grayButton" ? "!text-base !py-1 !px-2.5" : "")} />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        }
                                    </div>
                                    {vactoreImage && <div className='absolute bottom-4 left-8 -z-10'>
                                        <Image src={vactoreImage} alt="" width={500} height={500} className='w-full max-w-[240px] h-[185px]' />
                                    </div>}
                                    {image && <div>
                                        <Image src={image} alt="" width={500} height={500} className='w-full max-w-full lg:max-w-[312px] h-[280px] sm:h-[350px] lg:min-h-[400px] object-cover' />
                                    </div>}
                                </div>
                            )
                        })
                        }
                    </div>
                }
                <div className='flex justify-center w-full pt-[60px] md:pt-[80px] lg:pt-[100px]'>
                    {button && <Button label={button} variant={variant} href={`#`} />}
                </div>
            </div>
        </div>
    )
}

export default ListSection
