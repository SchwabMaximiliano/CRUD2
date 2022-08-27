import Container from "react-bootstrap/esm/Container"
import MotorcyclesList from "../components/MotorcyclesList"

export default function App() {
    return(
        <Container fluid>
            <h2 className="text-center">Listado de Motos</h2>
            <MotorcyclesList />
        </Container>
    )
}