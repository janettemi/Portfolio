import React from 'react'
import NavLinks from './NavLinks'
import { MenuOverlay } from './MenuOverlay'
import { FaBarsStaggered} from 'react-icons/fa6'
import {AiOutlineCloseSquare} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion' ;
import logo from '../assets/logo.png' ;
import './navbar.css' ;
import { MdOutlineWorkOutline } from "react-icons/md";



export const linkItems=[
    {name:'Contact Me', path: '/contact'},
    {name:'Projects', path:'/projects'},
    {name:'About me', path:'/about'}
]

export const NavBar = () => {
    const [ isOpen,setIsOpen] =React.useState(false)
    
  return (
    <nav className=' z-50 px-8 py-7 text-white fixed top-0 left-0 right-0 bg-transparent'>
        <div className=' flex flex-wrap items-center justify-between'>
            <Link to={'/'} className=' font-bold text-3xl'>
                    <motion.div  
                    initial={{ opacity: 0, scaleY:0 }}
                    whileInView={{ opacity: 1, scaleY:1 }}
                    transition={{ delay: 0.5, duration: 1.5 }}
                    >
                        <img src={logo} alt=" my logo" className=' w-20 h-20'/>
                    </motion.div>
            </Link>
            <div className=' block md:hidden '>
                {isOpen ?
                 <AiOutlineCloseSquare  className=' text-5xl' onClick={()=>(setIsOpen(false))}/>
                 
                 : <FaBarsStaggered className=' text-3xl' onClick={()=>{setIsOpen(true)}}/>}
            </div>
            <div className=' bg-gradient-to-r  from-transparent via-slate-900 to-transparent rounded-lg p-5 hidden md:block'>
                <ul className=' flex flex-row space-x-8'>
                    {linkItems.map((item, index)=>(
                    
                        <li key={index} className=' nav-items font-medium'>
                            <NavLinks href={item.path} name={item.name}/>
                        </li>
                    ))}
                </ul>
            </div>
            <a href='mailto:ogunnaikejanettemitope@gmail.com' className=' hidden md:flex items-center gap-2 bg-gradient-to-br from-green-500 via-blue-500 to-blue-950 px-6 py-3 rounded-full mr-4 '>
                Hire Me
                <MdOutlineWorkOutline/>
            </a>
            
        </div>
        {isOpen ? <MenuOverlay links={linkItems}/> : null}
    </nav>
  )
}
