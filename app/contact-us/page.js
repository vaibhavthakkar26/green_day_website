import React from 'react'
import InnerBanner from '../components/innerBanner'
import { basicInfromation, ContactUsBanner, contactUsFrom } from '../../lib/json/pagesData/contactUs/index'
import ContactUsFrom from '../components/contactusFrom/index'
import BasicInfromationSection from '../components/basicInfromationSection'
import InstagramPost from '../components/commons/instagramPost'
const ContactUs = () => {
  const contactusBannerData = ContactUsBanner
  const contactUsFromData = contactUsFrom
  const basicInfromationData = basicInfromation
  return (
    <div>
      <InnerBanner BannerData={contactusBannerData} />
      <ContactUsFrom contactUsFromData={contactUsFromData} />
      <BasicInfromationSection basicInfromationData={basicInfromationData}  />
    </div>
  )
}

export default ContactUs
