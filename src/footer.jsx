import React from "react";
import {BsInstagram,BsDiscord,BsLinkedin,BsTwitter} from "react-icons/Bs";

const Footer = () =>{
    const date = new Date;
    const year = date.getFullYear();
    
    return(
        <div className="bg-[#212134] pt-[50px]">
            <div className="flex justify-center gap-8">
                <a href="" className="i bg-[#181826] rounded-full p-2"><BsInstagram className="icon inline-flex   text-[#b3bcc9] text-[22px] "/></a>
                <a href="" className="i bg-[#181826] rounded-full p-2"><BsDiscord className="icon inline-flex   text-[#b3bcc9] text-[22px]"/></a>
                <a href="" className="i bg-[#181826] rounded-full p-2"><BsLinkedin className="icon inline-flex   text-[#b3bcc9] text-[22px] "/></a>
                <a href="" className="i bg-[#181826] rounded-full p-2"><BsTwitter className="icon inline-flex text-[#b3bcc9] text-[22px] "/></a>
            </div>
            <div className="pt-5">
                <h1 className="text-center text-[#eee] md:text-2xl text-[20px] font-semibold my-2">252 Development</h1>
                <p className="text-center text-[#b3bcc9]">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <p className="text-center py-3 text-[#b3bcc9]">252 Development &#169; {year}</p>
        </div>
    )
}

export default Footer;