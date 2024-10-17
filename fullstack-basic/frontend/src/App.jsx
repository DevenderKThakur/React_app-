import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

function App() {

  const [jokes , setJokes] = useState([])

  useEffect(function () {
    axios.get("/api/jokes").then(function (response) {
      setJokes(response.data)
    }).catch(function (error) {
      console.log(error);
    })
  })

  return (
    <>
      <h1>FulStack Application</h1>
      <p>Jokes: {jokes.length}</p>

      {
        jokes.map(function (joke) {
          return (<div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>)
        })
      }
    </>
  )
}

export default App
