import React from 'react'
import { useState } from 'react'

const Email = () => {
    const [isActive, setIsActive] = useState(false)

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const emailVerificationRegex = /^[^\s@]+@[^\s@]+\.(com|net|org)$/

        if(email.length===0){
          setEntryError("Enter Valid Email Address")
      } else if(!emailVerificationRegex.test(email)){
            setError("Please Enter Valid Email with .com or .net or .org")
        } else{
            setError('');
            alert('Your Email has been successfully added to the waitlist')
            setEmail('')
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
      {/* desktop view */}
      <div className='relative hidden lg:block overflow-visible'>
          <input type="text" className= {`h-12 xl:h-16 border-[#DADBDD]  border-[1px] transition-all duration-700 ease-in-out rounded-full 
          ${isActive ? 
            '-rotate-3 w-[400px] xl:w-[550px]' : 
            'rotate-0 w-[350px] xl:w-[500px]'}`} 
            readOnly="readonly" 
            onFocus={()=> {setIsActive(true)}}
            onBlur={() => {setIsActive(false)}}
          />

            <input type="email" placeholder='Enter your email' required 
                  className={`absolute top-0 h-12 xl:h-16 outline-none rounded-full pl-4 shadow-sm placeholder:text-[16px] 
                  ${isActive ? 'pr-20 w-[350px] xl:w-[550px]' : 'pr-[135px]  w-[350px] xl:w-[500px]'} font-barlow`}
                  value={email}
                  onChange={handleChange}
                  onFocus={()=> {setIsActive(true)}}
                  onBlur={() => {setIsActive(false)}}/>

          <button className='absolute right-0 m-auto top-0 bottom-0 z-[2] text-white transition-all duration-700 ease-in-out hover:text-[#2fcc93] bg-[#2FCC93] hover:bg-white text-[16px] px-5 rounded-full font-barlow'  type='submit'>Join waitlist</button>
              
        </div>
            


    
      {/* mobile view */}
      <div className='relative lg:hidden'>
        <input type="text" className= {`h-8 border-[#DADBDD]  border-[1px] transition-all duration-700 ease-in-out rounded-full ${isActive ? '-rotate-3 md:w-[270px] w-[280px]' : 'rotate-0 md:w-[250px] w-[260px]'}`} readOnly="readonly" onFocus={()=> {setIsActive(true)}}
            onBlur={() => {setIsActive(false)}}
        />
        <div />

                <input type="email" placeholder='Enter your email' required 
                    className={`absolute top-0 h-8 outline-none rounded-full pl-4 text-[10px] md:text-[12px] shadow-sm placeholder:text-[10px md:placeholder:text-[12px] 
                    ${isActive ? 'md:pr-[90px] pr-[75px] md:w-[270px] w-[280px]' : 'md:pr-[90px] pr-[75px]  md:w-[250px] w-[260px]'} font-barlow`}
                    value={email}
                    onChange={handleChange}
                    onFocus={()=> {setIsActive(true)}}
                    onBlur={() => {setIsActive(false)}}/>
            <button className='absolute right-0 m-auto top-0 bottom-0 z-[2] text-white transition-all duration-700 ease-in-out hover:text-[#2fcc93] bg-[#2FCC93] hover:bg-white text-[9px] md:text-[12px] px-3 rounded-full font-barlow' type='submit'>Join waitlist</button>



        </div>
        
        {error && (
                <div className={`text-red-500 text-[8px] pl-2 ${isActive ? 'mt-2' : 'mt-1'}`}>{error}</div>
            )}
        </form>
    </div>

  )
}

export default Email