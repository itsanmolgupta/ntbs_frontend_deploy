import React from 'react'
import './banner.css'
import ImageSlider from '../image_slider/image_slider'
// import { slideshowImages } from '../../data/BannerSlideshowImages'

const Banner = () => {
  return (
    <>
        <ImageSlider />
        <div className="home" id="home">
          <div className="main-text">
          <h1 className='animate__animated animate__fadeInUp animate__duration-2s' >24th Saraswati Puja & Cultural Program</h1>
            <h2 className='animate__animated animate__fadeInUp animate__duration-2s animate__delay-1s'>2nd Falgun, Wednesday, 7:00 am onwards</h2>
            <a href="#saraswati_puja" className='animate__animated animate__duration-2s animate__fadeInUp animate__delay-2s'>
              <button className="btn">Know More</button>
            </a>
        </div>
      </div>
    </>
  )
}
export default Banner