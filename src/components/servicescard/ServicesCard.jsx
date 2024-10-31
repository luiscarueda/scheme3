import './servicescard.css'

const ServicesCard = ({title,description}) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{description}</p>

    </div>
  )
}

export default ServicesCard