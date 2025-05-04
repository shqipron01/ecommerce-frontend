// @ts-nocheck
import React, { useState } from 'react'
import Layout from './common/Layout'
import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, FreeMode, Navigation  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import ProductImgOne from '../assets/images/mens/five.jpg';
import ProductImgTwo from '../assets/images/mens/six.jpg';
import ProductImgThree from '../assets/images/mens/seven.jpg';

const Product = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [rating, setRating] = useState(4)

    return (
        <Layout>
            <div className='container product-detail'>
                <div className='row'>
                    <div className='col-md-12'>
                        <nav aria-label="breadcrumb" className='py-4'>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item" aria-current="page"><Link to="/shop">Shop</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Product Title</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className='row mb-5'>
                    <div className='col-md-5'>
                        <div className='row'>
                            <div className='col-2'>
                                <Swiper
                                    style={{
                                        '--swiper-navigation-color': '#000',
                                        '--swiper-pagination-color': '#000',
                                        }}
                                        onSwiper={setThumbsSwiper}
                                        loop={true}
                                        direction="vertical"
                                        spaceBetween={10}
                                        slidesPerView={3}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="mySwiper mt-2"
                                    >
                                            
                                    <SwiperSlide>
                                        <div className='content'>
                                            <img 
                                                src={ProductImgOne} 
                                                alt="" 
                                                height={100}
                                                className='w-100' />
                                        </div>                                                                      
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='content'>
                                            <img 
                                                src={ProductImgTwo} 
                                                alt="" 
                                                height={100}
                                                className='w-100' />
                                        </div>                                                                      
                                    </SwiperSlide> 
                                    <SwiperSlide>
                                        <div className='content'>
                                            <img 
                                                src={ProductImgThree} 
                                                alt="" 
                                                height={100}
                                                className='w-100' />
                                        </div>                                                                      
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className='col-10'>
                                <Swiper
                                    style={{
                                    '--swiper-navigation-color': '#000',
                                    '--swiper-pagination-color': '#000',
                                    }}
                                    loop={true}
                                    spaceBetween={10}
                                    navigation={true}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2"
                                >
                                    
                                    <SwiperSlide >
                                        <div className='content'>
                                        <img 
                                            src={ProductImgOne} 
                                            alt="" 
                                            className='w-100' />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide >
                                        <div className='content'>
                                        <img 
                                            src={ProductImgTwo} 
                                            alt="" 
                                            className='w-100' />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide >
                                        <div className='content'>
                                        <img 
                                            src={ProductImgThree} 
                                            alt="" 
                                            className='w-100' />
                                        </div>
                                    </SwiperSlide>           
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-7'>
                        <h2>Product Title</h2>
                        <div className='d-flex'>
                            <Rating
                                size={20}
                                readonly
                                initialValue={rating}
                            />
                            <span className='pt-1 ps-2'>10 Reviews</span>
                        </div>

                        <div className='price h3 py-3'>
                            $20
                        </div>

                        <div>
                            Original Product <br/>
                            Pay on Delivery might be available <br/>
                            Easy 30 days returns and exchanges
                        </div>
                        
                        <div className='pt-3'>
                            <strong className='pt-3'>Select Size</strong>
                            <div className='sizes pt-2'>
                                <button className='btn btn-size'>S</button>
                                <button className='btn btn-size ms-1'>M</button>
                                <button className='btn btn-size ms-1'>L</button>
                            </div>
                        </div>

                        <div className='add-to-cart my-4'>
                            <button className='btn btn-primary text-uppercase'>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Product