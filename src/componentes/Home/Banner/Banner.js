import src from "./BannerMain.svg";
import styles from "./Banner.module.css";
import CardBanner from "./CardBanner/CardBanner";

function Banner({ color }) {
  return (
    <div className={styles.banner} style={{ backgroundImage: `url("${src}")` }}>
      <div className={styles.gradient} style={{ background: `${color}` }}></div>
      <CardBanner />
    </div>
  );
}

export default Banner;
