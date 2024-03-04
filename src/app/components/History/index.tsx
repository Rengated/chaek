"use client";
import styles from "./history.module.css";
import example from "../../../../public/static/assets/history-content.png";
import Image from "next/image";
import { useState } from "react";
import { Store } from "@/store";
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";

const History: React.FC = () => {
  const { history } = Store;
  const [activeTile, setActiveTile] = useState(history[0].year);

  const onTileClick = (e: React.MouseEvent<HTMLElement>) => {
    setActiveTile(e.currentTarget.innerHTML);
  };

  return (
    <>
      <section className={styles.wrapper}>
        <ShaderGradientCanvas
          importedFiber={{ ...fiber, ...drei, ...reactSpring }}
          style={{
            position: "absolute",
            top: 0,
            pointerEvents: "none",
            left: 0,
            width: "100vw",
          }}>
          <ShaderGradient
            control="query"
            urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.8&cAzimuthAngle=270&cDistance=0.5&cPolarAngle=180&cameraZoom=28&color1=%234D7C0F&color2=%2365A30D&color3=%23000000&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=50&frameRate=10&gizmoHelper=hide&grain=off&lightType=env&pixelDensity=0.1&positionX=-0.1&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.4&rotationX=0&rotationY=130&rotationZ=70&shader=defaults&type=sphere&uAmplitude=3.2&uDensity=0.1&uFrequency=5.5&uSpeed=0.3&uStrength=0.3&uTime=0&wireframe=false&zoomOut=false"
          />
        </ShaderGradientCanvas>
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
    </>
  );
};

export default History;
