import React, { useEffect, useState } from 'react';
import svg from './assets/undraw_personal_email_re_4lx7.svg';
import {BiUser} from 'react-icons/Bi';
import {MdEmail} from 'react-icons/Md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


const Contact = ({darkmode}) => {
    
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [text,setText] = useState("");
    const form = useRef()
    
    const nameHandler=(e)=>{
        setName(e.target.value)
    }
    const emailhandler=(e)=>{
        setEmail(e.target.value)
    }
    const textHandler=(e)=>{
        setText(e.target.value)
    }
    const [alertcolor,setAlertcolor]=useState("");
    useEffect(()=>{
        if(!darkmode){
            setAlertcolor("light")
        }else{
            setAlertcolor("dark")
        }
    },[darkmode])
    const submit = (event) =>{
        event.preventDefault();  
        setName("");
        setEmail("");
        setText("");
        if(name==="" || email==="" || text===""){
            toast.error('Fill all the req fields', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: alertcolor,
                });
        }else{
            toast.success('message sent sucessfully', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: alertcolor,
                });;
            // email.js for contact form
            emailjs.sendForm('service_5j2web6', 'template_pkwfg8e', form.current, 'JnyNkK0qdyyrIgRuX')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        }
    }

	return (
        <div>
            <h1 className='text-center my-[70px] font-bold text-3xl md:text-4xl dark:text-white'>contact form</h1>
            <div className='md:flex md:mb-0 mb-10 justify-center gap-32'>
            <div className='my-[60px] ml-5'>
                <img src={svg} alt="" className='w-[260px] md:w-[500px]' />
             </div>
             <div className='mt-3 w-[260px] md:w-[500px] mx-auto'>
                <form ref={form}>
                <div className='input'>
                    <BiUser className='absolute mt-[12px] text-[18px] ml-3 dark:text-[#bbb] text-[#212134]' /> <input className='dark:bg-[#212134]' autoComplete='none' type="text" name='user_name' placeholder='username' value={name} onChange={nameHandler} />
                </div>
                <div className='input'>
                <MdEmail className='absolute mt-[12px] text-[18px] ml-3 dark:text-[#bbb] text-[#212134]' /> <input className='dark:bg-[#212134]'  type="email" name='user_email' autoComplete='off' placeholder='Email' value={email} onChange={emailhandler} />
                </div>
                <div className='input'>
                    <textarea className='dark:bg-[#212134]' placeholder='Type here...' name="message" id="" cols="30" rows="10" value={text} onChange={textHandler}></textarea>
                </div>
                </form>
                <div className='text-center'>
                <button onClick={submit} type='submit' className='bg-[#3e3cdb] duration-300 hover:bg-[#2f1793] text-center py-2 px-4 rounded-md text-white'>submit</button>
                </div>
             </div>
             <ToastContainer />
             
             
            </div>
        </div>
    )
}

export default Contact;