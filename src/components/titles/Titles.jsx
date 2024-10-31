import './titles.css'

const Titles = ({title,description}) => {
  return (
    <div className='headings'>
         <h1>{title}</h1>
         <p>{description} </p>
    </div>
  )
}

export default Titles