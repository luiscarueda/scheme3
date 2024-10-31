import './testimonialcard.css'

const TestimonialCard = ({name,opinion}) => {
  return (
    <div>
        <h1>{name}</h1>
        <p>{opinion}</p>
    </div>
  )
}

export default TestimonialCard