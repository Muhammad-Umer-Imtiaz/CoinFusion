import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import SecondSection from './Components/SecondSection'
import ThirdSection from './Components/ThirdSection'
import FourthSection from './Components/FourthSection'
import FifthSection from './Components/FifthSection'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <div className='bg-[#000] h-contain pt-10 rounded-b-[55px]'>
      <Navbar/>
      <HeroSection/>
      </div>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <Footer/>
    </div>
  )
}

export default App