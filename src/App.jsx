import { Navbar } from './components'
import { Header,Testimonials,Services,Contact, Hireme, About, Footer } from './containers'
import './App.css'



const App = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Hireme/>    
      <Testimonials/>  
      <Contact/>
      <Footer/>
    </main>

    
  )
}

export default App