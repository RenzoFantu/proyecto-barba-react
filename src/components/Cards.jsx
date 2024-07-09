import './Cards.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div >
      <div  className='container-card'>
        

          <Card as ={Link} to = '/epicbarba' className='card1' style={{ width: '18rem' }}>
          {/* <Card.Img variant="top" src="https://res.cloudinary.com/da2aauwq2/image/upload/v1713151768/Beard-Store/edla8wfczye3bcixrguw.jpg" /> */}
            <Card.Body>

              <Card.Text>
                <Card.Title>Epic Barba</Card.Title>
                la solución perfecta para lograr el estilo de barba deseado con precisión y facilidad.
              </Card.Text>

            </Card.Body>
          </Card>
        
        <Card className='card2' style={{ width: '18rem' }}>

          <Card.Body>
            <Card.Text>
              <Card.Title>Epic Body</Card.Title>
              La barba queda bien en tu rostro, no en tus bolas!! aqui la solucion
            </Card.Text>

          </Card.Body>
        </Card>
        <Card className='card3' style={{ width: '18rem' }}>

          <Card.Body>
            <Card.Title>No Barba</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

      </div>
    </div>
  );
}

export default Cards;
