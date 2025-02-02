import Image from 'next/image'
import React from 'react'
import Button from '../components/commons/button'

const ServiceManagement = () => {
  const from = [
    {
      label: "Full Name",
      placeholder: "Jhon Deo",
      image: "/images/profile.svg"
    },
    {
      label: "Date of Birth",
      placeholder: "DD/MM/YYYY",
      image: "/images/mobileIcon.svg"
    },
    {
      label: "Phone Number",
      placeholder: "+1 (555) 123-4567",
      image: "/images/mobileIcon.svg"
    },
    {
      label: "Email ID",
      placeholder: "john.doe@example.com",
      image: "/images/emailIcon.svg"
    }
  ]
  const button = [
    { label: "Profile Management" },
    { label: "Service Management" },
    { label: "Membership Management" }
  ]
  return (
    <div className=''>
      <div className='relative'>
        <Image src={"/images/serviceBgImage.png"} alt='image' width={1920} height={500} className='w-full object-cover h-[300px]' />
        <div className="flex items-center absolute bottom-6 left-[20px] 1xl:left-[150px] 3xl:left-[200px]  gap-[15px]">
          <Image src={"/images/menPrfile.png"} alt='image' width={200} height={200} className='w-full max-w-[100] object-cover h-[100px] rounded-full' />
          <div>
            <h5 className='PrimarySubtitle font-Dosis font-semibold mb-4'>{`Jhon Deo`}</h5>
            {/* <span className=''>{`Platinum`}</span> */}
            <span className="px-2.5 py-2.5 font-semibold text-black rounded-lg bg-gradient-to-r from-white via-gray-400 to-white border border-gray-500 shadow-md text-base font-OpenSans leading-[100%]">
              {`Platinum`}
            </span>
          </div>
        </div>
        <div>
        </div>
      </div>

      <div className='container flex flex-col lg:flex-row gap-6 pt-[101px]'>
        {button && (
          <div className='w-full lg:w-1/3 lg:max-w-[423px] flex flex-row lg:flex-col gap-[30px] [&>*:nth-child(1)]:bg-white/10 [&>*:nth-child(1)]:border-[1px]'>
            {button.map((item, index) => (
              <div key={index}>
                <Button
                  label={item.label}
                  variant={"grayButton"}
                  href={"#"}
                  className="w-full !bg-transparent border-0 !px-5 !justify-start"
                />
              </div>
            ))}
          </div>
        )}

        <div className='w-full lg:w-2/3 lg:max-w-[872px]'>
          <h4 className='font-Dosis font-bold tracking-[0.65px] mb-[30px]'>
            {`Personal Details`}
          </h4>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {from && from.map((item, index) => {
              const { label, placeholder, image } = item || {};
              return (
                <div key={index} className=''>
                  <label className='text-base font-OpenSans font-semibold mb-2.5 block'>
                    {label}
                  </label>
                  <div className='bg-white/10 border-b-[1px] border-white flex items-center justify-between gap-3 p-2.5'>
                    <input
                      placeholder={placeholder}
                      className='placeholder:text-base placeholder:font-OpenSans placeholder:text-white/50 bg-transparent outline-none block w-full'
                    />
                    <Image
                      src={image}
                      alt='images'
                      width={30}
                      height={30}
                      className='w-[24px] h-[24px] object-cover'
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <Button
            label={`Log Out`}
            variant={"grayButton"}
            href={"#"}
            className="!py-[27px] w-full !bg-[#EF4444]/[10%] border-[#EF4444] text-[#EF4444] mt-[100px]"
          />
        </div>
      </div>

    </div>


  )
}

export default ServiceManagement
