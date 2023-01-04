import React from 'react'

import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Row from '../Components/Row';
import { useEffect } from 'react';
import requests from '../Request';
import axios from 'axios';

function HomeScreen() {

  useEffect(()=>
  {axios.get('https://api.themoviedb.org/3/movie/550?api_key=c89626befdd2d5f2841a524b006e75a7')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })},[])

  return (
    <div className=''>
        
        <Navbar/>
        
        <Banner/>
        
        <div className='bg-black h-screen px-8 py-8 '>
        <Row title={"Netflix Orignals"} fetchUrl={requests.fetchNetflixOriginals} />
        <Row title={"Trending"}  fetchUrl={requests.fetchTrending}/>
        <Row title={"Top Rated"}  fetchUrl={requests.fetchTopRated}/>
        <Row title={"Action"}  fetchUrl={requests.fetchActionMovies}/>
        <Row title={"Romance"}  fetchUrl={requests.fetchRomanceMovies}/>
        <Row title={"Comedy"}  fetchUrl={requests.fetchComedyMovies}/>
        <Row title={"Documentries"} fetchUrl={requests.fetchDocumentaries} />
        <Row title={"Horror"} fetchUrl={requests.fetchHorrorMovies} />
        {/* <Row title={"Sci-Fi"}  /> */}
        </div>   
        
    </div>
  )
}

export default HomeScreen