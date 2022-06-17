import React from "react";
import { Link } from "react-router-dom";
const NavBar = ({setUserName,setDisplayNav,setItemsInCarts}) => {
  return (
    <div>
      <ul className="navBarContainer">
        <Link className="liLinkTag" to={"/"}>
          <li className="liTag">Home</li>
        </Link>
        <Link className="liLinkTag" to={"/menu"}>
          <li className="liTag">Menu</li>
        </Link>
        <Link className="liLinkTag" to={"/cart"}>
          <li className="liTag">Cart</li>
        </Link>
        <Link onClick={()=>{
          setUserName("")
          setDisplayNav(false)
          setItemsInCarts([])
        }} className="liLinkTag" to={"/"}>
          <li className="liTag">Sign out</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
