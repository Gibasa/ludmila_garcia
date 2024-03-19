import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isPacientesHovered, setIsPacientesHovered] = useState(false);
  const [isPsicologosHovered, setIsPsicologosHovered] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setExpanded(false);
  }, [currentPath]);

  const handleNavToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavItemClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar expand="lg" className={`header-bg ${scrolled ? "scrolled" : ""}`}>
      <Container className="header-container">
        <Navbar.Brand className="header-logo order-lg-first" as={Link} to="/">
          <img
            height="80"
            className="d-inline-block align-top"
            alt="Ludmila logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="header-toggle"
          onClick={handleNavToggle}
        />
        <Navbar.Collapse id="basic-navbar-nav" in={expanded}>
          <Nav className="mx-auto header-links">
            <div
              className="header-pacientes header-link"
              onMouseOver={() => setIsPacientesHovered(true)}
              onMouseLeave={() => setIsPacientesHovered(false)}
            >
              <p className="titulo">PARA PACIENTES</p>
              {isPacientesHovered && (
                <div className={`submenus ${isPacientesHovered ? "show" : ""}`}>
                  <Nav.Link
                    as={Link}
                    className={`header-terapia ${
                      currentPath === "/terapia" ? "active" : ""
                    }`}
                    to="/terapia"
                    onClick={handleNavItemClick}
                  >
                    TERAPIA
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    className={`header-pensemagro ${
                      currentPath === "/pensemagro" ? "active" : ""
                    }`}
                    to="/pensemagro"
                    onClick={handleNavItemClick}
                  >
                    PENSE MAGRO
                  </Nav.Link>
                </div>
              )}
            </div>
            <div
              className="header-psicologos header-link"
              onMouseOver={() => setIsPsicologosHovered(true)}
              onMouseLeave={() => setIsPsicologosHovered(false)}
            >
              <p>PARA PSICÓLOGOS</p>
              {isPsicologosHovered && (
                <div className={`submenus ${isPacientesHovered ? "show" : ""}`}>
                  <Nav.Link
                    as={Link}
                    className={`header-marketing ${
                      currentPath === "/marketing" ? "active" : ""
                    }`}
                    to="/marketing"
                    onClick={handleNavItemClick}
                  >
                    <p>MARKETING PARA PSIS</p>
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    className={`header-neurociencia ${
                      currentPath === "/neurociencia" ? "active" : ""
                    }`}
                    to="/neurociencia"
                    onClick={handleNavItemClick}
                  >
                    <p>NEUROCIÊNCIA DA COMPULSÃO ALIMENTAR</p>
                  </Nav.Link>
                </div>
              )}
            </div>
            <Nav.Link
              as={Link}
              className={`header-link header-apresentacao ${
                currentPath === "/apresentacao" ? "active" : ""
              }`}
              to="/apresentacao"
              onClick={handleNavItemClick}
            >
              <p>APRESENTAÇÃO</p>
            </Nav.Link>
            <Nav.Link
              as={Link}
              className={`header-link header-contato ${
                currentPath === "/contato" ? "active" : ""
              }`}
              to="/contato"
              onClick={handleNavItemClick}
            >
              <p>CONVERSE COMIGO</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
