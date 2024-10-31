import './services.css'
import { SERVICES} from '../../constants/data'
import { ServicesCard, Titles } from '../../components'



const Services = () => {
  return (
    <section id='services'>
      <div className=" services__container ">
        <div >
          <Titles  title={SERVICES.title}
                   description={SERVICES.description}
          />         
        </div>
        <div>
          {SERVICES.data.map((item,index)=>(
            <ServicesCard key={index}
                          title={item.title}
                          description={item.description}
            />
          ))}   
        </div>
      </div>
    </section>
  )
}

export default Services