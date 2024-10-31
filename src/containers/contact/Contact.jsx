import './contact.css'
import { CONTACT } from '../../constants/data'
import { Titles } from '../../components'

const Contact = () => {
  return (
    <section id='contact'>
      <div className="contact__container">
        <div className='initial' >
              <Titles title={CONTACT.title}
                      description={CONTACT.description}
              />       
        </div>
      <div className='contact__inputs initial'>
      <form className ='inputs' action="">
          <input type="text" name='name' placeholder=':Your Full Name' required/>
          <input type="email" name='email' placeholder=':Your Email' required/>
          <input type="number" name='number' placeholder=':Your Phone number' required/>
          <textarea name="message" rows="7" placeholder=':Your Message'></textarea>
          <button type='submit' >Send Message</button>       
      </form>  
      </div>
    </div>

     
     
     </section>
  )
}

export default Contact