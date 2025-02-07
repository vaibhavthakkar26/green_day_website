import React from 'react'
import Button from '../commons/button'
import WhatsappIcon from '../commons/icons/whatsappIcon'
import clsx from 'clsx'
import MobileIcon from '../commons/icons/mobileIcon'

const MapSection = ({ mapSectionData }) => {
    const { title, description, mobilenumber, button } = mapSectionData || {}
    return (
        <div className='pt-[50px] md:pt-[87px] mb-[44px]  md:mb-[65px] lg:mb-[97px]'>
            <div className='container flex lg:flex-row flex-col justify-between gap-4 gap-y-16'>
                <div className='w-full max-w-full lg:max-w-[648px] flex flex-col  gap-[30px]'>
                    <h4 className='font-bold font-Dosis tracking-[0.65px] '>{title}</h4>
                    <div dangerouslySetInnerHTML={{ __html: description }} className='SecondaryDescription font-OpenSans flex flex-col gap-6 ' />
                    <div className='flex items-center gap-2'>
                        <MobileIcon />
                        <span className='SecondaryDescription font-OpenSans'>{mobilenumber}</span>
                    </div>
                    {button &&
                        <div className="flex em:flex-row flex-col em:items-center gap-4 md:gap-5 w-full">
                            {button.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Button label={item.label} variant={item.variants} href={"#"} icon={item.variants === "grayButton" ? WhatsappIcon : ""} className={clsx("whitespace-nowrap w-full text-center justify-center", item.variants == "lineButton" ? "bg-white/10 backdrop-blur-[64px] text-xl md:text-2xl leading-[100%] py-[27px] px-[60px]" : "")} />
                                    </div>
                                )
                            })}
                        </div>
                    }
                </div>
                <div className='w-full max-w-full lg:max-w-[648px]  h-[350px] em:h-[480px] md:h-[605px]'>
                    <iframe width="100%" height="605" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=650&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" className='w-full max-w-full lg:max-w-[648px] h-[350px] em:h-[480px] md:h-[605px]'></iframe>
                </div>
            </div>
        </div>
    )
}

export default MapSection
