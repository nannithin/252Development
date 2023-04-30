import React from "react";
import dis from "./assets/undraw_project_completed_re_jr7u.svg";

const Discord= () =>{
  const projects = [
    "telugu gaming ff",
    "munna bhai gaming",
    "saaho yt"
  ];
    
    return(
      <div className="inline-block justify-center md:flex gap-24">
        <div className="md:w-[500px] w-[220px] md:mx-20 mx-auto my-9">
            <img src={dis} alt="" />
        </div>
        <div>
          {projects.map((proj,index)=>(
            <div key={index} className="md:w-[450px] w-[300px] mb-5 dark:text-white text-black capitalize ml-1 px-4 py-5 rounded-md border-[1px] dark:border-[#212134] border-[#ccc]">
              <h1 className="font-bold dark:text-white-">{proj}</h1>
              <p className="text-[15px] mb-2 py-2 dark:text-[#b3bcc9]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, nam consequuntur laudantium sequi eligendi.</p>
              <a href="" className="py-1 px-4 hover:bg-[#2f1793] duration-300 text-white bg-[#3e3cdb] rounded-md">Visit</a>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default Discord;