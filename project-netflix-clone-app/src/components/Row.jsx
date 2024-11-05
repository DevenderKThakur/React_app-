import React, { useEffect, useState } from "react";
import instance from "../instance";




const base_url = "https://image.tmdb.org/t/p/original/"

function Row ({title , fetchUrl , isLargeRow}) {
    const [movies , setmovies] = useState([])
    const [trailerUrl , setTrailerUrl] = useState("")

    useEffect(function () {
        async function fetchData() {
            const request = await instance.get(fetchUrl)
            setmovies(request.data.results)
            return request
        }
        fetchData() 
    } , [fetchUrl])
    return (
        <div className="ml-5">
            <h2>{title}</h2>
            <div className="flex no-scrollbar-x overflow-y-hidden overflow-x-scroll p-5 no-scrollbar">
                {
                    movies.map(function (item) {
                        return <img key={item.id} className={isLargeRow === true ? "max-h-64 hover:scale-150" : "w-full object-contain max-h-28 transition-transform mr-2.5 hover:scale-125"} 
                        src={`${base_url}${isLargeRow ? item.poster_path : item.backdrop_path}`} 
                        alt={item.title}/>
                    })
                }
            </div>
        </div>
    )
}

export default Row
