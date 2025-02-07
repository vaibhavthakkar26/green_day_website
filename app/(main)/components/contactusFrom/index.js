import Image from 'next/image'
import React from 'react'
import Button from '../commons/button'

const ContactUsFrom = ({ contactUsFromData }) => {
    const { title, description } = contactUsFromData || {}
    const from = [
        {
            label: "Full Name",
            placeholder: "Jhon Deo",
            image: "/profile.svg"
        },
        {
            label: "Phone Number",
            placeholder: "99999 88888",
            image: "/mobileIcon.svg"
        },
        {
            label: "Email ID",
            placeholder: "example@email.com",
            image: "/emailIcon.svg"
        }
    ]
    return (
        <div className='py-[100px]'>
            <div className='container'>
                <div className='w-full max-w-[1096px] mx-auto'>
                    <h4 className='font-Dosis font-bold text-center'>
                        {title}
                    </h4>
                    <p className='font-OpenSans text-center mt-[50px] SecondaryDescription tracking-[0.65px] mb-[50px]'>{description}</p>
                </div>
                <from>
                    <div className='grid grid-cols-1 em:grid-cols-2 md:grid-cols-3 gap-6'>
                        {from && from.map((item, index) => {
                            const { label, placeholder, image } = item || {}
                            return (
                                <div key={index} className=''>
                                    <label className='text-base font-OpenSans font-semibold mb-2.5 block'>
                                        {label}
                                    </label>
                                    <div className='bg-white/10 border-b-[1px] border-white flex items-center justify-between gap-3 p-2.5'>
                                        <input placeholder={placeholder} className=' placeholder:text-base placeholder:font-OpenSans placeholder:text-white/10 bg-transparent outline-none block w-full' />
                                        <Image src={image} alt='images' width={30} height={30} className='w-[24px] h-[24px] object-cover' />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='flex flex-col mt-[26px] mb-[29px]'>
                        <label className='text-base font-OpenSans font-semibold mb-2.5'>
                            {`Message`}
                        </label>
                        <textarea rows={6} placeholder='Message' className='placeholder:text-base placeholder:font-OpenSans placeholder:text-white/10 bg-white/10 outline-none border-b-[1px] border-white resize-none' />
                    </div>
                    <Button label={`Send`} variant={"grayButton"} href={"#"} className="!py-[27px] !px-[106px]" />
                </from>
            </div>
        </div>
    )
}

export default ContactUsFrom
