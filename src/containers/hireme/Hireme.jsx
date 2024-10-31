import { Titles } from '../../components'
import { HIREME } from '../../constants/data'
import './hireme.css'

const Hireme = () => {
  return (
    <section >
      <div className=" hireme__container initial">
       <Titles title={HIREME.title}
                description={HIREME.description}/>
      </div>
    </section>
  )
}

export default Hireme