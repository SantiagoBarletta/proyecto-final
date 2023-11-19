import './Header.css';
import background from "../../assets/img/background.jpg";

function Header(){
    return(
        <div className="imagenIndex cabecera">
        <img src={background} alt="Imagen de fondo"/>
        <p className="tituloPagina">PLANETA TERROR</p>
      </div>
    )
}

export default Header;