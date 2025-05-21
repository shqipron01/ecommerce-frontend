import React from 'react'
import LatestProduct from './common/LatestProduct';
import Hero from './common/Hero';
import Layout from './common/Layout';
import FeaturedProduct from './common/FeaturedProduct';


const Home = () => {
  return (
    <>
        <Layout>
            <Hero />
            <LatestProduct />
            <FeaturedProduct />
        </Layout>
    </>
  )
}

export default Home