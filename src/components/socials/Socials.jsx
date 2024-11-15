import './socials.css'
import { FaLinkedin } from "react-icons/fa6";
import { HiAcademicCap } from "react-icons/hi";
import { HiCake } from "react-icons/hi";

import React from 'react'
const ICONS = [   
    {   icon : <HiAcademicCap />, 
        url  : 'https://www.facebook.com/'  
    }, 
    { icon : <FaLinkedin />, 
      url  : 'https://www.facebook.com/'  
    },
    { icon :  <HiCake />, 
    url  : 'https://www.facebook.com/'  
    }, 
];

const Socials = () => {
  return (
    <> 
    <div className='social__icon '>
    {ICONS.map((item,index)=>(
     <a key={index} href={item.url} target='blank'>{item.icon}</a>
    ))}
    </div>     
    </>
        
  )
}

export default Socials