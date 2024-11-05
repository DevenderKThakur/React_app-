import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import RightSidebar from './components/RightSidebar'


function App() {
  
  return (
    <div className='w-full h-screen bg-grey p-4 m-0'>
        <Navbar/>
        <div className='mt-10 flex flex-row justify-evenly items-start'>
          <Sidebar/>
          <Content/>
          <RightSidebar/>
        </div>
    </div>
  )
}

export default App
