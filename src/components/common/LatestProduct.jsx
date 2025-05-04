// @ts-nocheck
import React from 'react'
import ProductImg from '../../assets/images/eight.jpg';

const LatestProduct = () => {
  return (
    <section className='section-2 pt-5 '>
        <div className='container'>
            <h2>New Arrivals</h2>
            <div className='row mt-4'>
                <div className='col-md-3 col-6'>
                    <div className='product card border-0'>
                        <div className='card-img'>
                            <img src={ProductImg} alt="" className=''/>
                        </div>
                        <div className='card-body pt-3'>
                            <a href="">T-Shirt for Man</a>
                            <div className='price'>
                                $50
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-6'>
                    <div className='product card border-0'>
                        <div className='card-img'>
                            <img src={ProductImg} alt="" className=''/>
                        </div>
                        <div className='card-body pt-3'>
                            <a href="">T-Shirt for Man</a>
                            <div className='price'>
                                $50
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-6'>
                    <div className='product card border-0'>
                        <div className='card-img'>
                            <img src={ProductImg} alt="" className=''/>
                        </div>
                        <div className='card-body pt-3'>
                            <a href="">T-Shirt for Man</a>
                            <div className='price'>
                                $50
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-6'>
                    <div className='product card border-0'>
                        <div className='card-img'>
                            <img src={ProductImg} alt="" className=''/>
                        </div>
                        <div className='card-body pt-3'>
                            <a href="">T-Shirt for Man</a>
                            <div className='price'>
                                $50
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LatestProduct