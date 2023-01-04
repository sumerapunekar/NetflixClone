import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useState,useEffect } from 'react';
function Navbar() {
  const [show,setShow] = useState(false)

  function transition(){
    if(window.scrollY > 250){
      setShow(true)
    } else{
      setShow(false)
    }
  }
 
  useEffect(()=>{
    window.addEventListener("scroll",transition);
    return ()=>window.removeEventListener("scroll" ,transition) ;
  })

  return (
    <div>
        <div className={` ${show ? "fixed bg-black ":"relative"} w-full z-50 `}>
            <div className='flex space-x-16 '>
            <h1 className='text-red-500 text-3xl items-center font-semibold '>NETFLIX</h1>
            <h1 className='text-xl items-center'>TV Shows</h1>
            <h1 className='text-xl items-center'>Movies</h1>
            <h1 className='text-xl items-center'>Recently Added</h1>
            <h1 className='text-xl items-center'>My List</h1>
            </div>
          <button className=''><SearchRoundedIcon /></button>
        </div>
    </div>
  )
}

export default Navbar