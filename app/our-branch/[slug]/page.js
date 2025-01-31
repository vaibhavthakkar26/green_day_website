
import React from 'react'
import { serviceInner } from '../../../lib/json/pagesData/servicePage/serviceInner/index'
import InnerBanner from '../../components/innerBanner/index'
import { branchDetailsBaner, branchDetailsList } from '../../../lib/json/pagesData/ourBranchPage/branchDetailsData/index'
import InstagramPost from '../../components/commons/instagramPost'
import ListSection from '../../components/listSection/index'

const BranchDetails = () => {
  const BannerData = branchDetailsBaner
  const instagramPostData = serviceInner.InstagramPostDetails
  const ListSectionData = branchDetailsList
  return (
    <div>
      <InnerBanner BannerData={BannerData} />
      <ListSection ListSectionData={ListSectionData} />
      <InstagramPost instagramPostData={instagramPostData} />
    </div>
  )
}

export default BranchDetails;