import React from 'react'
import NavLinks from './NavLinks'
import './menu.css';
import { MdOutlineWorkOutline } from "react-icons/md";



export const MenuOverlay = ({links}) => {
  return (
    <ul className=' flex items-center flex-col py-6 h-screen bg-slate-950'>
        {links.map((link, index)=>(
            <li key={index} className=' menu-items py-3'>
                <NavLinks href={link.path} name={link.name}/>
                
            </li>
        ))}
        <a href='mailto:tommywilson972@gmail.com' className=' flex items-center gap-2 bg-gradient-to-br from-green-500 via-blue-500 to-blue-950 px-6 py-3 rounded-full mr-4 '>
          Hire Me
          <MdOutlineWorkOutline/>
        </a>
    </ul>
  )
}
