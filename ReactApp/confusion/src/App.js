import React from 'react';
// import logo from './logo.svg';
import { Navbar, NavbarBrand } from "reactstrap";
import './App.css';
import Menu from "./components/menuComponent";

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Con Fusion Restorant Banner</NavbarBrand>
        </div>
      </Navbar>
      <Menu></Menu>
    </div>
  );
}

export default App;
