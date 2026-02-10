import React from 'react';
import { ProjectCard } from './ProjectCard';
import image1 from '../assets/project1.jpeg' ;
import image2 from '../assets/project2.jpeg';
import image3 from '../assets/project3.jpeg';
import image4 from '../assets/project4.jpeg';
import image5 from '../assets/project5.jpeg';
import image6 from '../assets/project6.jpeg';
// import image7 from '../assets/project7.png';
// import image8 from '../assets/project8.png'
// import campPrj from "../assets/camp-image.jpg";
// import theProfast from "../assets/theprofast.jpg";
// import natureborn from "../assets/natureborn.jpg"
import {  SiMui} from 'react-icons/si';
// import {AiFillHtml5} from 'react-icons/ai'
import { BiLogoCss3 ,BiLogoTailwindCss,BiLogoReact} from 'react-icons/bi';
import { SiNextdotjs } from "react-icons/si";
import { useLocation } from 'react-router-dom';






export const ProjectSection = () => {
    const { pathname} = useLocation()
   

    const Project_Data = [
         {
            // id:600,
            path: image1,
            title: 'Kontract landing page',
            liveURL:'https://kontract-wine.vercel.app/',
            repo:"https://github.com/janettemi/Kontract-",
            description: 'This a page that has landing page and dashboard page',
            stack:[
                {name:'Next.js', icon:<BiLogoReact className=' text-blue-600 text-xl '/>},
                {name:'Tailwind',icon:<BiLogoCss3 className=' text-blue-600 text-xl'/>},
                {name:'Material UI', icon:<SiMui className=' text-blue-600 text-xl'/>}
            ],
            isPublic:true

        },
        {
            // id:100,
            path: image2,
            title: 'Kontract Admin Dashboard',
            liveURL:'https://kontract-wine.vercel.app/dashboard',
            repo:'https://github.com/janettemi/Kontract-',
            description: 'This is the admin dashboard page for the kontract project which is a wine ecommerce website',
            stack:[
                {name:'Next js', icon:<SiNextdotjs className=' text-blue-600 text-xl '/>},
                {name:'Mui', icon:<SiMui className=' text-blue-600 text-xl'/>},
                
            ],
            isPublic: true
        },
        {
            // id:100,
            path: image3,
            title: 'Tap admin dashboard',
            //liveURL:'https://theprofast.netlify.app/',
            //repo:'https://github.com/WilsonTomisin',
            description: 'This is the admin dashboard page for the Tap project ',
            stack:[
                {name:'React', icon:<SiNextdotjs className=' text-blue-600 text-xl '/>},
                {name:'Mui', icon:<SiMui className=' text-blue-600 text-xl'/>},
                
            ],
            isPublic: true
        },
        {
            // id:200,
            path: image4,
            title: 'Construction Co Landing page',
            // liveURL:'https://kuttinedgeresources.com/',
            // repo:'https://github.com/WilsonTomisin',
            description: 'A construction company landing page with a modern and sleek design. It is a pixel perfect design that is fully responsive and mobile friendly.',
            stack:[
                {name:'Next.js', icon:<BiLogoReact className=' text-blue-600 text-xl '/>},
                {name:'Tailwindcss',icon:<BiLogoTailwindCss className=' text-blue-300 text-xl'/>},
                
            ],
            isPublic:false
        },
        {
            // id:300,
            path:image5,
            title: 'Intuitive HMS dashboard',
            // liveURL:'https://camp-site-pied.vercel.app/',
            // repo:'https://github.com/WilsonTomisin/camp-site',
            description: 'A hospital management system dashboard with a modern and sleek design. It is a pixel perfect design that is fully responsive and mobile friendly.',
            stack:[
                {name:'React', icon:<BiLogoReact className=' text-blue-600 text-xl '/>},
                {name:'Tailwindcss',icon:<BiLogoTailwindCss className=' text-blue-300 text-xl'/>},
                
            ],
            isPublic:false
        },
        
        {
            // id:800,
            path: image6,
            title: ' Tela payment page',
            liveURL:'https://tela-payment-page.vercel.app/',
            // repo:'https://github.com/WilsonTomisin/todo-app-challenge',
            description: 'Tela is a payment page with a modern and sleek design. It is a pixel perfect design that is fully responsive and mobile friendly.',
            stack:[
                {name:'Next.js', icon:<BiLogoReact className=' text-blue-600 text-xl '/>},
                {name:'Tailwindcss',icon:<BiLogoTailwindCss className=' text-blue-300 text-xl'/>},
                
            ],
            isPublic:true
        }
    ]
   
  return (
    <div >
        <h1 className=' text-center text-4xl font-bold text-white mb-20'>My Projects</h1>
        <div 
        className={ ` ${pathname !== "/projects" ? 
        " flex items-center gap-5 overflow-x-auto overflow-y-hidden mx-auto max-w-[900px] scrollbar  " 
        :" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        }`}
        >
            {/* <span className=' flex gap-5 items-center card-slider'>   */}
            {Project_Data.map((project, index)=>{

                return(
                    <>
                        <ProjectCard url={project.path} title={ project.title}
                        description={project.description}
                        stack={project.stack}
                        liveURL={project.liveURL}
                        repo={project.repo}
                        key={index}
                        isPublic={project.isPublic}
                        // cardWidth={}
                        />
                    </>
                )
            })}
           {/* </span> */}
        </div>
        
    </div>
  )
}
