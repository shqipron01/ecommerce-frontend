// @ts-nocheck
import React, { useEffect, useState } from 'react'
import ProductImg from '../../assets/images/eight.jpg';
import { apiUrl } from './http';
import Loader from '../common/Loader'
import { Link } from 'react-router-dom';

const FeaturedProduct = () => {

   const [products, setProducts] = useState([])
   const [loader, setLoader] = useState(false);
      
   const featuredProduct = async () => {
      setLoader(true);
      await fetch(apiUrl+'/get-featured-products', {
         method: "GET",
         headers: {
               'Content-type': 'application/json',
               'Accept' : 'application/json',
         }

      })
      .then(res => res.json())
      .then(result => {
         setLoader(false)
         setProducts(result.data)
      });
   }

   useEffect(() => {
      featuredProduct()
   }, [])

  return (
    <section className='section-2 py-5 '>
        <div className='container'>
            <h2>Featured Products</h2>
            {
               loader ? (
                  <div className='text-center my-5'>
                        <Loader />
                  </div>
               ) : (
               <div className='row mt-4'>
                  {
                     products && products.map(product => {
                        return (
                           <div className='col-md-3 col-6' key={`product-${product.id}`}>
                              <div className='product card border-0'>
                                 <div className='card-img'>
                                    <Link to={`/product/${product.id}`}>
                                       <img src={product.image_url} alt="" className='w-100'/>
                                    </Link>
                                 </div>
                                 <div className='card-body pt-3'>
                                    <Link to={`/product/${product.id}`}>{product.title}</Link>
                                    <div className='price'>
                                       ${product.price} &nbsp;
                                       {
                                          product.compare_price && <span className='text-decoration-line-through'>${product.compare_price}</span>
                                       }
                                    </div>
                                 </div>
                              </div>
                           </div>
                        )
                     })
                  }
               </div>
               )
            }
         </div>
      </section>
  )
}

export default FeaturedProduct