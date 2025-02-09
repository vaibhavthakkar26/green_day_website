import React from 'react'
import { serviceInner } from '../../../lib/json/pagesData/servicePage/serviceInner/index'
import InstagramPost from '../.././(main)/components/commons/instagramPost/index'
import InnerBanner from '../../(main)/components/innerBanner'
import ServiceDetails from '../../(main)/components/serviceDetailsSection'
import Footer from '../../(main)/components/commons/footer'

const SearviceInner = () => {
  const BannerData = serviceInner.shirodharaBannerData
  const deatilsData = serviceInner.serviceDetails
  const instagramPostData = serviceInner.InstagramPostDetails
  return (
    <div>
      <InnerBanner BannerData={BannerData} />
      <ServiceDetails deatilsData={deatilsData} />
      <InstagramPost instagramPostData={instagramPostData} />
      <Footer  />
    </div>
  )
}

export default SearviceInner
