import React from 'react'
import createImage from '../assets/create/create-img.png'
import Logo from '../assets/logo/ethereal-logo.png'

import { easeInOut, motion } from 'framer-motion'

import Email from './Email'

const Create = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center bg-[#FAFBFB] pb-8 md:pb-0 mt-10' id='waitlist'>
        <div className='ml-0 xl:-ml-20 overflow-hidden '>
            <motion.div
            initial={{opacity:0, x:-100}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:2, ease:easeInOut}}
            >
                <img src={createImage} alt="" className=' md:w-full'/>
            </motion.div>
        </div>

        <div className='hidden md:block overflow-hidden'>
            <motion.div
            initial={{opacity:0, x:100}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:2, ease:easeInOut}}
            viewport={{once:false}}
            >
                <div className='pl-0 md:-pl-50 xl:-pl-[205px] flex justify-center items-center md:items-start flex-col '>
                    <img src={Logo} alt="" className='shadow-xl rounded-full w-[15%]'/>

                    <p className='text-[#0FA875] font-voltaire text-[25px] md:text-[37px] lg:text-[45px] xl:text-[55px] mt-1'>One App.</p>

                    <p className='text-[#363636] text-[25px] md:text-[37px] lg:text-[45px] xl:text-[55px] font-barlow font-semibold '>Less Stress.</p>

                    <p className='text-[#808080] text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-poppins mt-2 leading-[25px]'>Join thousands of others getting early access to Ethereal.</p>

                    <div className='mt-12'>
                        <Email />
                    </div>
                </div>
            </motion.div>
        </div>
        
        <div className='block md:hidden overflow-hidden -mt-7'>
            <motion.div
            initial={{opacity:0, x:100}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:2, ease:easeInOut}}
            viewport={{once:false}}
            >
                <div className='pl-0 flex justify-center items-center md:items-start flex-col '>
                    <img src={Logo} alt="" className='shadow-xl rounded-full w-[20%]'/>

                    <p className='text-[#0FA875] font-bold font-voltaire text-[48px] leading-[60px]'>One App.</p>

                    <p className='text-[#363636] text-[48px] font-barlow font-semibold  leading-[60px]'>Less Stress.</p>

                    <p className='text-[#808080] text-[15px] text-center font-poppins mt-2 leading-[25px]'>Join thousands of others getting<br /> early access to Ethereal.</p>

                    <div className='mt-7'>
                        <Email />
                    </div>
                </div>
            </motion.div>
        </div>


    </div>
  )
}

export default Create