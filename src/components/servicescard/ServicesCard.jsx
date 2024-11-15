import './servicescard.css'

const ServicesCard = ({title,description}) => {
  return (
    <article className='service__card'>
      <div className=" service__card-details">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>        
    </article>
  )
}
export default ServicesCard