import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import App from "../containers/App";
import NewMotorCycle from "../components/NewMotorCycle";

export default function Router() {
    return(
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/new" element={<NewMotorCycle />} />
            </Routes>
        </BrowserRouter>
    )
}