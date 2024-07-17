import styles from "./Footer.module.css";
import logo from"../Header/LogoMain.svg";

function Footer(){
    return( 
        <div className={styles.footer}>
            <img src={logo} alt="logo"/>
        </div>
    )
}

export default Footer;