import React from "react";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Menue = () => (
  <>
    <p>
      <a href="#home">Home</a>{" "}
    </p>
    <p>
      <a href="#wgpt">What is Gpt?</a>
    </p>

    <p>
      <a href="#posibility">Open AI</a>
    </p>

    <p>
      <a href="#features">Case Studies</a>
    </p>

    <p>
      <a href="#blog">library</a>
    </p>
  </>
);
const NavBar = () => {
  const [ToggleMenue, SetToggleMenue] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar__links">
        <div className="gpt3__navbar__links__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar__links__container">
          <Menue />
        </div>
      </div>

      <div className="gpt3__navbar__sign">
        <p>Sign in</p>
        <button>sign up</button>
      </div>

      <div className="gpt3__navbar__menue">
        {ToggleMenue ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => SetToggleMenue(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => SetToggleMenue(true)}
          />
        )}

        {ToggleMenue && (
          <div className="gpt3__navbar__menue__container scale-up-center">
            <div className="gpt3__navbar__menue__container__links">
              <Menue />
            <div className="gpt3__navbar__menue__container__links__sign">
              <p>Sign in</p>
              <button>sign up</button>
            </div>
          </div>
            </div>   
        )}
      </div>
    </div>
  );
};

export default NavBar;
