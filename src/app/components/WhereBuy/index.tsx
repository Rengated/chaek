import styles from "./wherebuy.module.css";
import azbuka from "../../../../public/static/assets/logos/azbuka.svg";
import ozon from "../../../../public/static/assets/logos/ozon.svg";
import wb from "../../../../public/static/assets/logos/wb.svg";
import ym from "../../../../public/static/assets/logos/ym.svg";
import chaek from "../../../../public/static/assets/logos/chaek.svg";
import Image from "next/image";

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
        <Image
          src={chaek}
          alt=""
        />
        <Image
          src={ozon}
          alt=""
        />
        <Image
          src={azbuka}
          alt=""
        />
        <Image
          src={wb}
          alt=""
        />
        <Image
          src={ym}
          alt=""
        />
      </div>
    </section>
  );
};

export default WhereBuy;
