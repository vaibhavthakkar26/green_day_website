import React from 'react'
import { serviceInner } from '../../../lib/json/pagesData/servicePage/serviceInner/index'
import ServiceDetails from '../../../app/components/serviceDetailsSection'
import InstagramPost from '../.././components/commons/instagramPost/index'
import InnerBanner from '../../components/innerBanner'

const SearviceInner = () => {
  const BannerData = serviceInner.shirodharaBannerData
  const deatilsData=serviceInner.serviceDetails
  const instagramPostData=serviceInner.InstagramPostDetails
  return (
    <div>
      <InnerBanner BannerData={BannerData} />
      <ServiceDetails deatilsData={deatilsData} />
      <InstagramPost instagramPostData={instagramPostData} />
    </div>
  )
}

export default SearviceInner
