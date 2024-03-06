"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import { Store } from "@/store";
import arrowLeft from "../../../../public/static/assets/icons/arrow-left.svg";
import arrowRight from "../../../../public/static/assets/icons/arrow-right.svg";
import Image from "next/image";
import styles from "./team.module.css";
import VanillaTilt from "vanilla-tilt";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";

const Team: React.FC = () => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  const nextSlide = () => {
    (swiper as unknown as SwiperClass).slideNext();
  };

  const prevSlide = () => {
    (swiper as unknown as SwiperClass).slidePrev();
  };
  const { team } = Store;

  useEffect(() => {
    VanillaTilt.init(
      document.querySelectorAll(".tilt-element") as unknown as HTMLElement
    );
  }, []);

  return (
    <section className={styles.wrapper}>
      <ShaderGradientCanvas
        importedFiber={{ ...fiber, ...drei, ...reactSpring }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          width: "100vw",
        }}>
        <ShaderGradient
          control="query"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.8&cAzimuthAngle=270&cDistance=0.5&cPolarAngle=180&cameraZoom=28&color1=%23543465&color2=%23805399&color3=%23000000&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=50&frameRate=10&gizmoHelper=hide&grain=off&lightType=env&pixelDensity=0.1&positionX=-0.1&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.4&rotationX=0&rotationY=130&rotationZ=70&shader=defaults&type=sphere&uAmplitude=3.2&uDensity=0.1&uFrequency=5.5&uSpeed=0.3&uStrength=0.3&uTime=0&wireframe=false"
        />
      </ShaderGradientCanvas>
      <p className={styles.title}>Команда</p>
      <p className={styles.subtitle}>Мы</p>
      <div className={`${styles.description_wrapper} container`}>
        <p className={styles.description}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo con Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        </p>
        <div className={styles.arrows}>
          <button
            className={styles.button}
            onClick={prevSlide}>
            <Image
              src={arrowLeft}
              alt="arrow left"
            />
          </button>
          <button
            className={styles.button}
            onClick={nextSlide}>
            <Image
              src={arrowRight}
              alt="arrow  right"
            />
          </button>
        </div>
      </div>

      <div className={styles.team}>
        <Swiper
          onSwiper={(swiper: SwiperClass) => {
            setSwiper(swiper);
          }}
          slidesPerView={"auto"}
          loop={true}
          spaceBetween={16}>
          {[...team, ...team, ...team].map((person, index) => (
            <SwiperSlide
              key={index}
              className={styles.slide}>
              <div
                className={`tilt-element ${styles.slide_content}`}
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
