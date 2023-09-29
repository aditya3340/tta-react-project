import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='pt-5 px-4 md:mx-10 lg:mx-40'>
        <Header/>
        <Hero/>
        <Footer/>
    </div>
  )
}

export default Home