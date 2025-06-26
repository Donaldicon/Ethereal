import React from 'react'

import getInTouch from '../assets/getintouch/get-in-touch.png'

import { Link } from 'react-router-dom'

import { easeInOut, motion } from 'framer-motion'

import logo from '../assets/logo/ethereal-logo.png'

const GetInTouch = () => {
    const facebookLink = 'https://web.facebook.com/profile.php?id=61576418447457';
    const instagramLink = 'https://www.instagram.com/officialetherealng/';
    const twitterLink = 'https://x.com/Off_Ethereal';
    const redditLink = 'https://www.reddit.com/user/Officialethereal/';
  return (
    <div className='overflow-hidden ' id='contact'>
    <motion.div
    initial={{opacity:0, y:100}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:2, ease:easeInOut}}
    viewport={{once:false}}
    >
    <div className='hidden md:flex items-center mt-6 xl:mt-20 bg-[#FAFBFB] px-[5%]' >
        <div className='w-[60%] flex flex-col pl-[2%]'>
            <h1 className='font-barlow text-[60px] lg:text-[75px] xl:text-[85px] font-semibold text-[#363636]'>GET IN TOUCH</h1>

            <p className='text-[#808080] md:text-[10px] lg:text-[12px] xl:text-[14px] font-poppins'>We'd love to hear from you! Have questions or feedback? <br />Reach out to us.</p>

            <div className='mt-5 flex items-center space-x-2'>
                <img src={logo} alt="" className='shadow-lg rounded-full w-[5%]'/>
                <Link to="mailto:ethereal@gmail.com" target='_blank' className='md:text-[12px] lg:text-[14px] xl:text-[16px] font-poppins text-[#191919]'>ethereal@gmail.com</Link>
            </div>

            <div className='grid grid-cols-3 w-[65%] gap-y-4 font-barlow md:text-[16px] lg:text-[20px] xl:text-[24px] mt-5 text-[#808080]'>
                <Link to={facebookLink} target='_blank'  className='underline'>Facebook</Link>
                <Link to={instagramLink} target='_blank'   className='underline'>Instagram</Link>
                <Link to={twitterLink} target='_blank'   className='underline'>Twitter(X)</Link>
                <Link to={redditLink} target='_blank'    className='underline'>Reddit</Link>
            </div>
        </div>

        <div className='w-[45%]'>
            <img src={getInTouch} alt="" className='rounded-r-3xl'/>
        </div>
    </div>
    </motion.div>
    </div>
  )
}

export default GetInTouch