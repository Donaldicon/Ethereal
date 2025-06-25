import React from 'react'

import getInTouch from '../assets/getintouch/get-in-touch.png'

import { Link } from 'react-router-dom'

import { easeInOut, motion } from 'framer-motion'

import logo from '../assets/logo/ethereal-logo.png'

const GetInTouch = () => {
  return (
    <div className='overflow-hidden' id='contact-M'>
        <motion.div
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:2, ease:easeInOut}}
        viewport={{once:false}}
        >
        <div className='md:hidden flex items-center justify-between mt-10 bg-[#FAFBFB]'>
            <div className='w-full flex flex-col px-[5%]'>
                <h1 className='font-barlow text-[45px] font-semibold text-[#363636]'>GET IN TOUCH</h1>

                <p className='text-[#808080] text-[16px] font-poppins mt-1 text-wrap '>We'd love to hear from you! Have questions or feedback? Reach out to us.</p>

                <div className='mt-5 flex items-center space-x-2'>
                    <img src={logo} alt="" className='shadow-lg rounded-full w-[5%]'/>
                    <Link to="mailto:ethereal@gmail.com" target='_blank' className='text-[15px] font-poppins text-[#191919]'>ethereal@gmail.com</Link>
                </div>

                <div className='grid grid-cols-3 w-[85%] gap-y-4 font-barlow text-[18px] mt-5 text-[#808080]'>
                    <Link className='underline'>Facebook</Link>
                    <Link className='underline'>Instagram</Link>
                    <Link className='underline'>Twitter (X)</Link>
                    <Link className='underline'>Reddit</Link>
                </div>
            </div>
        </div>
        </motion.div>
    </div>
  )
}

export default GetInTouch