import InnerBanner from '../../../(main)/components/innerBanner/index'
import { branchdetailsBanner, ImageGallry, mapSection } from '../../../../lib/json/pagesData/ourBranchPage/branchDetailsData/branchDetailsData/index'
import React from 'react'
import MapSection from '../../../(main)/components/mapSection/index'
import ImageGallrySection from '../../../(main)/components/imageGallrySection/index'
import ServiceSection from "../../../(main)/components/serviceSection/index"
import InstagramPost from '../../../(main)/components/commons/instagramPost'
import { serviceInner } from '../../../../lib/json/pagesData/servicePage/serviceInner'
import Footer from '../../../(main)/components/commons/footer'

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
      <Footer  />
    </div>
  )
}

export default BranchDetails
