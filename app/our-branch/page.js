import React from 'react'
import Banner from '../components/commons/banner'
import { PageData } from '../../lib/json/pagesData/index'

const OurBranch = () => {
  const ourBranchData =PageData.ourBranchbanner
  
  return (
    <div>
     <Banner bannerData={ourBranchData} />
    </div>
  )
}

export default OurBranch
