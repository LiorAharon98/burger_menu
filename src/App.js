import SignIn from "./componente/SignIn";
import MenuPage from "./componente/MenuPage";
import NavBar from "./componente/NavBar";
import Cart from "./componente/Cart";
import "./menu.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const prodcuts = [
    { price: 20, info: "the best ice crem in the city", img: "/public/menu-images/ice cream.jpg"  },
    { price: 40, info: "best hamburger in the city 100% pure meat", img: "/menu-images/hamburger.png" },
    { price: 15, info: "french fries!", img: "/menu-images/franch fries.jpg" },
    { price: 50, info: "double cheesburger not a kosher", img: "/menu-images/hamburger.png" },
    { price: 35, info: "the best chiken in town", img: "/menu-images/chiken.jpg" },
    { price: 12, info: "oreo cookies! this is the best cookies we eve made! ", img: "/menu-images/oreo-cookies.webp" },
    { price: 10, info: "an healty juice for all the fit one", img: "/menu-images/Juice.jpg" },
  ];
  const [userName, setUserName] = useState("");
  const [displayNav, setDisplayNav] = useState(false);
  const [itemsInCart, setItemsInCarts] = useState([]);
  return (
    <div>
      <BrowserRouter>
        {displayNav && <NavBar setUserName = {setUserName}  setDisplayNav ={setDisplayNav} setItemsInCarts ={setItemsInCarts} />}
        <Routes>
          <Route
            path="/burger_menu/"
            element={<SignIn userName={userName} setUserName={setUserName} setDisplayNav={setDisplayNav} />}
          ></Route>
          <Route
            path="/burger_menu/menu"
            element={<MenuPage setItemsInCarts={setItemsInCarts} prodcuts={prodcuts} userName={userName} />}
          ></Route>
          <Route path="/burger_menu/cart" element={<Cart itemsInCart={itemsInCart} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
