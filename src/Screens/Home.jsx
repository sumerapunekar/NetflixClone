import React, { useState } from 'react'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle'; 
import LanguageIcon from '@mui/icons-material/Language';
import SignIn from './SignIn';

function Home(props) {
    
  return (
    <div>
        {/* navbar */}
    <div className='flex justify-between px-8 py-4'>
     <img  className='h-24 w-44' src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"/>
     <div className='py-2 px-4 space-x-4'>
        <button className='bg-black text-white px-4 py-2 items-center border-white border-2 rounded-md'><LanguageIcon/> English  <ArrowDropDownCircleIcon/></button>
        <button onClick={props.p2} className='bg-red-700 text-white items-center px-8 py-2 rounded-md'>SignIn</button>
     </div>
    </div>
        {/* downside */}
    <div className='flex justify-center flex-col text-white mx-auto items-center space-y-4 mt-40'>
     <p className='font-extrabold text-6xl font-sans'>Unlimited movies,TV <br/><span className='px-12'>shows and more.</span></p>
     <p className='text-2xl font-bold font-serif'>Watch anywhere .Cancel anytime.</p>
     <p className=' text-lg font-semibold'>Ready to Watch?Enter your Email to create or restart your membership</p>
     <div className='flex h-16 items-center  '>
        <input type="email" placeholder='Enter address' className='bg-white text-slate-400 w-96 py-4 px-2 '/>
        <button className='bg-red-700 text-white items-center w-40 py-4 px-2'>Get Started</button>
     </div>
    </div>
    </div>
  )
}

export default Home
