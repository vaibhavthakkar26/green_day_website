import React from 'react'
import dynamic from 'next/dynamic'
import { aboutBanner, aboutMeassageSection, aboutTestimonial, newslatterData, serviceDetails, video } from '../../../lib/json/pagesData/aboutusPage/index'
import { InstagramPostDetails } from '../../../lib/json/pagesData/servicePage/serviceInner/shirodhara/index'


const InnerBanner = dynamic(() => import('../components/innerBanner'), { ssr: true })
const ServiceDetails = dynamic(() => import('../components/serviceDetailsSection'), { ssr: true })
import MeassageSection from '../components/meassageSection'
import VidoeSection from '../components/vidoeSection'
import TestimonialSection from '../components/testimonialSection'
import NewsLatter from '../components/newsLatter'
import InstagramPost from '../components/commons/instagramPost'

const AboutUs = () => {
  const AboutBannrData = aboutBanner
  const serviceDetailsdata = serviceDetails
  const meassageSectionData = aboutMeassageSection
  const videoData = video
  const TestimonialData = aboutTestimonial
  const instagramPostData = InstagramPostDetails
  const newsLatterData = newslatterData

  return (
    <div>
      <InnerBanner BannerData={AboutBannrData} />
      <ServiceDetails deatilsData={serviceDetailsdata} className=" [&>div>:nth-child(1)]:!pb-0" />
      <MeassageSection meassageSectionData={meassageSectionData} animate={true} />
      <VidoeSection videoData={videoData} />
      <TestimonialSection TestimonialData={TestimonialData} animate={true} />
      <NewsLatter newsLatterData={newsLatterData} />
      <InstagramPost instagramPostData={instagramPostData} />
    </div>
  )
}

export default AboutUs

