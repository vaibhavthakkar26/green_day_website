import ServiceInnerBanner from '../../../app/components/ServiceInnerBanner/index'
import React from 'react'
import { serviceInner } from '../../../lib/json/pagesData/servicePage/serviceInner/index'
import ServiceDetails from '../../../app/components/serviceDetailsSection'

const SearviceInner = () => {
  const BannerData = serviceInner.shirodharaBannerData
  const deatilsData=serviceInner.serviceDetails
  return (
    <div>
      <ServiceInnerBanner BannerData={BannerData} />
      <ServiceDetails deatilsData={deatilsData} />
    </div>
  )
}

export default SearviceInner
