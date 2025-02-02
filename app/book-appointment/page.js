import React from 'react'
import InnerBanner from '../components/innerBanner';
import { BookAppointmentBanner } from '../../lib/json/pagesData/bookAppoinment/index';
import AppointmentFrom from '../components/appointmentFrom';
import InstagramPost from '../components/commons/instagramPost';
import { InstagramPostDetails } from '../../lib/json/pagesData/servicePage/serviceInner/shirodhara/index';


const BookAppointment = () => {


    const BookAppointmentBannerData = BookAppointmentBanner
      const instagramPostData = InstagramPostDetails
    return (
        <div>
            <InnerBanner BannerData={BookAppointmentBannerData} />
            <AppointmentFrom />
            <InstagramPost instagramPostData={instagramPostData}/>
        </div>
    )
}

export default BookAppointment
