import './Footer.css';
import imagenes from '../imagenes';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className='footer'> <Link to="/proyecto-final/">   <img src={imagenes.logo} className="logomenu"></img></Link><br></br>
            Términos y Aviso de privacidad | Envíanos tus comentarios | ©2023-2024, Planetaterror.com </footer>

    )
}

export default Footer;