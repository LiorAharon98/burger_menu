import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
const SignIn = ({ userName, setDisplayNav, setUserName }) => {
  const nav = useNavigate();
  const [displayErr,setDisplayErr] = useState("none")
  return (
    <div className="signInContainer">
      <h1 id="SignInTitle">Sign in!</h1>

      <input
        id="userNameInp"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        type="text"
        placeholder="enter name"
      />

      <button
        className="MenuBtn"
        onClick={() => {
          if (userName == "")return setDisplayErr("block")
          setDisplayNav((prevDisplayNav) => {
            return (prevDisplayNav = true);
          });
          nav("/burger_menu/menu");
        }}
      >
        menu
      </button>
     <h1 style={{display : displayErr}}>Error</h1>
    </div>
  );
};

export default SignIn;
