import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Home";
import Shop from "./Shop";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Link to={"/"}>Home</Link>
      <Link to={"/shop"}>Shop </Link>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
