"use client";

import { useState } from "react";
import { Store } from "@/store";
import Image from "next/image";
import picture from "/public/static/assets/collab.png";
import plusIcon from "../../../../public/static/assets/plus-icon.svg";
import styles from "./collaboration.module.css";

const Collaboration: React.FC = () => {
  const { collaboration } = Store;
  const [activeCollaboration, setActiveCollaboration] = useState(0);

  const onCollabClick = (collab: number) => setActiveCollaboration(collab);

  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.text}>
          <p className={styles.block_name}> Коллаборации</p>
          <p className={styles.title}>
            {collaboration[activeCollaboration].title}
          </p>
          <p className={styles.description}>
            {collaboration[activeCollaboration].description}
          </p>
          <button className={styles.button}>Подробнее</button>
        </div>
        <Image
          src={picture}
          alt="collab picture"
        />
      </div>
      <div className={styles.collabs}>
        {collaboration.map((item, index) => (
          <div
            key={index}
            className={`${styles.collabs_item} ${
              index == activeCollaboration ? styles.collab_item_active : ""
            } `}
            onClick={() => onCollabClick(index)}
            style={{ backgroundImage: `url(${item.img})` }}
          />
        ))}
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
