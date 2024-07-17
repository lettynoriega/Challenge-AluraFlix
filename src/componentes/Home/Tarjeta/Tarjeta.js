import src from "./image 7.jpg";
import styles from "./Tarjeta.module.css";
import borrar from "./Eliminar.png";
import editar from "./Editar.png";

function Tarjeta(props) {



  return (
    <div className={styles.cardContainer}>      
      <div className={styles.imgcontainer}>
        <img  className={styles.img} src={src} alt="tarjeta" />
      </div>
      <div className={styles.areabotones}>        
        <span className={styles.btncontainer} ><img src={borrar} alt="borrar"/>Borrar</span>
        <span className={styles.btncontainer} ><img src={editar} alt="editar"/>Editar</span>
      </div>
    </div>
  );
}

export default Tarjeta;

/* <button className={styles.botones}>borrar</button>
<button>editar</button> */