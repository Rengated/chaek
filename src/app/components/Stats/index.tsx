import styles from "./stats.module.css";
import bush from "../../assets/icons/bush.svg";
import cart from "../../assets/icons/cart.svg";
import house from "../../assets/icons/house.svg";
import lightning from "../../assets/icons/lightning.svg";
import collab from "../../assets/about-collab.png";
import Image from "next/image";

const Stats: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.stats}>
        <div className={styles.bar}>
          <div className={styles.card}>
            <Image
              width={72}
              height={72}
              className={styles.card_icon}
              src={bush}
              alt="Куст"
            />
            <p className={styles.card_title}>
              40<span>+</span>
            </p>
            <p className={styles.card_description}>Фирменных чаёв</p>
          </div>
          <div className={styles.card}>
            <Image
              width={72}
              height={72}
              className={styles.card_icon}
              src={cart}
              alt="Корзина"
            />
            <p className={styles.card_title}>6</p>
            <p className={styles.card_description}>
              Способов покупки чая. Выбирай удобный тебе!
            </p>
          </div>
          <div className={styles.card}>
            <Image
              width={72}
              height={72}
              className={styles.card_icon}
              src={house}
              alt="Домик"
            />
            <p className={styles.card_title}>
              100<span>+</span>
            </p>
            <p className={styles.card_description}>
              Оптовых клиентов по всей России
            </p>
          </div>
        </div>

        <div className={styles.additional}>
          <div className={`${styles.bar} ${styles.delivery}`}>
            <Image
              height={72}
              width={72}
              src={lightning}
              alt="Молния"
            />
            <p className={styles.delivery_title}>
              Доставка по городу со скоростью света
            </p>
            <p className={styles.delivery_subtitle}>
              Не хочешь выходить из дома? Отправим чай курьером сегодня!
            </p>
          </div>
          <div className={styles.collaboration}>
            <Image
              src={collab}
              alt="picture"
            />
            <p className={styles.collaboration_title}>Коллабы</p>
            <p className={styles.collaboration_subtitle}>
              С художником, гонщиком и основателем Щита. Чай объединяет!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
