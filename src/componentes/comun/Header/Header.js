import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "./LogoMain.svg";
import CabeceraLink from "./CabeceraLink/CabeceraLink";

function Cabecera(){
    return(
        <header className={styles.cabecera}>
            <Link to="/">
                <section className={styles.container}> 
                    <img src={logo} alt="logo"/>
                </section>
            </Link>
            <nav>
                <CabeceraLink url="./">
                    Home
                </CabeceraLink>
                <CabeceraLink url="./video">
                    Nuevo Video
                </CabeceraLink>
            </nav>
        </header>
    )
}

export default Cabecera;