import styles from "./Categorias.module.css";
import Tarjeta from "../Tarjeta/Tarjeta";

const Categorias= (props)=> {

  const {videos} = props.videos;
    
  const {titulo, colorCategoria} = props.datos;
  const obj = { backgroundColor: colorCategoria};
  
  return (
    <div className={styles.categorias}>
      <button className={styles.boton} style={obj}>{titulo}</button>
      <div className={styles.tarjetas}>         
          {
            
          }
      </div>
    </div>
  );
}

export default Categorias;
