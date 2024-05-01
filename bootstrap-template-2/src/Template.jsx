import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Getstarted from './Components/Getstarted'
import Construction from './Components/Construction'
import Services from './Components/Services'
import Altservices from './Components/Altservices'
import Featurs from './Components/Featurs'
import Projects from './Components/Projects'
import Testimonals from './Components/Testimonals'
import Blog from './Components/Blog'
import Footer from './Components/Footer'
function Template() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Getstarted/>
        <Construction/>
        <Services/>
        <Altservices/>
        <Featurs/>
        <Projects/>
        <Testimonals/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default Template