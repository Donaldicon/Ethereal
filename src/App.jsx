import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import GetInTouchM from './components/GetInTouchM'
import Create from './components/Create'
import GetInTouch from './components/GetInTouch'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='py-5'>
      <Navbar />
      <div className='px-[2%] bigScreens:px-[13%]'>
      <Hero />
      <WhyUs />
      <GetInTouchM />
      <Create />
      <GetInTouch />
      <Footer />
      </div>
    </div>
  )
}

export default App