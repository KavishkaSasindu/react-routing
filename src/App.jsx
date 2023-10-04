import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import OrderSummery from "./Components/OrderSummery";
import NotMatch from "./Components/NotMatch";
import Products from "./Components/Products";
import FeatureProducts from "./Components/FeatureProducts";
import NewProducts from "./Components/NewProducts";
import User from "./Components/User";
import UserDetails from "./Components/UserDetails";
import Admin from "./Components/Admin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/orderSum" element={<OrderSummery />} />
          <Route path="*" element={<NotMatch />} />
          <Route path="/products" element={<Products />}>
            <Route path="featured" element={<FeatureProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          <Route path="/user" element={<User />}>
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
