import React from 'react'
import Header from './Comonents/Header'
import Headermain from './Comonents/Headermain'
import About from './Comonents/About'
import Counts from './Comonents/Counts'
import Services from './Comonents/Services'
import Features from './Comonents/Features'
import Testimonials from './Comonents/Testimonials'
import Portfolio from './Comonents/Portfolio'
import Pricing from './Comonents/Pricing'
import Faq from './Comonents/Faq'
import Contact from './Comonents/Contact'
import Footer from './Comonents/Footer'
function Template() {
  return (
    <div>
        <Header/>
        <Headermain/>
        <About/>
        <Counts/>
        <Services/>
        <Features/>
        <Testimonials/>
        <Portfolio/>
        <Pricing/>
        <Faq/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Template