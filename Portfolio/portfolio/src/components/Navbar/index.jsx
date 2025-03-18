import React from "react";
import "./index.css";
import { useState } from "react";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBars, faFileLines, faTable, faXmark} from '@fortawesome/free-solid-svg-icons'


function Navbar() {

  const [navColor, updateNavColor] = useState(false);
  const [expand, updateExpand] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavColor(true);
    } else {
      updateNavColor(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <NavBar
      fixed="top"
      expanded = {expand}
      expand="md"
      className={navColor ? "navbar-original" : "navbar-scrolled"}
    >
      <Container>
        <NavBar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {updateExpand(expand ? false : "expanded");
            updateNavColor(true);
          }}
        >
          <FontAwesomeIcon icon={expand ? faXmark : faBars} className = "switch-icon" />
        </NavBar.Toggle>
        <NavBar.Collapse id = "responsive-navbar-nav" >
          <Nav className = "ms-auto" defaultActiveKey = "#home">
            <Nav.Item>
              <Nav.Link as = {Link} to = "/" onClick={() => {
                updateExpand(false)
              }} className="nav-icon">
                <FontAwesomeIcon icon={faHouse} />
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as = {Link} to = "/projects" onClick={()=> {
                updateExpand(false)
              }} className="nav-icon">
                <FontAwesomeIcon icon={faTable} />
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as = {Link} to = "/resume" onClick={()=> {
                updateExpand(false)
              }} className="nav-icon">
                <FontAwesomeIcon icon={faFileLines} />
                Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </NavBar.Collapse>
      </Container>
    </NavBar>
  )
}

export default Navbar;