import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

import "./Header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isPacientesDropdownOpen, setIsPacientesDropdownOpen] = useState(false);
  const [isPsicologosDropdownOpen, setIsPsicologosDropdownOpen] =
    useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

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

  const handlePacientesHoverEnter = () => {
    setIsPacientesDropdownOpen(true);
  };

  const handlePacientesHoverLeave = () => {
    setIsPacientesDropdownOpen(false);
  };

  const handlePsicologosHoverEnter = () => {
    setIsPsicologosDropdownOpen(true);
  };

  const handlePsicologosHoverLeave = () => {
    setIsPsicologosDropdownOpen(false);
  };

  function scrollToSection(sectionId, delay = 100) {
    return new Promise((resolve) => {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth",
          });
        }
        resolve();
      }, delay);
    });
  }

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`header-bg ${scrolled ? "scrolled" : ""}`}
      expanded={expanded}
    >
      <Container className="header-container">
        <Navbar.Brand className="header-logo order-lg-first" as={Link} to="/">
          <img
            height="80"
            className="d-inline-block align-top"
            alt="Ludmila logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="header-toggle"
          onClick={handleNavToggle}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto header-links">
            <Nav.Link
              className={`header-link header-apresentacao `}
              to="/"
              onClick={() => {
                scrollToSection("apresentacao");
                handleNavItemClick();
              }}
            >
              <p>APRESENTAÇÃO</p>
            </Nav.Link>
            <Dropdown
              onMouseEnter={handlePacientesHoverEnter}
              onMouseLeave={handlePacientesHoverLeave}
              show={isPacientesDropdownOpen}
            >
              <Dropdown.Toggle
                as={Link}
                to="#"
                className="header-pacientes header-dropdown-toggle"
              >
                PARA PACIENTES
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  as={Link}
                  to="/terapia"
                  onClick={() => {
                    handleNavItemClick();
                  }}
                >
                  TERAPIA
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  to="/pensemagro"
                  onClick={() => {
                    handleNavItemClick();
                  }}
                >
                  PENSE MAGRO
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown
              onMouseEnter={handlePsicologosHoverEnter}
              onMouseLeave={handlePsicologosHoverLeave}
              show={isPsicologosDropdownOpen}
            >
              <Dropdown.Toggle
                as={Link}
                to="#"
                className="header-psicologos header-dropdown-toggle"
              >
                PARA PSICÓLOGOS
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  as={Link}
                  to="/marketing"
                  onClick={() => {
                    handleNavItemClick();
                  }}
                >
                  MARKETING PARA PSIS
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  to="/protocolo-ceo"
                  onClick={() => {
                    handleNavItemClick();
                  }}
                >
                  CURSO PROTOCOLO CEO
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link
              as={Link}
              className={`header-link header-contato`}
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
