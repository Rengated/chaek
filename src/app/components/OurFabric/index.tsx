"use client";
import Image from "next/image";
import styles from "./ourfabric.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import picture from "../../../../public/static/assets/swiper-photo.png";

const OurFabric: React.FC = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.textbox}>
          <p className={styles.title}>Собственное производство</p>
          <p className={styles.description}>
            Под каждый чай мы заранее продумываем концепцию, его дизайн и
            итоговый вкус. При этом большой упор идет именно на качество
            первоначального сырья. Эти чаи делаются в ограниченном тираже, и их
            смело можно называть крафтовыми. У нас нет задачи делать много
            однотипного чая проходного качества в больших объемах. <br></br>
            <br></br>
            Такого и так полно. Делать интересные чаи высокого уровня –{" "}
            <br></br>вот это наш путь.
          </p>
          <button className={styles.button}>Подробнее</button>
        </div>
        <div className="slider">
          <Swiper
            navigation={true}
            pagination={true}
            modules={[Pagination, Navigation]}
            className={styles.swiper}>
            <SwiperSlide>
              <Image
                src={picture}
                alt="picture"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={picture}
                alt="picture"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={picture}
                alt="picture"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={styles.grid}>
        <div className="">
          <p>Фермеры</p>
          <span>Описание</span>
        </div>
        <div className="">
          <p>8</p>
          <span>Описание</span>
        </div>
        <div className="">
          <p>Фермеры</p>
          <span>Описание</span>
        </div>
        <div className="">
          <p>Фермеры</p>
          <span>Описание</span>
        </div>
        <div className="">
          <p>Фермерские чаи</p>
          <span>Описание</span>
        </div>
        <div className="">
          <p>Мастер</p>
          <span></span>
        </div>
        <div className="">
          <p>12</p>
          <span>Описание</span>
        </div>
        <div className="">
          <p>Фермеры</p>
          <span>Описание</span>
        </div>
        <div className="">
          <p>Фермеры</p>
          <span>Описание</span>
        </div>
      </div>
    </section>
  );
};

export default OurFabric;
