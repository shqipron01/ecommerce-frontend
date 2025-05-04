// @ts-nocheck
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import HeroImg from '../../assets/images/banner-1.png';
import HeroImg2 from '../../assets/images/banner-2.png';

const Hero = () => {
  return (
    <section className='section-1'>
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}        
            breakpoints={{
                1024: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                }
            }}
        >               
            <SwiperSlide>
                <div className="content" style={{ backgroundImage: `url(${HeroImg})` }}></div>                   
            </SwiperSlide>
            <SwiperSlide>
                <div className="content" style={{ backgroundImage: `url(${HeroImg2})` }}></div>
            </SwiperSlide>                
        </Swiper>
    </section>
  )
}

export default Hero