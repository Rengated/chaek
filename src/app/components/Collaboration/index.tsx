import Image from "next/image";
import picture from "../../assets/collab.png";
import plusIcon from "../../assets/plus-icon.svg";
import styles from "./collaboration.module.css";

const Collaboration: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.text}>
          <p className={styles.block_name}> Коллаборации</p>
          <p className={styles.title}> Название коллаборации</p>
          <p className={styles.description}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo con
          </p>
          <button className={styles.button}>Подробнее</button>
        </div>
        <Image
          src={picture}
          alt="collab picture"
        />
      </div>
      <div className={styles.collabs}>
        <div className={styles.collabs_item}></div>
        <div className={styles.collabs_item}></div>
        <div className={styles.collabs_item}></div>
        <div className={styles.collabs_item}></div>
        <div className={styles.collabs_item}></div>
        <div className={styles.collabs_want}>
          <Image
            src={plusIcon}
            alt="plus"
          />
          <span>Хочу коллаб</span>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
