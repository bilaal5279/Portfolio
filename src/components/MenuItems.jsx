import { Close } from '@mui/icons-material'
import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
const MenuItems = ({showMenu,active}) => {
  const gradientStyle = {
    background:
      'linear-gradient(to right, #020202, #040c16, #020202)',
    color: '#fff',
  };
  return (
    <div className='text-bold z-10'> 
            <ul style={gradientStyle} className={active ?  ' text-bold flex-col flex items-center fixed inset-0 left-1/4 uppercase  bg-opacity-30 	bg-blur-20 gap-8 p-8 justify-center md:hidden'  : 'hidden' }>
            <Close onClick={showMenu} className="cursor-pointer"/>
            <li onClick={showMenu} ><Link smooth to="/#aboutme" className="hover:text-amber-300 font-bold">About Me</Link></li>
            <li  onClick={showMenu} ><Link smooth to="/#projects" className="hover:text-amber-300 font-bold">Projects</Link></li>
            <li onClick={showMenu}><Link smooth to="/#contact" className="hover:text-amber-300 font-bold">Contact</Link></li>
          </ul>
          </div>
  )
}

export default MenuItems