import React from 'react'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import axios from '../axios'
import { useState,useEffect  } from 'react';
import requests from '../Request';


function Banner() {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(()=>{
    async function fetchData(){
      await axios.get(requests.fetchNetflixOriginals)
      .then(response => {
        setMovies(response.data.results[Math.floor(Math.random() * (response.data.results.length -1))])
      }).catch(err => console.log(err))
      
    }
    
    fetchData() ;
  },[])

  function truncate(description , n){
    return description?.length > n ? description.substr(0,n)+"..." : description ;

  }
  console.log(movies)
  return (
   
    <div style={{
      backgroundImage: ` url('${base_url+movies?.backdrop_path}') `
      }} className=" bg-no-repeat bg-cover bg-center h-[400px]">
          <div className='text-left text-white  font-serif'>
            <h1 className='text-6xl font-bold '>{movies?.name}</h1>
            <p className='text-md font-normal'>{truncate(movies?.overview,150)}</p>
           < div className='flex space-x-4'> 
            <button className='px-8 py-2 mt-4 rounded-md items-center bg-white text-black font-semibold'><PlayArrowRoundedIcon/> Play</button>  
            <button className='px-8 py-2 mt-4 rounded-md items-center bg-gray-500 text-white font-semibold'>My List</button>
            </div> 
          </div>
        </div> 
   
  )
}

export default Banner