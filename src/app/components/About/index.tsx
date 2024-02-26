import styles from "./about.module.css";
import bg from "../../../../public/videos/bg.mp4";

const About: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <video
        autoPlay
        loop
        playsInline
        muted>
        <source
          src={bg as unknown as string}
          type="video/mp4"
        />
      </video>
      <h1 className={styles.title}>
        ЧАЁК – проект, посвященный китайскому чаю в современном стиле
      </h1>
      <p className={styles.subtitle}>
        Мы – это интернет-магазин, магазин, познавательный и интересный контент
      </p>
    </section>
  );
};

export default About;
