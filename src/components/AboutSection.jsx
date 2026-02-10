import React,{ useState} from 'react'
import portfolio from '../assets/portfolio.png'
import './aboutsection.css';
import { motion } from 'framer-motion';
import {GiClick} from "react-icons/gi" ;





const boxVariant={

  fadeIn:{
    x:0,
    opacity:1,
    transition:{
      when:'beforeChildren',
      staggerChildren:0.3
    }
  },
  hidden:{
    x:-1000,
    opacity:0.5,
  }
}
const boxItems ={
  fadeIn:{
    x:0,
    opacity:1,
    scale: 1
    
    
  },
  hidden:{
    x:-100,
    opacity:0,
    scale:0.25
  }
}


const tabs = [
  {name:'Skills',
   content:[
    <motion.ul variants={boxVariant} initial='hidden' animate='fadeIn'>
      <motion.li variants={boxItems} className=' bg-green-500 cursor-pointer duration-100 transition-colors ease-in-out mb-3 font-medium text-xs px-4 py-1 rounded-lg text-slate-950'>React.js</motion.li>
      <motion.li variants={boxItems} className=' bg-green-500 cursor-pointer duration-100 transition-colors ease-in-out mb-3 font-medium text-xs px-4 py-1 rounded-lg text-slate-950'>Next.js</motion.li>
      <motion.li variants={boxItems} className=' bg-green-500 cursor-pointer duration-100 transition-colors ease-in-out mb-3 font-medium text-xs px-4 py-1 rounded-lg text-slate-950'>Node.js</motion.li>
      <motion.li  variants={boxItems} className=' bg-green-500 cursor-pointer duration-100 transition-colors ease-in-out mb-3 font-medium text-xs px-4 py-1 rounded-lg text-slate-950'>Express js</motion.li>
      <motion.li  variants={boxItems} className=' bg-green-500 cursor-pointer duration-100 transition-colors ease-in-out mb-3 font-medium text-xs px-4 py-1 rounded-lg text-slate-950'>Nest js</motion.li>
      <motion.li  variants={boxItems} className=' bg-green-500 cursor-pointer duration-100 transition-colors ease-in-out mb-3 font-medium text-xs px-4 py-1 rounded-lg text-slate-950'>JWT Authentication</motion.li>
      <motion.li  variants={boxItems} className=' bg-green-500 cursor-pointer duration-100 transition-colors ease-in-out mb-3 font-medium text-xs px-4 py-1 rounded-lg text-slate-950'>Mongo DB</motion.li>
      <motion.li variants={boxItems} className=' bg-green-500 cursor-pointer duration-100 transition-colors ease-in-out mb-3 font-medium text-xs px-4 py-1 rounded-lg text-slate-950'>Javascript</motion.li>
      <motion.li variants={boxItems} className=' bg-green-500 cursor-pointer duration-100 transition-colors ease-in-out mb-3 font-medium text-xs px-4 py-1 rounded-lg text-slate-950'>Typescript</motion.li>
      <motion.li  variants={boxItems} className=' bg-green-500 cursor-pointer duration-100 transition-colors ease-in-out mb-3 font-medium text-xs px-4 py-1 rounded-lg text-slate-950'>Version control(GIT)</motion.li>
      <motion.li variants={boxItems} className=' bg-green-500 cursor-pointer duration-100 transition-colors ease-in-out mb-3 font-medium text-xs px-4 py-1 rounded-lg text-slate-950'>Framer motion</motion.li>
      <motion.li  variants={boxItems} className=' bg-green-500 cursor-pointer duration-100 transition-colors ease-in-out mb-3 font-medium text-xs px-4 py-1 rounded-lg text-slate-950'>Tailwind Css</motion.li>
    </motion.ul>
   ]},
  {name:'Education',
   content: [
      <motion.ul className=' flex-1' variants={boxVariant} initial='hidden' animate='fadeIn'>
        <motion.li variants={boxItems} className=' bg-green-500 cursor-pointer duration-100 transition-colors ease-in-out mb-3 font-medium text-xs  px-4 py-1 rounded-lg text-slate-950'>National open univ of nigeria</motion.li>
        <motion.li variants={boxItems} className=' bg-green-500 cursor-pointer duration-100 transition-colors ease-in-out mb-3 font-medium text-xs  px-4 py-1 rounded-lg text-slate-950'>Bsc in computer science</motion.li>
        {/* <motion.li variants={boxItems} className=' bg-green-500 cursor-pointer duration-100 transition-colors ease-in-out mb-3 font-semibold text-sm hover:bg-white px-4 py-1 rounded-lg text-slate-950'>Complete Web developer course by Kalob Taulin</motion.li> */}
      </motion.ul>
   ]

  },
  { name:'Experience',
    content:[
      <motion.ul variants={boxVariant} initial='hidden' animate='fadeIn'>
        {/* <motion.li variants={boxItems} className=' bg-green-500 cursor-pointer mb-3 font-semibold text-sm duration-100 transition-colors ease-in-out  hover:bg-white px-4 py-1 rounded-lg text-slate-950'>HNG intern 2023</motion.li> */}
        <motion.li variants={boxItems} className=' bg-green-500 cursor-pointer mb-3 font-medium text-xs duration-100 transition-colors ease-in-out  px-4 py-1 rounded-lg text-slate-950'>Lead Developer @Konctract.com</motion.li>
        <motion.li variants={boxItems} className=' bg-green-500 cursor-pointer mb-3 font-medium text-xs duration-100 transition-colors ease-in-out  px-4 py-1 rounded-lg text-slate-950'>Web developer at intuitive health</motion.li>
        <motion.li variants={boxItems} className=' bg-green-500 cursor-pointer mb-3 font-medium text-xs duration-100 transition-colors ease-in-out  px-4 py-1 rounded-lg text-slate-950'>Web developer at tela</motion.li>
        <motion.li variants={boxItems} className=' bg-green-500 cursor-pointer mb-3 font-medium text-xs duration-100 transition-colors ease-in-out  px-4 py-1 rounded-lg text-slate-950'>Web developer at landscale</motion.li>

      </motion.ul>
    ]
  }
]



export const AboutSection = () => {
  const [tabButton, setTabButton] = useState(null)
  

  React.useEffect(()=>{
      console.log(tabButton);
  },[tabButton])
  return (
    <section className=' flex flex-col md:flex-row  justify-between py-32'>
        <motion.div 
        initial={{opacity:0, scaleY:0}}
        whileInView={{opacity:1, scaleY:1}}
        viewport={{once:true}}
        transition={{duration:1.5, type:"spring"}}
        className=' h-auto w-full md:w-1/2'>
            <img src={portfolio} alt='my-porfile-picture'  className=' cursor-pointer h-auto w-full mx-auto md:w-4/6 duration-500 transition-all ease-in-out rounded-lg hover:scale-95'/>
        </motion.div>
        <motion.div 
        initial={{opacity:0, y:"70%"}}
        whileInView={{opacity:1, y:"0%"}}
        viewport={{once:true}}
        transition={{duration:1.5, type:"spring"}}
        className=' w-full md:w-1/2'>
          <h2 className=' my-4 text-3xl font-semibold text-white text-left '>About Me</h2>
            <p className=' text-white text-sm leading-9 text-left md:text-lg'>
              Web development is where my creative and analytical sides converge.
              I find joy in crafting visually appealing and functional websites 
              that not only meet the user's needs but also leave a lasting impression.
              Whether it's coding responsive layouts, enhancing user interfaces
              with smooth animations, or diving into the world of web accessibility, 
              I'm always eager to learn and grow.This portfolio is a showcase of my projects,
              skills, and dedication to my craft. Take a tour through the projects I've worked on .
            </p>
            <div className=' w-full flex flex-col md:flex-row justify-start  md:justify-between  mt-8  text-slate-600'>

              {
                tabs.map((tab, index)=>{
                  const active = tab.name === tabButton
                  const activeBtn = active ? ' text-white  ' : ' '
                  return(
                      <div className=' flex flex-col' key={index}>
                          <button value={tab.name}
                          onClick={(e)=>setTabButton(e.currentTarget.value)}
                          className={`skills-btn mr-3 font-semibold px-3 flex items-center gap-2  ${activeBtn}`}
                          >
                            {tab.name}
                            <GiClick/>
                          </button>
                          <div className=' mt-5 '>
                            {active && tab.content}
                          </div>
                      </div>
                  )
                })
              }
             
            </div>
        </motion.div>
    </section>
  )
}
