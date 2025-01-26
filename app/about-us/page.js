import React from 'react'
import { aboutBanner, serviceDetails } from '../../lib/json/pagesData/aboutusPage/index'
import InnerBanner from '../components/innerBanner'
import ServiceDetails from '../components/serviceDetailsSection'

const AboutUs = () => {
  const AboutBannrData = aboutBanner
  const serviceDetailsdata=serviceDetails
  return (
    <div>
      <InnerBanner BannerData={AboutBannrData} />
      <ServiceDetails deatilsData={serviceDetailsdata} />
    </div>
  )
}

export default AboutUs
