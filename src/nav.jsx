import React, { useState } from "react";

import {FiSun,FiMenu,FiMoon} from 'react-icons/Fi';
import {AiOutlineClose,AiFillCode} from 'react-icons/Ai';

const Nav = ({darkmode,toggle}) =>{
    const [open,setOpen] = useState(false);
    return(
        <div className="sticky top-0 z-[100]">
            <nav className="bg-[#2f1793] flex justify-between py-5 ">
                <h1 className="flex gap-1 font-bold text-xl mx-5 text-white">
                    <span className="mt-[3px]"><AiFillCode /></span> 252
                </h1>
                <ul className={`md:flex z-[-1] md:static absolute ${!open ? `md:visible invisible top-[-100%]` : `visible top-[70px]`} md:bg-transparent md:shadow-none shadow-lg md:gap-[4vw] w-full p-4 md:p-0 md:w-fit md:text-white duration-300 z-[0] ${!darkmode?'bg-white':'bg-[#181826] border-b-[1px] md:border-none border-[#333]'}`}>
                    <a href="#home"><li className="pb-3 md:pb-0 dark:text-white md:text-white text-black   cursor-pointer">home</li></a>
                    <a href="#ourbots"><li className="pb-3 md:pb-0 dark:text-white text-black md:text-white   cursor-pointer">Our Bots</li></a>
                    <a href="#about"><li className=" pb-3 md:pb-0 dark:text-white text-black md:text-white  cursor-pointer">About</li></a>
                    <a href="#contact"><li className="mr-[30px] pb-3 md:pb-0 dark:text-white md:text-white text-black  cursor-pointer">Contact</li></a>
                    
                </ul>
                <div className="flex mx-5 gap-2">
                    <button onClick={()=>toggle()} className="text-2xl text-white">
                        {darkmode?<FiMoon/>:<FiSun/>}
                    </button>
                <button className="font-semibold capitalize px-4 mx-7 text-white md:text-xl text-[15px] border-[1px] rounded-full hover:bg-white duration-500 hover:text-[#2f1793] hidden sm:block ">JOIN</button>
                <div onClick={()=>setOpen(!open)} className="text-3xl text-white md:hidden cursor-pointer">
                    {!open ? <FiMenu /> : <AiOutlineClose />}
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;