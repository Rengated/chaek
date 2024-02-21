"use client";

import styles from "./wherebuy.module.css";
import azbuka from "../../../../public/static/assets/logos/azbuka.svg";
import ozon from "../../../../public/static/assets/logos/ozon.svg";
import wb from "../../../../public/static/assets/logos/wb.svg";
import ym from "../../../../public/static/assets/logos/ym.svg";
import chaek from "../../../../public/static/assets/logos/chaek.svg";
import chaekHover from "../../../../public/static/assets/logos/chaek-hover.svg";
import azbukaHover from "../../../../public/static/assets/logos/azbuka-hover.svg";
import ozonHover from "../../../../public/static/assets/logos/ozon-hover.svg";
import wbHover from "../../../../public/static/assets/logos/wb-hover.svg";
import ymHover from "../../../../public/static/assets/logos/ym-hover.svg";
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
          onMouseEnter={(e) => {
            e.currentTarget.src = chaekHover.src;
          }}
          onMouseOut={(e) => {
            e.currentTarget.src = chaek.src;
          }}
          alt="Чаек"
          className={styles.logo}
        />
        <Image
          src={ozon}
          alt="Озон"
          onMouseEnter={(e) => {
            e.currentTarget.src = ozonHover.src;
            // e.currentTarget.classList.toggle(styles.logo_hovered);
          }}
          onMouseOut={(e) => {
            e.currentTarget.src = ozon.src;
            // e.currentTarget.classList.toggle(styles.logo_hovered);
          }}
          className={styles.logo}
        />
        <Image
          src={azbuka}
          alt="Азбука"
          onMouseEnter={(e) => {
            e.currentTarget.src = azbukaHover.src;
            // e.currentTarget.classList.toggle(styles.logo_hovered);
          }}
          onMouseOut={(e) => {
            e.currentTarget.src = azbuka.src;
            // e.currentTarget.classList.toggle(styles.logo_hovered);
          }}
          className={styles.logo}
        />
        <Image
          src={wb}
          alt="Wildberries"
          onMouseEnter={(e) => {
            e.currentTarget.src = wbHover.src;
            // e.currentTarget.classList.toggle(styles.logo_hovered);
          }}
          onMouseOut={(e) => {
            e.currentTarget.src = wb.src;
            // e.currentTarget.classList.toggle(styles.logo_hovered);
          }}
          className={styles.logo}
        />
        <Image
          src={ym}
          height={48}
          alt="Яндекс Маркет"
          onMouseEnter={(e) => {
            e.currentTarget.src = ymHover.src;
            // e.currentTarget.classList.toggle(styles.logo_hovered);
          }}
          onMouseOut={(e) => {
            e.currentTarget.src = ym.src;
            // e.currentTarget.classList.toggle(styles.logo_hovered);
          }}
          className={styles.logo}
        />
      </div>
    </section>
  );
};

export default WhereBuy;
