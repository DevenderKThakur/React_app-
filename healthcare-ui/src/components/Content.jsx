import React from 'react'

const Content = () => {
  return (
    <div className='flex-1 mx-10 p-4 rounded-xl shadow-2xl'>
      <h1 className='font-bold text-xl mb-5'>Combat Power</h1>
      <img src="https://preview.redd.it/player-statistics-ch-209-updated-v0-u71wasf5iima1.png?width=2048&format=png&auto=webp&s=669f5cbb0578b2907583c263ec862282c4fe80fe" alt="" 
      className='w-full h-48 object-contain object-center mb-5'/>
      <div className='w-full flex flex-row'>
        <div className='p-4 rounded-xl' style={{
            width : "228px" , 
            height : "242px" , 
            backgroundColor : "#E0F3FA"
        }}>
            <img src="https://preview.redd.it/say-something-nice-about-sakura-haruno-v0-evtd46ntmq5d1.jpeg?auto=webp&s=d83339574adacb4d8c3819164a0fb19179375b75" alt="" 
            className='w-24 h-24 object-cover object-center rounded-full'/>
            <p className='mt-3'>Respiratory Rate </p>
            <p className='font-bold text-3xl mb-5'>20bpm</p>
            <p>Noraml</p>
        </div>
        <div 
        style={{
            width : "228px" , 
            height : "242px" , 
            backgroundColor : "#FFE6E9"
        }} className='mx-5 p-4 rounded-xl'>
            <img src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/03/naruto-sasuke-uchiha-s-sharingan.jpg" alt="" 
            className='w-24 h-24 object-cover object-center rounded-full'/>
            <p className='mt-3'>Temperature</p>
            <p className='font-bold text-3xl mb-5'>96.8 F</p>
            <p>Noraml</p>
        </div>
        <div style={{
            width : "228px" , 
            height : "242px" , 
            backgroundColor : "#FFE6F1"
        }} className='p-4 rounded-xl'>
            <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/10/naruto-1.jpg" alt="" 
            className='w-24 h-24 object-cover object-center rounded-full'/>
            <p className='mt-3'>Heart Rate </p>
            <p className='font-bold text-3xl mb-5'>78 bpm</p>
            <p>Lower than Average</p>
        </div>
      </div>
    </div>
  )
}

export default Content
