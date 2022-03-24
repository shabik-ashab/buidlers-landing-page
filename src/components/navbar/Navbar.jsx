import { Container } from "@mui/material";
import React, { useState } from "react";
import "./navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
      <Container fixed>
    <div className="Navbar">
      <span className="nav-logo">BUIDLERS TRIBE</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a className="current" href="/home">Home</a>
        <a href="/startup">Our Startups</a>
        <a href="/buidlers">Buidlers</a>
        <a href="/investor">investors</a>
        <a href="/experts">Experts</a>
        <a href="/people">People</a>
        <a href="/values">Values</a>
        <a href="/belief">BeliedDAO</a>
        <a href="/jobs">jobs</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
    </Container>
  );
};

export default Navbar;