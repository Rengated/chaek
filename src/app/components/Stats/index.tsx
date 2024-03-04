import styles from "./stats.module.css";
import bush from "../../../../public/static/assets/icons/bush.svg";
import cart from "../../../../public/static/assets/icons/cart.svg";
import house from "../../../../public/static/assets/icons/house.svg";
import lightning from "../../../../public/static/assets/icons/lightning.svg";
import spot from "../../../../public/static/assets/spot.svg";
import smile from "../../../../public/static/assets/smile.svg";
import personLeft from "../../../../public/static/assets/person-left.png";
import personRight from "../../../../public/static/assets/person-right.png";
import Image from "next/image";
import { position } from "@chakra-ui/react";

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
            <div className={styles.animation}>
              <Image
                src={personLeft}
                objectFit="contain"
                alt=""
                className={styles.collab_picture}
              />
              <Image
                src={smile}
                alt=""
                className={styles.collab_picture}
              />
              <Image
                src={personRight}
                alt=""
                className={styles.collab_picture}
              />
            </div>
            <Image
              src={spot}
              alt=""
              className={styles.collab_picture_spot}
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
