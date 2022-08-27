import axios from "axios";
import React, { useEffect } from "react";

export default function MotorcyclesList() {
    
    const URL = "http://localhost:3002/motorcycles";

    const getData = async ()=> {
        const response = axios.get(URL);
        return response;
    }

    useEffect(()=>{
        getData().then((response) => {
            console.log(response)
        })
    }, [])

    return(
        <div>
            lista de motos
        </div>
    )
}