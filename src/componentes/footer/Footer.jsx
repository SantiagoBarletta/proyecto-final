import './Footer.css';
import imagenes from '../imagenes';

function Footer(){
    return(
<footer className='footer'>    <img src= {imagenes.logo} className="logomenu"></img><br></br>
Términos y Aviso de privacidad | Envíanos tus comentarios | ©2023-2024, Planetaterror.com </footer>

    )
}

export default Footer;