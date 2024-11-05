import React from 'react'

import search_logo from "../assets/search_FILL0_wght300_GRAD0_opsz24.png"

import more_logo from "../assets/more_horiz_FILL0_wght300_GRAD0_opsz24.png"

const Sidebar = () => {
    const data = [
        {
          "name": "Naruto Uzumaki",
          "age": 17,
          "imgsrc": "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/10/naruto-1.jpg",
          "gender": "Male"
        },
        {
          "name": "Sasuke Uchiha",
          "age": 17,
          "imgsrc": "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/03/naruto-sasuke-uchiha-s-sharingan.jpg",
          "gender": "Male"
        },
        {
          "name": "Sakura Haruno",
          "age": 17,
          "imgsrc": "https://preview.redd.it/say-something-nice-about-sakura-haruno-v0-evtd46ntmq5d1.jpeg?auto=webp&s=d83339574adacb4d8c3819164a0fb19179375b75",
          "gender": "Female"
        },
        {
          "name": "Kakashi Hatake",
          "age": 31,
          "imgsrc": "https://i.pinimg.com/originals/33/f3/a5/33f3a5dd67a139e395705524bd142c87.jpg",
          "gender": "Male"
        },
        {
          "name": "Hinata Hyuga",
          "age": 17,
          "imgsrc": "https://preview.redd.it/say-something-nice-about-hinata-hyuga-v0-1ytvbvpzqb2d1.jpeg?auto=webp&s=0dad8e1bec8076e57db5a003a2b995663fda765b",
          "gender": "Female"
        },
        {
          "name": "Shikamaru Nara",
          "age": 17,
          "imgsrc": "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/04/Shikamaru-winking-(1).jpg",
          "gender": "Male"
        },
        {
          "name": "Rock Lee",
          "age": 17,
          "imgsrc": "https://images.squarespace-cdn.com/content/v1/564a7651e4b03f66f2c1023b/1524016242197-YNO0V15CVRSZ1S0B20F5/Rock_Lee_Part_I.png",
          "gender": "Male"
        },
        {
          "name": "Neji Hyuga",
          "age": 17,
          "imgsrc": "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/08/Neji-Using-Gentle-Fist-Against-The-White-Zetsu-Army.jpg",
          "gender": "Male"
        },
        {
          "name": "Gaara",
          "age": 17,
          "imgsrc": "https://preview.redd.it/8r52129jyfy71.jpg?width=640&crop=smart&auto=webp&s=1236535a26294d21bed8b85dac94767c4147ef1c",
          "gender": "Male"
        },
        {
          "name": "Temari",
          "age": 18,
          "imgsrc": "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/10/Temari-In-Naruto.jpg",
          "gender": "Female"
        },
        {
          "name": "Kiba Inuzuka",
          "age": 17,
          "imgsrc": "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/10/Naruto-Kiba-And-Akamaru.jpg",
          "gender": "Male"
        },
        {
          "name": "Choji Akimichi",
          "age": 17,
          "imgsrc": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/ddib72j-2a5e2f78-e1c6-4e68-9927-eb7b1aad1d97.png/v1/fit/w_300,h_512/choji_akimichi_cutin__ultimate_ninja_blazing__by_maxiuchiha22_ddib72j-300w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvODRkYzEzYjctYTJlNy00YjQ1LTgzZWMtMzExZTcyZTgyOTAwXC9kZGliNzJqLTJhNWUyZjc4LWUxYzYtNGU2OC05OTI3LWViN2IxYWFkMWQ5Ny5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.APUIMnLW2rjIb0MYDHjnd2EmhRYl97cy4YL62G3yQHY",
          "gender": "Male"
        },
        {
          "name": "Ino Yamanaka",
          "age": 17,
          "imgsrc": "https://i.redd.it/ifluwn2yf22d1.jpeg",
          "gender": "Female"
        },
        {
          "name": "Tenten",
          "age": 17,
          "imgsrc": "https://preview.redd.it/how-would-you-improve-tenten-as-a-character-v0-y2wtzodkauvc1.jpeg?auto=webp&s=bfaad0c1eb0ff9b770e0ed5a79d737b21da3e03b",
          "gender": "Female"
        },
        {
          "name": "Jiraiya",
          "age": 54,
          "imgsrc": "https://i.pinimg.com/originals/c1/73/7d/c1737d04cffd8badb9b7bd607dfbe305.jpg",
          "gender": "Male"
        },
        {
          "name": "Orochimaru",
          "age": 54,
          "imgsrc": "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/10/orochimaru-1.jpg",
          "gender": "Male"
        },
        {
          "name": "Tsunade",
          "age": 54,
          "imgsrc": "https://preview.redd.it/tsunade-is-so-underrated-v0-ro7g5pvng7wb1.jpg?width=640&crop=smart&auto=webp&s=72823fe3c9f5bf8ae4d7f8cddefcc367a819acf0",
          "gender": "Female"
        },
        {
          "name": "Itachi Uchiha",
          "age": 21,
          "imgsrc": "https://i.pinimg.com/originals/df/c9/be/dfc9be1223cc777f9cd136f1884c83e9.jpg",
          "gender": "Male"
        },
        {
          "name": "Kisame Hoshigaki",
          "age": 32,
          "imgsrc": "https://wordsinspiration.com/wp-content/uploads/2022/04/the-best-kisame-hoshigaki-quotes.jpg",
          "gender": "Male"
        },
        {
          "name": "Pain (Nagato)",
          "age": 35,
          "imgsrc": "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/05/Untitled-design-(34).jpg",
          "gender": "Male"
        }
    ]
      
  return (
    <div className='w-96 rounded-xl p-4 shadow-2xl' style={{
        height : "520px"
    }}>
        <div className='flex flex-row justify-between items-center'>
            <p className='text-lg font-bold'>Naruto</p>
            <img src={search_logo} alt="Search" />
        </div>
        <div className='flex flex-col overflow-y-scroll overflow-x-hidden mt-2' style={{
            maxHeight : "440px"
        }}>
            {data.map((item, index) => (
                <div key={index} className='flex flex-row items-center justify-between p-3 hover:bg-content_color'>
                    <img src={item.imgsrc} alt={item.name} className='w-12 h-12 rounded-full object-cover object-center' />
                    <div className='flex-1 ml-4'>
                        <p className='font-semibold'>{item.name}</p>
                        <p className='text-sm text-gray-600'>{item.gender}, {item.age}</p>
                    </div>
                    <img src={more_logo} alt="More options" />
                </div>
            ))}
        </div>
    </div>
);
}

export default Sidebar
