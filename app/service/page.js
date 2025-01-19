import React from 'react'
import Banner from '../components/commons/banner'
import { PageData } from '../../lib/json/pagesData/index'

const Searvice = () => {
  const searvicedata = PageData.serviceBanner
  return (
    <div>
      <Banner bannerData={searvicedata} />
    </div>
  )
}

export default Searvice
