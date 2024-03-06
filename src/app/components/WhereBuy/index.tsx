import styles from "./wherebuy.module.css";
import { Azbuka, Ozon, Wb, Ym, Chaek } from "../Icons/Icons";
import Link from "next/link";

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
        <Link
          href="https://chaekshop.ru/"
          target="_blank">
          <Chaek />
        </Link>
        <Link
          href="https://chaekshop.ru/"
          target="_blank">
          <Ozon />
        </Link>
        <Link
          href="https://chaekshop.ru/"
          target="_blank">
          <Azbuka />
        </Link>
        <Link
          href="https://chaekshop.ru/"
          target="_blank">
          <Wb />
        </Link>
        <Link
          href="https://chaekshop.ru/"
          target="_blank">
          <Ym />
        </Link>
      </div>
    </section>
  );
};

export default WhereBuy;
