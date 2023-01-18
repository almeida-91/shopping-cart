import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Home";
import Shop from "./Shop";
import "./routeSwitch.css";
import homeIcon from "./images/home_FILL0_wght400_GRAD0_opsz48.svg";
import storeIcon from "./images/storefront_FILL0_wght400_GRAD0_opsz48.svg";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <div className="linkContainer">
        <img src={homeIcon} alt="home icon" className="filter-white" />
        <Link to={"/"}>Home</Link>
        <img src={storeIcon} alt="store icon" className="filter-white" />
        <Link to={"/shop"}>Shop </Link>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
