import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./index.css"
const CardItem = (props) => {
  
  return (
    <div className='card-container'>
    <Card  className="text-center card ">
      <Card.Img variant="top" src={props.img} className="card-image"/>
      <Card.Body>
        <Button variant="primary" href={props.link}>{props.details}</Button>
      </Card.Body>
    </Card>
    </div>
    
  );
}

export default CardItem;