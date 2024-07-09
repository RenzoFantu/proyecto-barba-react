import { Button } from 'react-bootstrap'
import Cards from '../components/Cards'
import './Home.css'

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="text-container">
            <h1>Bienvenido a  BARBA!!!🐵</h1>
            <h3>¡Descubre Tu Mejor Versión! Transforma tu Estilo, Eleva tu Confianza</h3>
            <Button className = 'head-button'  variant='success'>Para tu Barba</Button>
        </div>
      </div>
      <h4 className='titlle-h4'>Estás frente al espejo, listo para darle a tu barba el cuidado que se merece. Pero, ¿qué es lo que realmente necesitas para lograr una barba verdaderamente épica? La respuesta es simple: ¡Epic Barba!</h4>
      <Cards/>
    </div>
  )
}

export default Home
