import React,{ useRef} from 'react' ;
import './button.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
//import { SiLinktree } from "react-icons/si";
import { motion } from 'framer-motion';


export const EmailSection = () => {

  const notify = () => toast.success("Message sent!",{
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

  const form = useRef();

  const [formData, setformData] = React.useState({
    userName: '',
    message: '',
    subject:''
  })

  const handleChange = (e)=>{
    const {name,value} = e.target
    setformData({
        ...formData,
        [name]: value
    })
  }

  const handleSubmit = (event)=>{
      event.preventDefault();
      emailjs.sendForm( 'service_lnijlyj' ,'template_d9kephr' , form.current, 'GOJqISuGHm-9GaRXs')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      // console.log('sent');
      notify()
      setformData({...formData,message:'',userName:'',subject:''})
    }

  return (
    <section className=' flex flex-col md:flex-row justify-between py-24 relative'>
      <div className=' bg-gradient-radial from-green-700 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-7 transform -translate-x-1/2 '>{' '}</div>
      <motion.div 
      initial={{opacity:0, x:"-70%"}}
      whileInView={{opacity:1, x:"0%"}}
      viewport={{once:true}}
      transition={{duration:1.5, type:"spring"}}
      className=' w-full md:w-1/2 pr-10'>
        <h1 className=' text-3xl font-bold text-white'>Contact Me</h1>
        <p className='  py-3 text-base text-gray-400'>
          I&apos;m currently loooking for new
          oppoturnities.My inbox is always open.Whether you want to reach out or just
          say hi, i&apos;ll get back to you.
        </p>
        {/* <div className=' text-white text-2xl flex items-center w-1/2 justify-between'>
          <Link to={'https://linktr.ee/WilsonTomisin'} className=' flex gap-2 items-center '>
            <SiLinktree/>
            <span className=' underline'>linktree</span>  
          </Link>

          
        </div> */}
      </motion.div>
      <motion.div 
      initial={{opacity:0, y:"70%"}}
      whileInView={{opacity:1, y:"0%"}}
      viewport={{once:true}}
      transition={{duration:1.5, type:"spring"}}
      className=' w-full md:w-1/2 py-20 md:py-0'>
          <form ref={form} onSubmit={handleSubmit} className=' text-white flex flex-col gap-4'>
                  <div className=' mb-5'>
                    <label htmlFor="userName" className=' font-semibold'>Name</label>
                    <br/>
                    <input type="text" name='userName'
                     value={formData.userName} required onChange={handleChange}
                     placeholder='your name' className=' px-2 py-1 w-full bg-slate-700 border-2 border-slate-500'/>
                  </div>
                  <div className=' mb-5'>
                    <label htmlFor="subject"  className=' font-semibold'>Subject</label>
                    <br/>
                    <input type="text" name='subject' 
                    value={formData.subject} required onChange={handleChange}
                    placeholder='To say hello?' className=' px-2 py-1 w-full bg-slate-700 border-2 border-slate-500'/>
                  </div>
                  <div>
                    <label htmlFor="message"  className=' font-semibold'>Message</label>
                    <br />
                    <textarea name="message" value={formData.message} onChange={handleChange}
                    required rows="7" placeholder='send a message and please include how i can reach out also....'
                     className=' w-full p-4  bg-slate-700 border-2 border-slate-500' ></textarea>
                  </div>
                  <div className='wrapper'>
                    <button type='submit' className=' send-btn w-full px-4 py-2 font-semibold rounded-md'>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Send message
                    </button>
                  </div>
          </form>
          <ToastContainer/>
      </motion.div>
    </section>
  )
}
