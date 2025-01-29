import React from 'react'
import InnerBanner from '../components/innerBanner'
import { blogBaner, blogData } from '../../lib/json/pagesData/blogPage/index'
import BlogCard from '../components/blogCard'
import InstagramPost from '../components/commons/instagramPost'
import { serviceInner } from '../../lib/json/pagesData/servicePage/serviceInner/index'

const Blog = () => {
  const bannerData = blogBaner
  const blogCard = blogData
  const instagramPostData = serviceInner.InstagramPostDetails

  return (
    <div>
      <InnerBanner BannerData={bannerData} />
      <BlogCard blogCard={blogCard} />
      <InstagramPost instagramPostData={instagramPostData} />
    </div>
  )
}

export default Blog
