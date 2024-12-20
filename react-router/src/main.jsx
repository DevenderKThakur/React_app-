import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import User from './components/User.jsx'
import GitHub, { gitHubInfo } from './components/GitHub.jsx'


const router = createBrowserRouter([
  {
    path:'/' , 
    element : <App/>,
    children : [
      {
        path:'' ,
        element:<Home/>
      },
      {
        path:'about' ,
        element:<About/>
      },
      {
        path:'contact' ,
        element:<Contact/>
      },
      {
        path:'user/:userid' ,
        element:<User/>
      },
      {
        path:'github' ,
        element:<GitHub/>,
        loader: gitHubInfo
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
