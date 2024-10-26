import React, { useEffect, useState } from 'react'
import instance from '../instance'
import request from '../requset'

const Banner = () => {
    const [movie , setMovie] = useState([])

    useEffect(function () {
        async function fetchData () {
            const requestData = await instance.get(request.fetchNetflixOriginals)
            setMovie(requestData.data.results[Math.floor(Math.random() * requestData.data.results.length - 1 )])            
        }
        fetchData() 
    } , [])

    console.log(movie);

    function truncate (str , n) {
        return str?.length > n ? str.substr(0,n-1) + "..." : str ; 
    }
    

  return (
    <header style={{
        backgroundSize : "cover" , 
        backgroundImage : `url(
            "https://image.tmdb.org/t/p/original${movie?.backdrop_path}"  
        )`,
        backgroundPosition : "center center"
    }} className='text-white object-contain h-96'>
        <div className='ml-6 pt-36 h-48'>
            <h1 className='text-4xl font-extrabold pb-1'>{movie?.title || movie?.name || movie?.original_name}</h1>
            <div>
                <button className='text-white outline-none border-none font-bold rounded-sm px-6 mr-2 py-1 btn-black-color hover:bg-white hover:text-black transition-all'>Play</button>

                <button className='text-white outline-none border-none font-bold rounded-sm  mr-1 py-1 btn-black-color px-6 hover:bg-white hove:text-black transition-all'>My List</button>
            </div>
            <h1 className='w-3/5 leading-snug pt-4 text-sm max-w-xs min-h-20'>{truncate(movie?.overview , 150)}</h1>
        </div>
        <div className='image-fade-color h-48'></div>
    </header>
  )
}

export default Banner
