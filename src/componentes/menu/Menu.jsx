import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
//CSS
import "./Menu.css";
import imagenes from "../imagenes";

const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-body-dark menunav">
      <Navbar.Brand href="/proyecto-final/" className="text-white">
        <img src= {imagenes.logo} className="logomenu"></img>

      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Link to="/proyecto-final/" className="linkMenu text-white ">
            Inico
          </Link>
          <Link to="/peliculas" className="linkMenu text-white">
            Recomendados
          </Link>
          <Link to="/milista" className="linkMenu text-white">
            Mi lista
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    /* <nav>
    <ul>
        <li> <Link to="/"> Inicio </Link></li>
        <li> <Link to="/pociones"> Pociones </Link></li>
        <li> <Link to="/casas"> Casas </Link></li>

    </ul>
</nav> */
  );
};

export default Menu;
