import './navbar.css'
import {NAVLINKS} from '../../constants/data'

import Socials from '../socials/Socials';


const Navbar = () => { 


  return (
    <nav>           
        <div className='logo'>
          <a href="#">SCHEME3</a>
          </div>     
        <ul className='menu'>
        {NAVLINKS.map((item,index)=>(
                <li key={index}>
                <a href={item.href}>{item.label}</a>
                </li>
              ))}
        </ul>
        <Socials/>      
       
   
                  
    </nav>
  )
}

export default Navbar