import React, { useState } from "react"
import CounterApp from "./components/CounterApp"
import FormValidation from "./components/formValidation"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import axios from "axios"


function App() {

  const [data , setdata] = useState([])

  const getImageData = async function () {
    try {
      const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=10")

      console.log(response.data);
      

      setdata(response.data)
      
    }catch(error) {
      console.log(error);
    }

  }


  const userdata = [
      {
        "name": "Alice Johnson",
        "age": 28,
        "city": "San Francisco",
        "profession": "Data Scientist",
        "image": "https://example.com/images/alicejohnson.jpg"
      },
      {
        "name": "Michael Smith",
        "age": 35,
        "city": "Chicago",
        "profession": "Graphic Designer",
        "image": "https://example.com/images/michaelsmith.jpg"
      },
      {
        "name": "Sophia Brown",
        "age": 42,
        "city": "Los Angeles",
        "profession": "Marketing Manager",
        "image": "https://example.com/images/sophiabrown.jpg"
      },
      {
        "name": "David Lee",
        "age": 26,
        "city": "Austin",
        "profession": "Software Developer",
        "image": "https://example.com/images/davidlee.jpg"
      },
      {
        "name": "Emma Martinez",
        "age": 31,
        "city": "Miami",
        "profession": "Photographer",
        "image": "https://example.com/images/emmamartinez.jpg"
      }
    ]
  
  return (
    <>
      <div className='h-fullscreen bg-red-600 px-4 py-4 text-white text-center hover:bg-violet-600'>
        <h1>This is a heading in <span className='underline cursor-pointer'>Tailwind</span></h1>
      </div>
      <CounterApp/>
      <FormValidation/>
      <Navbar/>
      <div>
        {
          userdata.map(function (item , index) {
            return <Card key={index} firstname={item.name} city={item.city} age={item.age} image={item.image} profession={item.profession}/>
          })
        }
      </div>

      <div className="p-5">
        <button onClick={getImageData} className="mt-5 mb-5 bg-teal-700 text-white font-semibold text-2xl px-6 py-5 rounded">Get Data</button>
        {
          data.map(function (item , index) {
            return <div key={index} className="bg-gray-50 text-black flex items-center justify-betweem w-full px-7 py-6 rounded mb-3">
              <img src={item.url} alt="imgage" />
            </div>
          })
        }
      </div>

    </>
  )
}

export default App
