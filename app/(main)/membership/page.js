import React from 'react'
import InnerBanner from '../components/innerBanner'
import { membershipBanner, premiummembarship, tretment } from '../../../lib/json/pagesData/membershipPage/index'
import ServiceDetails from '../components/serviceDetailsSection'
import TretmentSection from '../components/tretmentSection'
import { InstagramPostDetails } from '../../../lib/json/pagesData/servicePage/serviceInner/shirodhara/index'
import InstagramPost from '../components/commons/instagramPost'

const Membership = () => {
  const membershipBannerdata = membershipBanner
  const premiummembarshipdata = premiummembarship
  const treatmentData = tretment
  const instagramPostData = InstagramPostDetails
  return (
    <div>
      <InnerBanner BannerData={membershipBannerdata} />
      <ServiceDetails deatilsData={premiummembarshipdata} className=" [&>div>:nth-child(1)]:!pb-0" />
      <TretmentSection treatmentData={treatmentData} />
      <InstagramPost instagramPostData={instagramPostData} />
    </div>
  )
}

export default Membership
