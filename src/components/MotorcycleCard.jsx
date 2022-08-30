import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/styles.css";

export default function MotorcycleCard(props){
    
    
    
    return(
        <div className="col-4 mb-3">
            <Link to="/new" className="normal-text">
            <Card>
                <img src={props.motorcycle.image} alt={props.motorcycle.reference} className="card-img-top image-card" />
                <Card.Body>
                    <Card.Title className="text-center">{props.motorcycle.reference}</Card.Title>
                    <ListGroup className="mb-2" >
                        <ListGroupItem><strong>MODELO: </strong>{props.motorcycle.model}</ListGroupItem>
                        <ListGroupItem><strong>MARCA: </strong>{props.motorcycle.mark}</ListGroupItem>
                        <ListGroupItem><strong>PRECIO: </strong>{props.motorcycle.price}</ListGroupItem>
                    </ListGroup>
                    <button className="btn btn-danger me-2">Eliminar</button>
                    <button className="btn btn-primary me-2">Editar</button>
                </Card.Body>
            </Card>
            </Link>
        </div>
    )
}