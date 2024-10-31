import './about.css'
import { ABOUT} from '../../constants/data'

const About = () => {
  return (
    <section className = 'initial' id='about'>
      <div className=" about__container">
         <div className='about__image'>
            <img src={ABOUT.photo} alt="photo" />
            <img src={ABOUT.photosmall} alt="photosmall" className='about__image-small'/>
         </div>        
        <div className='about__content'>
          <h1>{ABOUT.title}</h1>
          <p>{ABOUT.description}</p>
        </div>        
      </div>
     </section>
  )
}

export default About