import './testimonials.css'
import { TestimonialCard, Titles } from '../../components'
import { TESTIMONIALS } from '../../constants/data'

const Testimonials = () => {
  return (
    <section className='initial'>
     <div>
        <Titles title={TESTIMONIALS.title}
                description={TESTIMONIALS.description}
        />
     
      <div>
        {TESTIMONIALS.data.map((item,index)=>(
           <TestimonialCard
              key={index}
              name={item.name}
              opinion ={item.opinion}
           />))}        
      </div>
      </div>
    </section>
  )
}
export default Testimonials