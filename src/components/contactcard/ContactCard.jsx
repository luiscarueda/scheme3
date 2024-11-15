import './contactcard.css'
import { FaLinkedin } from "react-icons/fa6";
import { HiAcademicCap } from "react-icons/hi";
import { HiCake } from "react-icons/hi";

const ContactCard = () => {

    const ICONS = [   
        { icon : <HiAcademicCap />,
          title:'VISIT US',
          url  : 'https://www.facebook.com/'  
        }, 
        { icon : <FaLinkedin />,
          title:'VISIT US', 
          url  : 'https://www.facebook.com/'  
        },
        { icon :  <HiCake />, 
          title:'VISIT US',
          url  : 'https://www.facebook.com/'  
        }, 
    ];
  return (
    <div>
    <div className='contact__icon '>
    {ICONS.map((item,index)=>(
      <div>
        <h5>{item.title}</h5>
        <a key={index} href={item.url} target='blank'>{item.icon}</a>
      </div>
     
    ))}
    </div>      
    </div>
  )
}

export default ContactCard