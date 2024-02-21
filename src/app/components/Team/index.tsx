"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useCallback, useEffect } from "react";
import arrowLeft from "../../../../public/static/assets/icons/arrow-left.svg";
import arrowRight from "../../../../public/static/assets/icons/arrow-right.svg";
import Image from "next/image";
import member from "../../../../public/static/assets/Card.png";
import styles from "./team.module.css";
import VanillaTilt from "vanilla-tilt";
import { Store } from "@/store";
import { url } from "inspector";

const Team: React.FC = () => {
  const sliderRef = useRef(null);
  const { team } = Store;

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    (sliderRef.current as any).swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    (sliderRef.current as any).swiper.slideNext();
  }, []);

  useEffect(() => {
    VanillaTilt.init(
      document.querySelectorAll(".tilt-element") as unknown as HTMLElement
    );
  }, []);

  return (
    <section className={styles.wrapper}>
      <p className={styles.title}>Команда</p>
      <p className={styles.subtitle}>Мы</p>
      <p className={styles.description}>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo con Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo
      </p>
      <div className={styles.arrows}>
        <button
          className={styles.button}
          onClick={handlePrev}>
          <Image
            src={arrowLeft}
            alt="arrow left"
          />
        </button>
        <button
          className={styles.button}
          onClick={handleNext}>
          <Image
            src={arrowRight}
            alt="arrow  right"
          />
        </button>
      </div>

      <div className={styles.team}>
        <Swiper
          ref={sliderRef}
          slidesPerView={4.25}
          loop={true}
          spaceBetween={16}
          mousewheel={{
            releaseOnEdges: true,
          }}>
          {team.map((person, index) => (
            <SwiperSlide key={index}>
              <div
                className={`tilt-element ${styles.slide}`}
                style={{ backgroundImage: `url(${person.image})` }}
                data-tilt-reverse="true">
                <div className={styles.text}>
                  <p className={styles.name}>{person.name}</p>
                  <p className={styles.position}>{person.position}</p>
                  <p className={styles.position_desc}>{person.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button className={styles.join_button}>Хочу в команду</button>
    </section>
  );
};

export default Team;
