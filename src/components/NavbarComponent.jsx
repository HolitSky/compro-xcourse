import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);
  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
  });
  return (
    <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
      <Container>
        <Navbar.Brand href="/home">
          <img src="/Rocket.svg" style={{ width: "20%" }} alt="img-logo" />
          <span className="fw-bold">CoursesX</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center m-3">
            {navLinks.map((link) => {
              return (
                <div key={link.id} className="nav-link">
                  <NavLink
                    to={link.path}
                    className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}
                    end
                  >
                    {link.text}
                  </NavLink>
                </div>
              );
            })}
          </Nav>
          <div className="text-center">
            <button className="btn btn-outline-danger rounded-1">Join With Us</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
