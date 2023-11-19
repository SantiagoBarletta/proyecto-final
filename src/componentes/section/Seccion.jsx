import "./Seccion.css";
import galletitas from "../../assets/img/galletitas.jpg";

function Seccion() {
  return (
    <section className="seccion">
      <h2>Informacion:</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
        placeat, eos nisi minima dicta at asperiores harum reiciendis aliquam,
        cum voluptatem consequatur quia deleniti in modi odit veniam inventore
        sunt.
      </p>
      <img src={galletitas}></img>
    </section>
  );
}

export default Seccion;
