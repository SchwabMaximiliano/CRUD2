import axios from "axios";
import React, { useEffect, useState } from "react";
import MotorcycleCard from "./MotorcycleCard";
import {Container, Row} from "react-bootstrap";

export default function MotorcyclesList() {
    
    const URL = "http://localhost:3002/motorcycles";

    const getData = async ()=> {
        const response = axios.get(URL);
        return response;
    }

    const [list, setList] = useState([]);

    useEffect(()=>{
        getData().then((response) => {
        setList(response.data);
        })
    }, [])

    return(
        <Container className="mb-5">
        <Row>
            {
                list.map((motorcycle, index)=>(
                    <MotorcycleCard 
                    key={index}
                    motorcycle={motorcycle}
                    />
                ))
            }
        </Row>
        </Container>
    )
}