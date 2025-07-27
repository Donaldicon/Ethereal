import React, { useState, useEffect } from 'react'
import { easeInOut, motion } from 'framer-motion'

import frame1 from '../assets/whyus/frame1.jpg'
import frame2 from '../assets/whyus/frame2.jpg'
import frame3 from '../assets/whyus/frame3.jpg'


const WhyUs = () => {
    const images = [
        {
            img: frame2,
        },
        {
            img: frame1,
        },
        {
            img: frame2,
        },
        {
            img: frame1,
        },

    ]

    const [index, setIndex] = useState(0);
    const [shouldAnimate, setShouldAnimate] = useState(true);

    const allImages = [...images, ...images];

    useEffect(() => {
        const interval = setInterval(() => {
          if (index === images.length) {
            setShouldAnimate(false);
            setIndex(0);
          } else {
            setShouldAnimate(true);
            setIndex((prev) => prev + 1);
          }
        }, 3000);
    
        return () => clearInterval(interval);
      }, [index]);
    
  return (
    <div className='bg-black text-white rounded-3xl flex flex-col items-center justify-center font-barlow py-[4%] px-[3%] z-[1]' id='whyus'>
        <p className='font-poppins text-[12px] xl:text-[16px] text-[#5B5B5B]'>Why us</p>
        <p className='text-[25px] md:text-[37px] leading-[30px] md:leading-[40px] lg:leading-[50px] xl:leading-[60px] lg:text-[45px] xl:text-[55px] font-bold'>Why <span className='font-voltaire text-[#34E0A1] font-normal'>Ethereal</span> is Different</p>
        <p className='text-[#808080] text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-poppins'>Ethereal shows you all available hotels within your current radius.</p>

        <div className='mt-10 hidden md:block'>
            <div className='flex items-center justify-between space-x-5'>
                <motion.div
                initial= {{opacity:0, x:-100}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:2, ease:easeInOut}}
                viewport={{once:true}}>
                    <img src={frame1} alt="" className='w-full rounded-2xl'/>
                </motion.div>

                <div className='overflow-hidden'>
                <motion.div
                initial= {{opacity:0, x:100}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:2, ease:easeInOut}}
                viewport={{once:true}}
                className=''>
                    <img src={frame2} alt="" className='w-full rounded-2xl'/>
                </motion.div>
                </div>
            </div>

            <div className='overflow-hidden'>
                <motion.div
                    initial= {{opacity:0, y:70}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:2, ease:easeInOut}}
                    viewport={{once:true}}>
                    <img src={frame3} alt="" className='mt-7 rounded-2xl'/>
                </motion.div>
            </div>
        </div>

    <div className="relative overflow-hidden w-full md:hidden mt-10 ">
      <div
        className="flex"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: shouldAnimate ? 'transform 0.7s ease-in-out' : 'none',
        
        }}
      >
        {allImages.map((image, i) => (
          <div
            key={i}
            className="w-full flex-shrink-0"
          >
            <img
              src={image.img}
              alt={`Slide ${i}`}
              className=" w-full object-contain rounded-2xl"
            />
          </div>
        ))}


      </div>
      <div className='flex items-center justify-center space-x-2'>

        {images.map((_,idx) => (
            <div
                key={idx}
                className={`w-2 h-2 rounded-full mt-4 ${index === idx ? 'bg-[#2FCC93]' : 'bg-[#828181]'}`}
            >
            </div>
        ))}

        </div>
    </div>
    </div>
  )
}

export default WhyUs