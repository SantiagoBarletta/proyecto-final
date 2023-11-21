// CarouselComponent.jsx
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imagenes from "../imagenes";
import './Header.css'

const Header = () => {
  return (
<Carousel>
      <Carousel.Item>
      <img
        className="d-block w-100"
           src={imagenes.viernes13slider}
           alt="First slide"
         />
        <Carousel.Caption className='carrusel'>
          <h3>Viernes 13</h3>
          <p>Un grupo de jóvenes visita el desahuciado campamento de Crystal Lake, donde tuvieron lugar varios monstruosos asesinatos hace más de dos décadas. Allí son brutalmente atacados por Jason, el temido asesino.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100"
           src={imagenes.halloweenslider}
           alt="First slide"
         />
        <Carousel.Caption className='carrusel'>
          <h3>Halloween</h3>
          <p>El pequeño Michael Myers asesina a su hermana en la noche de Halloween de 1963, por lo que es internado en un psiquiátrico. Seis años más tarde, Myers se escapa del hospital y regresa a su pueblo natal, Haddonfield, en Illinois. El psicópata dará comienzo a una serie de horripilantes asesinatos mientras uno de los médicos que lo trataba en el hospital le sigue la pista.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100"
           src={imagenes.returnslider}
           alt="First slide"
         />
        <Carousel.Caption className='carrusel'>
          <h3>The Return of the Living Dead</h3>
          <p>
          En su primer día en un almacén de suministros médicos, Freddy (Thom Mathews) libera, sin querer, gas tóxico de un barco militar secreto de EE. UU. El gas reanima a un ejército de cadáveres con un hambre voraz ¡por cerebros humanos!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>






    // <Carousel>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={imagenes.viernes13}
    //       alt="First slide"
    //     />
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={imagenes.halloween}
    //       alt="Second slide"
    //     />
    //     <h2>Halloween</h2>
    //   </Carousel.Item>
    //   {/* Agrega más items según sea necesario */}
    // </Carousel>
  );
};

export default Header;
