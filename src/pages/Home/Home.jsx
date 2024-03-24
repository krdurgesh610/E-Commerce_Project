import React from 'react'
import Layout from '../../components/Layout/Layout'
import HeroSection from '../../components/Herosection/HeroSection'
import Service from '../../components/Service/Service'
import Gallery from '../../components/Gallery/Gallery'

function Home() {
  return (
    <Layout>
        <HeroSection/>
        <Service/>
        <Gallery/>
    </Layout>
  )
}

export default Home
