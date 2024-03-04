import styles from "./wherebuy.module.css";
import { Azbuka, Ozon, Wb, Ym, Chaek } from "../Icons/Icons";

const WhereBuy: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <p className={styles.title}></p>
      <p className={styles.title}></p>
      <div className={styles.text}>
        <p className={styles.title}>Где купить</p>
        <p className={styles.description}>Описание</p>
      </div>
      <div className={styles.partners}>
        <Chaek />
        <Ozon />
        <Azbuka />
        <Wb />
        <Ym />
      </div>
    </section>
  );
};

export default WhereBuy;
