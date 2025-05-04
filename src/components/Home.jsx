import React from 'react'
import LatestProduct from './common/LatestProduct';
import Hero from './common/Hero';
import Layout from './common/Layout';


const Home = () => {
  return (
    <>
        <Layout>
            <Hero />
            <LatestProduct />
        </Layout>
    </>
  )
}

export default Home