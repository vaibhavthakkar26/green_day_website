import InnerBanner from '../../../components/innerBanner/index'
import { branchdetailsBanner, ImageGallry, mapSection } from '../../../../lib/json/pagesData/ourBranchPage/branchDetailsData/branchDetailsData/index'
import React from 'react'
import MapSection from '../../../components/mapSection/index'
import ImageGallrySection from '../../../components/imageGallrySection/index'
import ServiceSection from "../../../components/serviceSection/index"
import InstagramPost from '../../../components/commons/instagramPost'
import { serviceInner } from '../../../../lib/json/pagesData/servicePage/serviceInner'

const BranchDetails = () => {
  const branchdetailsBannerData = branchdetailsBanner
  const mapSectionData = mapSection
  const ImageGalleryData = ImageGallry
  const instagramPostData = serviceInner.InstagramPostDetails

  return (
    <div>
      <InnerBanner BannerData={branchdetailsBannerData} />
      <MapSection mapSectionData={mapSectionData} />
      <ImageGallrySection ImageGalleryData={ImageGalleryData} />
      <ServiceSection />
      <InstagramPost instagramPostData={instagramPostData} />
    </div>
  )
}

export default BranchDetails
