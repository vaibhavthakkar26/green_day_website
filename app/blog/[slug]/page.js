import Image from 'next/image'
import { blogdetails, Categories, socialIcon, Tag } from '../../../lib/json/pagesData/blogPage/blogDetails/index'
import React from 'react'
import TopArrow from '../../components/commons/icons/topArrow/index'
import Link from 'next/link'



const BlogDetail = () => {
  const blogdetailsData = blogdetails
  const CategoriesData = Categories
  const Tagdata = Tag
  const socialIcondata = socialIcon


  const { Breadcrumb, image, title, description1, description2, description3, postImage } = blogdetailsData || {}
  return (
    <div className='pt-[150px]'>
      <div className='container flex w-full justify-between gap-4'>
        <div className='w-full '>
          {Breadcrumb && <p className='text-white italic text-base font-OpenSans mb-4'>{Breadcrumb}</p>}
          {image && <div className='aspect-[872/461] '>
            <Image src={image} alt='image' width={500} height={500} className='w-full object-cover' />
          </div>}
          {title && <h2 className='text-[26px] md:text-[30px] lg:text-[35px] font-Dosis font-semibold mt-8 md:mt-[47px] mb-[30px]'>{title}</h2>}
          <div dangerouslySetInnerHTML={{ __html: description1 }} className='SecondaryDescription font-OpenSans tracking-[0.65px] flex flex-col gap-5 md:gap-8 mb-5' />
          <div className='flex sm:flex-row flex-col w-full justify-between gap-4 mb-5'>
            <div dangerouslySetInnerHTML={{ __html: description2 }} className='SecondaryDescription !leading-[150%] font-OpenSans tracking-[0.65px] flex flex-col gap-5 md:gap-8 w-full max-w-full sm:max-w-[422px]' />
            <div className='w-full max-w-full sm:max-w-[424px]'>
              <Image src={postImage} alt='image' width={500} height={500} className='w-full max-w-full sm:max-w-[424px] h-[250px] em:h-[320px] sm:h-[390px] object-cover' />
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: description3 }} className='SecondaryDescription !leading-[150%] font-OpenSans tracking-[0.65px] flex flex-col gap-5 md:gap-8' />
        </div>
        <div className='w-full max-w-[250px] lg:max-w-[424px] md:block hidden'>
          <div>
            <label className='PrimarySubtitle font-Dosis font-medium mb-2.5 block mt-8'>
              {`Search`}
            </label>
            <div className='bg-white/10 border-b-[1px] border-white flex items-center justify-between gap-3 p-2.5'>
              <input placeholder={`Search`} className=' placeholder:text-base placeholder:font-OpenSans placeholder:text-white/50 bg-transparent outline-none block w-full' />
              <Image src={"/SearchIcon.svg"} alt='images' width={30} height={30} className='w-[24px] h-[24px] object-cover' />
            </div>
          </div>
          <div className='mt-[50px]'>
            <h5 className='PrimarySubtitle font-semibold font-Dosis mb-[20px]'>{CategoriesData.title}</h5>
            {CategoriesData.CategorieList &&
              <div className='flex flex-col gap-3'>
                {CategoriesData.CategorieList.map((item, index) => {
                  return (
                    <div key={index}>
                      <span className='SecondaryDescription font-OpenSans tracking-[0.65px]'>{item.list}</span>
                    </div>
                  )
                })}
              </div>
            }
          </div>
          <div className='bg-[#272727] px-[15px] py-[19px] my-[50px]'>
            <h5 className='PrimarySubtitle font-semibold font-Dosis !leading-[120%] mb-[30px]'>{`Subscribe`}</h5>
            <h6 className='PrimaryDescription !leading-[120%] font-Dosis mb-[20px]'>{`Your Journey to Bliss Begins Here`}</h6>
            <div className='bg-white/10 border-b-[1px] border-white flex items-center justify-between gap-3 p-2.5'>
              <input placeholder={`Your E-mail ID`} className=' placeholder:text-base placeholder:font-OpenSans placeholder:text-white/50 bg-transparent outline-none block w-full' />
              <TopArrow className="w-[24px] h-[24px]" />
            </div>
          </div>
          <h5 className='PrimarySubtitle font-semibold font-Dosis mb-[20px]'>{Tagdata.title}</h5>
          <span className='SecondaryDescription font-OpenSans tracking-[0.65px] italic'>{Tagdata.tags}</span>
          <div className='mt-[50px]'>
            <h5 className='PrimarySubtitle font-semibold font-Dosis mb-[20px]'>{socialIcondata.title}</h5>
            {socialIcondata.socialIcons &&
              <div className='flex gap-5'>
                {socialIcondata.socialIcons.map((item, index) => {
                  return (
                    <div key={index}>
                      <Link href={"#"} >
                        <Image src={item.image} alt='image' width={50} height={50} className='w-[24px] h-[24px] hover:opacity-80' />
                      </Link>
                    </div>
                  )
                })}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetail
