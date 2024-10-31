import './header.css';
import { HEADER } from '../../constants/data'; 

const Header = () => {
  return (
    <header >
      <div className="header__container">
        <article className="header__content ">
          <h2>{HEADER.tag}</h2>
          <h1>{HEADER.title}</h1>
          <p>{HEADER.description}</p>
          <button>ABOUT ME</button>
        </article>
        
      </div>
      </header>
  )
}

export default Header