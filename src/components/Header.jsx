//import React from 'react'
import emoji from '../assets/emoji.png'
import { TypeAnimation } from 'react-type-animation';
//import { Link } from 'react-router-dom';
import { MdOutlineCloudDownload } from "react-icons/md";
import { motion } from 'framer-motion';




export const Header= () => {
  const downloadFile=()=>{
      // Create an anchor element dynamically
      const link = document.createElement('a');
      link.href = "https://www.canva.com/design/DAG6k9O9B2A/cAP2LOTYiIFxbgGjDAgO0g/edit?utm_content=DAG6k9O9B2A&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton";
      link.download = "https://www.canva.com/design/DAG6k9O9B2A/cAP2LOTYiIFxbgGjDAgO0g/edit?utm_content=DAG6k9O9B2A&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton";

      // Simulate a click on the anchor element to initiate download
      link.click();

  }
  return (
    <section className=' text-white flex flex-col md:flex-row justify-between py-[30px]'>
        <motion.div 
        initial={{opacity:0, y:"70%"}}
        whileInView={{opacity:1, y:"0%"}}
        viewport={{once:true}}
        transition={{duration:2.5, type:"spring"}}
        className=' w-full md:w-1/2 text-center md:text-left '>
            <h1 className='  text-4xl md:text-6xl font-bold text-white  mb-4'>
                <span className=' 
                text-transparent 
                bg-clip-text bg-gradient-to-r
              from-green-500 via-blue-500 to-blue-950'>Hello, i&apos;m </span>
              <br />
                <TypeAnimation
                  sequence={[
                    'Janet Temitope',
                    2000,
                    'a Software developer 💻👨‍💻',
                    2000,
                    "a Technical Writer 📝",
                    2000
                  ]}
                  wrapper="span"
                  speed={20}
                  style={{ display:"flex", flexWrap:"wrap" }}
                  repeat={Infinity}
                />
            </h1>
            <p className=' text-gray-400 text-sm  mb-6'>
            Hello, and thank you for visiting my portfolio website. 
            I'm  a passionate Web developer 
            on a journey to turn ideas into interactive and user-friendly web experiences.
            </p>
            <div>
              <button onClick={downloadFile} className=' bg-transparent text-white px-1 py-1 rounded-full bg-gradient-to-r
              from-green-500 via-blue-500 to-blue-950 hover:bg-gradient-to-tr '>
                <span className='  bg-slate-950 rounded-full px-5 py-2 flex items-center gap-2 '>
                  Download CV
                  <MdOutlineCloudDownload/>
                </span>
              </button>
            </div>
        </motion.div>
        <motion.div 
        initial={{opacity:0, scaleX:0}}
        whileInView={{opacity:1, scaleX:1}}
        viewport={{once:true}}
        transition={{duration:2.0, type:"spring"}}
        className=' rounded-full h-64 w-64 mx-auto mt-3 md:mt-0 md:mx-0 bg-slate-700 '>
            <img src={emoji} alt=" emoji character"  className=' w-64 h-64'/>         
        </motion.div>
    </section>
  )
}
