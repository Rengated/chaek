"use client";

import { useState } from "react";
import { Store } from "@/store";
import Image from "next/image";
import picture from "/public/static/assets/collab.png";
import styles from "./collaboration.module.css";
import Link from "next/link";

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

        <Link
          href="https://chaekshop.ru/"
          target="_blank"
          className={styles.collabs_want}>
          <svg
            width="32"
            height="33"
            viewBox="0 0 32 33"
            xmlns="http://www.w3.org/2000/svg">
            <path
              id="+"
              d="M14.9548 32.6016C13.8502 32.6016 12.9548 31.7061 12.9548 30.6016V2.60156C12.9548 1.49699 13.8502 0.601562 14.9548 0.601562H17.0452C18.1498 0.601562 19.0452 1.49699 19.0452 2.60156V30.6016C19.0452 31.7061 18.1498 32.6016 17.0452 32.6016H14.9548ZM2 19.6468C0.895431 19.6468 0 18.7513 0 17.6468V15.5564C0 14.4518 0.895431 13.5564 2 13.5564H30C31.1046 13.5564 32 14.4518 32 15.5564V17.6468C32 18.7513 31.1046 19.6468 30 19.6468H2Z"
              fill="url(#paint0_linear_1840_3651)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1840_3651"
                x1="16"
                y1="-0.179306"
                x2="16"
                y2="32.6012"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#805399" />
                <stop
                  offset="1"
                  stop-color="#65A30D"
                />
              </linearGradient>
            </defs>
          </svg>

          <span>Хочу коллаб</span>
        </Link>
      </div>
    </section>
  );
};

export default Collaboration;
