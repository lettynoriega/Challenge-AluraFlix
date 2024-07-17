import styles from "./CardBanner.module.css";
import player from "./player.svg"

function CardBanner(){
    return(
        <div className={styles.card}>
            <div className={styles.wrappertext}>
                <button className={styles.category}>FRONT END</button>
                <h2 className={styles.titulo}>Challenge React</h2>
                <p className={styles.descripcion}>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </div>
            <div className={styles.player} style={{backgroundImage:`url("${player}")`}}></div>
        </div>
    )
}


export default CardBanner;