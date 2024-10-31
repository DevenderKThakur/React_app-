import { useState } from 'react'
import Card from './components/Card'


function App() {
  const jujtsuKaisenCharaterData = [
    {
        "id": 1,
        "name": "Satoru Gojo",
        "imgsrc": "https://wallpapers.com/images/hd/chibi-gojo-pfp-y94l9od6ofeaco23.jpg"
    },
    {
        "id": 2,
        "name": "Sukuna",
        "imgsrc": "https://i.pinimg.com/originals/23/64/a4/2364a47cccfd09cc0f23bbce556e9775.jpg"
    },
    {
        "id": 3,
        "name": "Yuta Okkotsu",
        "imgsrc": "https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/03/rika-hugs-yuta-from-behind-in-jujutsu-kaisen.jpg"
    },
    {
        "id": 4,
        "name": "Megumi Fushiguro",
        "imgsrc": "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/12/megumi-in-jujutsu-kaisen.jpg"
    },
    {
        "id": 5,
        "name": "Toji Fushiguro",
        "imgsrc": "https://www.dexerto.com/cdn-image/wp-content/uploads/2023/07/06/jujutsu-kaisen-season-2.jpg?width=1200&quality=60&format=auto"
    },
    {
        "id": 6,
        "name": "Maki Zenin",
        "imgsrc": "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/01/maki-zenin-2.jpg"
    },
    {
        "id": 7,
        "name": "Suguru Geto",
        "imgsrc": "https://butwhytho.net/wp-content/uploads/2023/09/Suguru-Geto-But-Why-Tho-1.jpg"
    },
    {
        "id": 8,
        "name": "Kinji Hakari",
        "imgsrc": "https://i.pinimg.com/originals/a2/e6/99/a2e699f13b7b24508af827720ea2f3e7.jpg"
    },
    {
        "id": 9,
        "name": "Kento Nanami",
        "imgsrc": "https://www.looper.com/img/gallery/kento-nanamis-powers-from-jujutsu-kaisen-explained/intro-1632713276.jpg"
    },
    {
        "id": 10,
        "name": "Aoi Todo",
        "imgsrc": "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/02/aoi-todo.jpg"
    }
  ]

  return (
  <>
    <div className="flex gap-8 flex-wrap justify-center items-center">
      {
        jujtsuKaisenCharaterData.map((character)=>{
          return <Card key={character["id"]} name={character["name"]} profileImg={character["imgsrc"]}/>
        })
      }
    </div>
  </>
  )
}

export default App
