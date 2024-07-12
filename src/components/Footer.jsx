import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faSquareInstagram, faSquareWhatsapp} from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div>
            <footer className="footer">
    <div className="container-footer">
        <div className="footer-row">
            <div className="footer-links">
                <div className="social-link">
                    <a href='#'><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="#"><FontAwesomeIcon icon={faSquareInstagram} /></a>
                    <a href="#"><FontAwesomeIcon icon={faSquareWhatsapp} /></a>
                </div>
                
            </div>
            
            
            <div className="footer-links">
                <h4>NOSOTROS</h4>
              <ul>
                  <li><Link to='/nosotros'>Nosotros</Link></li>
                  <li><Link to='/allproducts'>Nuestros Productos</Link></li>
                  
              </ul>
          </div>
          <div className="footer-links">
                <h4>ÚNETE AL CLUB </h4>
              <ul>
              <li><Link to='/login'>Unete al Club</Link></li>
                  
              </ul>
          </div>
          
          
      </div>
      <hr />
  <p className="texto-derechos">© 2024. Todos los derechos reservados. Esta es una página de Renzo Fantuzzi.</p>
  </div>

</footer>
        </div >
  )
}

export default Footer