
import React from 'react'
import { serviceInner } from '../../../lib/json/pagesData/servicePage/serviceInner/index'
import InnerBanner from '../../(main)/components/innerBanner/index'
import { branchDetailsBaner, branchDetailsList } from '../../../lib/json/pagesData/ourBranchPage/branchDetailsData/index'
import InstagramPost from '../../(main)/components/commons/instagramPost'
import ListSection from '../../(main)/components/listSection/index'
import Footer from '../../(main)/components/commons/footer'

const BranchDetails = () => {
  const BannerData = branchDetailsBaner
  const instagramPostData = serviceInner.InstagramPostDetails
  const ListSectionData = branchDetailsList
  return (
    <div>
      <InnerBanner BannerData={BannerData} />
      <ListSection ListSectionData={ListSectionData} />
      <InstagramPost instagramPostData={instagramPostData} />
      <Footer  />
    </div>
  )
}

export default BranchDetails;