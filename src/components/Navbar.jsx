import React,{useState} from 'react'
import MenuItems from './MenuItems'
import { HashLink as Link } from 'react-router-hash-link';
import { MenuOutlined } from '@mui/icons-material'
const Navbar = () => {
    const [active, setActive] = useState(false);
    const showMenu = () => setActive(!active);
  
    return (
      <div className="fixed w-full text-white flex justify-between p-4 item-center bg-black z-[20]">
        <div className="text-3xl font-bold text-center text-bold">
          <h1>Bilaal <span className="text-amber-300">Ishtiaq</span></h1>
        </div>
        <nav>
          <div className="absolute right-6 md:hidden top-6 scale-150">
            <MenuOutlined onClick={showMenu} className="scale-150 cursor-pointer" />
          </div>
          <ul className="hidden md:flex font-bold gap-8 pd-6 uppercase bg-black text-bold cursor-pointer">
            <li ><Link smooth to="/#aboutme" className="hover:text-amber-300">About Me</Link></li>
            <li ><Link smooth to="/#projects" className="hover:text-amber-300">Projects</Link></li>
            <li><Link smooth to="/#contact" className="hover:text-amber-300">Contact</Link></li>
          </ul>
          <MenuItems showMenu={showMenu} active={active} />
        </nav>
      </div>
    );
  };
  

export default Navbar