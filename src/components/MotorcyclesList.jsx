import axios from "axios";
import React, { useEffect, useState } from "react";
import MotorcycleCard from "./MotorcycleCard";
import {Container, Form, Modal, Row, Button} from "react-bootstrap";
import Swal from "sweetalert2";

export default function MotorcyclesList() {
    
    const URL = "http://localhost:3002/motorcycles";

    const getData = async ()=> {
        const response = axios.get(URL);
        return response;
    }

    const [list, setList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [dataModal, setDataModal] = useState({});

    useEffect(()=>{
        getData().then((response) => {
        setList(response.data);
        })
    }, [list])

    const handleChangeModal = ({target}) => {
        setDataModal({
            ...dataModal, [target.name]: target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.put(`${URL}/${dataModal.id}`, dataModal);
        if(response.status === 200){
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
        setShowModal(false);
    }

    return(
        <Container className="mb-5">
        <Row>
            {
                list.map((motorcycle, index)=>(
                    <MotorcycleCard 
                    key={index}
                    motorcycle={motorcycle}
                    setShowModal={setShowModal}
                    setDataModal={setDataModal}
                    />
                ))
            }
        </Row>
        <Modal show={showModal} >
            <Modal.Header>
                <Modal.Title>Actualizar datos</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Marca</Form.Label>
                        <Form.Select
                            name="mark"
                            onChange={handleChangeModal}
                            required
                        >
                            <option value={dataModal.mark}>{dataModal.mark}</option>
                            <option value="Yamaha">Yamaha</option>
                            <option value="Honda">Honda</option>
                            <option value="Rouser">Rouser</option>
                            <option value="Zanella">Zanella</option>
                            <option value="Suzuki">Suzuki</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Referencia</Form.Label>
                        <Form.Control 
                            type="text"
                            name="reference"
                            value={dataModal.reference}
                            onChange={handleChangeModal}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Modelo</Form.Label>
                        <Form.Control 
                            type="text"
                            name="model"
                            value={dataModal.model}
                            onChange={handleChangeModal}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control 
                            type="number"
                            name="price"
                            value={dataModal.price}
                            onChange={handleChangeModal}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>URL de la Imagen</Form.Label>
                        <Form.Control 
                            type="text"
                            name="image"
                            value={dataModal.image}
                            onChange={handleChangeModal}
                            required
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" type="reset" onClick={()=>setShowModal(false)}>
                        Cancelar
                    </Button>
                    <Button variant="primary" type="submit">
                        Guardar
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
        </Container>
    )
}