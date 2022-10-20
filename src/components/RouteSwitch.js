import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Home";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;