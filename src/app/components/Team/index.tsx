"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useCallback } from "react";
import arrowLeft from "../../../../public/static/assets/icons/arrow-left.svg";
import arrowRight from "../../../../public/static/assets/icons/arrow-right.svg";
import Image from "next/image";
import member from "../../../../public/static/assets/Card.png";
import styles from "./team.module.css";

const Team: React.FC = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    (sliderRef.current as any).slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    (sliderRef.current as any).swiper.slideNext();
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
          <SwiperSlide>
            <Image
              src={member}
              alt="member"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={member}
              alt="member"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={member}
              alt="member"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={member}
              alt="member"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={member}
              alt="member"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <button className={styles.join_button}>Хочу в команду</button>
    </section>
  );
};

export default Team;
