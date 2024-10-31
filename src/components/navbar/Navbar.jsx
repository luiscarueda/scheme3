import './navbar.css'
import { NAVBAR } from '../../constants/data'
import { RiFacebookCircleFill } from "@remixicon/react";

const Navbar = () => {
  return (
    <nav>           
        <div className='logo'>
          <a href="#">SCHEME3</a>
          </div>     
        <ul className='menu'>
        {NAVBAR.map((item,index)=>(
                <li key={index}>
                <a href={item.href}>{item.label}</a>
                </li>
              ))}
        </ul> 
        <div><RiFacebookCircleFill size={36} color="red"/></div>               
    </nav>
  )
}

export default Navbar