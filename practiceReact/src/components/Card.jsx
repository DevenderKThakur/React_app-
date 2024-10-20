import React from 'react'

const Card = ({firstname , city , age ,image ,profession}) => {
  return (
    <div className='inline-block p-6 bg-black text-white text-center rounded mt-5 mr-4 ml-1'>
    <img src={image} alt=''/>
      <h1>{firstname}</h1>
      <h2>{city} , {age}</h2>
      <h2>{profession}</h2>
      <button>Add Friend</button>
    </div>
  )
}

export default Card
