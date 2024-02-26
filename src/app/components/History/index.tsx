"use client";
import styles from "./history.module.css";
import example from "../../../../public/static/assets/history-content.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Store } from "@/store";

const History: React.FC = () => {
  const { history } = Store;
  const [activeTile, setActiveTile] = useState(history[0].year);

  const onTileClick = (e: React.MouseEvent<HTMLElement>) => {
    setActiveTile(e.currentTarget.innerHTML);
  };

  return (
    <section className={styles.wrapper}>
      <p className={styles.title}>История</p>
      {history
        .filter((item) => item.year == activeTile)
        .map((item, index) => (
          <div
            className={styles.content}
            key={index}>
            <Image
              src={example}
              alt="slider image"
            />
            <div className={styles.textbox}>
              <p className={styles.year}>{item.year}</p>
              <p className={styles.heading}>{item.title}</p>
              <p className={styles.description}>{item.description}</p>
              <div className={styles.metrics}>
                <div className={styles.metrics_item}>
                  <p className={styles.number}>100</p>
                  <p className={styles.caption}>Caption</p>
                </div>
                <div className={styles.metrics_item}>
                  <p className={styles.number}>100</p>
                  <p className={styles.caption}>Caption</p>
                </div>
                <div className={styles.metrics_item}>
                  <p className={styles.number}>100</p>
                  <p className={styles.caption}>Caption</p>
                </div>
              </div>
            </div>
          </div>
        ))}

      <div className={styles.tiles}>
        {history.map((item, index) => (
          <button
            onClick={onTileClick}
            className={`${styles.button} ${
              activeTile == item.year ? styles.button_active : ""
            }`}
            key={index}>
            {item.year}
          </button>
        ))}
      </div>
    </section>
  );
};

export default History;
