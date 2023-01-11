import React from 'react'
import { useState, useEffect } from 'react';
import axios from '../axios';

function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState(null);
    const base_url = "https://image.tmdb.org/t/p/original";
    const authcheck = "klmnopqrstuvxyz9986";

    useEffect(() => {
      async function fetchData(){
        await axios.get(fetchUrl)
      .then(response => {
        setMovies(response.data.results)
      }).catch(err => console.log(err))
    }
  
      fetchData() ;
    }, [fetchUrl]);
console.log(movies)
    return (
      <div className=" bg-black">
        <h1 className=" text-white text-2xl font-semibold">{title}</h1>
        <div className=" flex overflow-x-scroll overflow-y-hidden p-4 space-x-2 ">
        {movies?.map((movie ,index) => (
            <div key={index} className={` ${isLargeRow ? "h-[250px] hover:scale-110" : "h-[150px] hover:scale-105"} w-[350px]  object-contain transition transform hover:scale-105 cursor-pointer duration-300 ease-in-out  `}>
              <a href={`/watch/${movie?.id}/${authcheck}`}>
              <img className={` ${isLargeRow ? "h-[250px] hover:scale-110" : "h-[150px] hover:scale-105"} w-[350px]  object-contain transition transform hover:scale-105 cursor-pointer duration-300 ease-in-out  `}  src={base_url + movie.poster_path || movie.backdrop_path
}  />
              </a>
            </div>
        ))}


        </div>
      </div>
    );
  }

export default Row