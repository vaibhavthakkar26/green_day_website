import React from 'react'
import { aboutBanner, aboutMeassageSection, aboutTestimonial, newslatterData, serviceDetails, video } from '../../lib/json/pagesData/aboutusPage/index'
import InnerBanner from '../components/innerBanner'
import ServiceDetails from '../components/serviceDetailsSection'
import MeassageSection from '../components/meassageSection'
import VidoeSection from '../components/vidoeSection'
import InstagramPost from '../components/commons/instagramPost'
import { InstagramPostDetails } from '../../lib/json/pagesData/servicePage/serviceInner/shirodhara/index'
import TestimonialSection from '../components/testimonialSection'
import NewsLatter from '../components/newsLatter'
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
      <MeassageSection meassageSectionData={meassageSectionData} />
      <VidoeSection videoData={videoData} />
      <TestimonialSection TestimonialData={TestimonialData} />
      <NewsLatter newsLatterData={newsLatterData} />
      <InstagramPost instagramPostData={instagramPostData} />
    </div>
  )
}

export default AboutUs
