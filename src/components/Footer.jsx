import React from 'react';
import logo from '../assets/logo.png';
import { BsGithub,BsLinkedin,BsMedium} from 'react-icons/bs';
import { Link } from 'react-router-dom';


export const Footer = () => {
  return (
    <footer className=' h-full  border-t-2 border-dashed pb-7 text-white border-white'>
        <div className=' flex flex-col md:flex-row items-center justify-between  py-4 '>
            <aside className=' text-base  '>
              <img src={logo} alt="my logo" className=' h-14 w-14 mb-5' />  
            </aside>
              
            
            <aside className=' '>
                <div className=' mt-4'>
                  <h2 className=" text-center md:text-left mb-2">Social Links</h2>
                  <ul className=' flex items-center justify-center gap-4 cursor-pointer '>
                    <Link className=' flex items-center gap-2'  to={`https://github.com/janettemi`}>
                      <BsGithub/>
                      <span>Github</span>
                    </Link>
                    <Link className=' flex items-center gap-2' to={`https://www.linkedin.com/in/ogunnaike-janet-1802542a2/`}>
                      <BsLinkedin/>
                      <span>Linkedin</span>
                    </Link>
                    <Link className=' flex items-center gap-2'  to={`https://medium.com/@ogunnaikejanettemitope`}>
                      <BsMedium/>
                      <span>Medium</span>
                    </Link>
                  </ul>
                </div>
            </aside>
        </div>
        <div className=' text-center '>
          Copyright &copy;{new Date().getFullYear()}
          <p className=' text-xs'>All Rights Reserved</p>
        </div>
    </footer>
  )
}
