import { useState } from 'react'
import Row from './components/Row'
import request from './requset'
import Banner from './components/Banner'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <div className="bg-zinc-950 text-white">
        <Navbar/>
        <Banner/>
        <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow={true}
        />
        <Row title="Trending Now" fetchUrl={request.fetchTreanding}/>
        {/* <Row title="Top Rated" fetchUrl={request.fetchTopRated}/> */}
        <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
        <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
        <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
        <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies}/>
        <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}/>
      </div>
    </>
  )
}

export default App
