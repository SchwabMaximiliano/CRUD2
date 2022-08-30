import { useState } from "react";
import {Container, Form} from "react-bootstrap";
import "../styles/styles.css"
import axios from "axios";
import Swal from 'sweetalert2'

export default function NewMotorCycle() {
    
    const [data, setData] = useState({
        mark: "",
        model: "",
        reference: "",
        price: "",
        image: ""
    })

    const handleChange = ({target}) =>{
        setData({
            ...data, [target.name]: target.value
        })
    }
    
    const URL = "http://localhost:3002/motorcycles";

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(URL, data);
        if(response.status === 201){
            Swal.fire(
                'Guardado!',
                `La moto ${response.data.reference} ha sido guardada`,
                'success'
            )
        }else{
            Swal.fire(
                'Error!',
                'Hubo un problema al guardar la moto',
                'error'
            )
        }
    }

    return(
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Select
                        name="mark"
                        onChange={handleChange}
                        required
                    >
                        <option value="">Seleccione una marca</option>
                        <option value="Yamaha">Yamaha</option>
                        <option value="Yamaha">Honda</option>
                        <option value="Yamaha">Rouser</option>
                        <option value="Yamaha">Zanella</option>
                        <option value="Yamaha">Suzuki</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text"
                        name="reference"
                        placeholder="referencia"
                        value={data.reference}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text"
                        name="model"
                        placeholder="Modelo"
                        value={data.model}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="number"
                        name="price"
                        placeholder="Precio"
                        value={data.price}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                        type="text"
                        name="image"
                        placeholder="URL de la Imagen"
                        value={data.image}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <button className="btn btn-success">Guardar</button>
            </Form>
        </Container>
    )
}