import React , { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MyApp () {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

const reactElement = {
  type : 'a' , 
  props : {
    href : 'https://google.com' , 
    target : '_blank' 
  },
  children : 'Click me to visit google'
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const thirdElement = React.createElement(
  'a' , 
  {
    href : 'https://amazon.in' ,
    target : "_blank"
  },
  'Click this to visit amazon'
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
)
