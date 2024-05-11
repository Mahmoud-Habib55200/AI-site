import React from "react";
import { Brand, NavBar, Cta, Features } from "./components";
import {
  Blog,
  Header,
  Posibility,
  WhatGPT3,
  Footer,
} from "./containers/index";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Posibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
