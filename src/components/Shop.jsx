// @ts-nocheck
import React from 'react'
import Layout from './common/Layout'
import Hero from './common/Hero'
import ProductImg from '../assets/images/eight.jpg';
import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <Layout>
      <div className='container'>
        <nav aria-label="breadcrumb" className='py-4'>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Shop</li>
          </ol>
        </nav>
        <div className='row'>
          <div className='col-md-3'>
            <div className='card shadow border-0 mb-3'>
              <div className='card-body p-4'>
                <h3 className='mb-3'>Categories</h3>
                <ul>
                  <li className='mb-2'>
                    <input type="checkbox" />
                    <label htmlFor="" className='ps-2'>Man</label>
                  </li>
                  <li className='mb-2'>
                    <input type="checkbox" />
                    <label htmlFor="" className='ps-2'>Woman</label>
                  </li>
                </ul>
              </div>
            </div>
            <div className='card shadow border-0 mb-3'>
              <div className='card-body p-4'>
                <h3 className='mb-3'>Brands</h3>
                <ul>
                  <li className='mb-2'>
                    <input type="checkbox" />
                    <label htmlFor="" className='ps-2'>Adidas</label>
                  </li>
                  <li className='mb-2'>
                    <input type="checkbox" />
                    <label htmlFor="" className='ps-2'>Nike</label>
                  </li>
                  <li className='mb-2'>
                    <input type="checkbox" />
                    <label htmlFor="" className='ps-2'>Levis</label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-md-9'>
            <div className='row pb-5'>
              <div className='col-md-4 col-6'>
                <div className='product card border-0'>
                  <div className='card-img'>
                    <Link to="/product">
                      <img src={ProductImg} alt="" className=''/>
                    </Link>
                  </div>
                  <div className='card-body pt-3'>
                    <Link to="/product">T-Shirt for Man</Link>
                    <div className='price'>
                      $50
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-6'>
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
              <div className='col-md-4 col-6'>
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
              <div className='col-md-4 col-6'>
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
              <div className='col-md-4 col-6'>
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
              <div className='col-md-4 col-6'>
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
        </div>
      </div>
    </Layout>
  )
}

export default Shop