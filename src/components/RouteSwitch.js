import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import "./routeSwitch.css";
import homeIcon from "./images/home_FILL0_wght400_GRAD0_opsz48.svg";
import storeIcon from "./images/storefront_FILL0_wght400_GRAD0_opsz48.svg";

const RouteSwitch = (props) => {
  return (
    <BrowserRouter basename="/shopping-cart">
      <div className="linkContainer">
        <div>
          <img src={homeIcon} alt="home icon" className="filter-white" />
          <Link to={"/"}>Home</Link>
        </div>
        <div>
          <img src={storeIcon} alt="store icon" className="filter-white" />
          <Link to={"/shop"}>Shop </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop shopCart={props.currentCart} />} />
        <Route
          path="/cart"
          element={<Cart checkOutCart={props.currentCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
