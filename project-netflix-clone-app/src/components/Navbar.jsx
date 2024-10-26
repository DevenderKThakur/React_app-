import React, { useEffect, useState } from 'react'

const Navbar = () => {

    const [show , handleShow] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

  return (
    <div className={`${show === false ? 'flex fixed top-0 w-full p-5 justify-between h-16 z-10' : 'flex fixed top-0 w-full p-5 justify-between h-16 z-10 bg-zinc-950 transition-all ease-in '}`}>

      <img 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png" 
      alt="Netflix Logo" 
      className='w-20 object-contain fixed left-5'/>

      <img src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg" alt="profile-img" 
      className='w-8 object-contain fixed right-5'/>

    </div>
  )
}

export default Navbar
