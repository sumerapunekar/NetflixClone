import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { useParams } from 'react-router-dom'
import axios from '../axios';
import { useState } from 'react';

function WatchMovie() {
  const authcheck = "klmnopqrstuvxyz9986";
  const {movieid,auth} = useParams()
  const [videos,setVideos] = useState(null)

  useEffect(()=>{
   async function getMovie(){
    await axios.get('/movie/${movieid}?api_key=30cb7a1b9a94ce47f4e0053e7c86a250&language=en-US')
    .then((res)=>{
      setVideos(res.data.results)
    })
    .catch(err => setVideos(null))
   }
    getMovie()
  },[movieid,auth])

  if(authcheck !== auth ) return <h1>Bad request</h1>;
console.log(videos)
  return (
    <div className='bg-black h-screen'>
        <Navbar/>
        {videos ? <div className=' py-24 max-w-[100rem] mx-auto'>

        <iframe width="1730" height="719" src={`https://www.youtube.com/embed/${videos[0]?.key}`} title={` ${videos[0]?.name}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

        </div> :<h1 className=' text-white max-w-7xl py-24 text-center text-4xl font-black mx-auto'>No videos found</h1>}
    </div>
  )
}

export default WatchMovie