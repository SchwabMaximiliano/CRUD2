import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "../styles/styles.css";
import axios from "axios";
import Swal from "sweetalert2";

export default function MotorcycleCard(props){
    
    const URL = "http://localhost:3002/motorcycles";
    const handleDelete = () => {

        Swal.fire({
            title: `¿Estás seguro de eliminar ${props.motorcycle.reference}?`,
            text: "Esta acción no se puede deshacer",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminarlo!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                
                axios.delete(`${URL}/${props.motorcycle.id}`).then((response) =>{
                    if(response.status === 200){
                        Swal.fire(
                            'Eliminado!',
                            `La moto ${props.motorcycle.reference} ha sido eliminada`,
                            'success'
                        ) 
                    }else{
                        Swal.fire(
                            'Error!',
                            'Hubo un problema al eliminar la moto',
                            'error'
                        )
                    }
                })                
            }
          }) 
    }

    const handleEdit = () => {
        props.setShowModal(true);
        props.setDataModal(props.motorcycle);
    }
    
    return(
        <div className="col-4 mb-3">
            
            <Card>
                <img src={props.motorcycle.image} alt={props.motorcycle.reference} className="card-img-top image-card" />
                <Card.Body>
                    <Card.Title className="text-center">{props.motorcycle.reference}</Card.Title>
                    <ListGroup className="mb-2" >
                        <ListGroupItem><strong>MODELO: </strong>{props.motorcycle.model}</ListGroupItem>
                        <ListGroupItem><strong>MARCA: </strong>{props.motorcycle.mark}</ListGroupItem>
                        <ListGroupItem><strong>PRECIO: </strong>{props.motorcycle.price}</ListGroupItem>
                    </ListGroup>
                    <button className="btn btn-danger me-2" onClick={handleDelete}>Eliminar</button>
                    <button className="btn btn-primary me-2" onClick={handleEdit}>Editar</button>
                </Card.Body>
            </Card>
            
        </div>
    )
}