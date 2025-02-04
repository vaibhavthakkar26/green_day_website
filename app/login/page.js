import Image from 'next/image'
import React from 'react'
import Button from '../components/commons/button'

const Login = () => {
    return (
        <div className=' pt-[100px] md:pt-0 w-full max-w-[1920px] mx-auto flex flex-col items-center justify-center relative md:h-[600px] lg:h-[900px] xl:h-[950px] px-5 '>
            <div className='w-full max-w-[424px] mx-auto'>
                <h4 className='w-full font-Dosis font-bold trackng-[0.65px] mb-5 text-center'>{`Welcome Back!`}</h4>
                <p className='text-base text-center font-OpenSans text-white'>{`Unlock exclusive access to personalized treatments, special offers, and your wellness journey.`}</p>
                <div className='mt-[50px]'>
                    <label className='text-base font-OpenSans font-semibold mb-2.5 block'>
                        {`Mobile Number`}
                    </label>
                    <div className='bg-white/10 border-b-[1px] border-white flex items-center justify-between gap-3 p-2.5'>
                        <input placeholder={`+91 00000 00000`} className=' placeholder:text-base placeholder:font-OpenSans placeholder:text-white/10 bg-transparent outline-none block w-full' />
                        <Image src={"/images/mobileIcon.svg"} alt='images' width={30} height={30} className='w-[24px] h-[24px] object-cover' />
                    </div>
                    <Button label={`Send OTP`} href={"#"} variant={"grayButton"} className="w-full mt-[30px]" />
                </div>
            </div>
            <Image src={"/images/loginBgImage.svg"} alt='' width={1920} height={1060} className='absolute inset-0 h-[850px] lg:h-[900px] xl:h-[950px] md:block hidden' />
        </div>
    )
}

export default Login
