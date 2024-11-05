import React from 'react'

const RightSidebar = () => {
  return (
    <div className='shadow-2xl p-5 flex flex-col justify-between items-center rounded-2xl' style={{
        width: "367px" , 
        maxHeight: "740px" , 
      }}>
      <img src="https://i.pinimg.com/originals/33/f3/a5/33f3a5dd67a139e395705524bd142c87.jpg" alt="" 
      className='w-52 h-52 object-cover object-center rounded-full mb-5'/>
      <p className='font-semibold text-2xl'>Kakashi Hatake</p>
      <div>
        content...
      </div>
      <button className='bg-hover_color font-semibold px-6 py-2 rounded-2xl text-sm mt-10'>Show all Information</button>
    </div>
  )
}

export default RightSidebar
