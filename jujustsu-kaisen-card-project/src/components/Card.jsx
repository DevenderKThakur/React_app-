import React from "react"

export default function Card ({name , profileImg}) {
  function spaceRemover(str) {
    if (str.length > 14) {
      return str.split(" ")
    }
    return str
  }
  return (
    <div className="w-52 h-96 m-4 shadow-2xl rounded-md">
      <div className="w-52 h-3/5">
        <img 
        src={profileImg}
        className="w-full h-full object-cover object-center"/>
      </div>
      <div>
        <h1 className="m-1 font-semibold text-xl">{spaceRemover(name)}</h1>
        <div className="p-3 w-full min-h-5">
          <img src="https://wallpapers.com/images/hd/chibi-gojo-pfp-y94l9od6ofeaco23.jpg"
          className="w-8 h-8 object-cover object-center rounded-full inline-block mr-2"/>
          <p className="text-zinc-500 font-semibold text-md inline-block">2 mutual Friend</p>
        </div>
        <button className="m-1 bg-blue-500 text-white font-semibold py-2 px-4 ml-3">More Info...</button>
      </div>
    </div>
  )
}