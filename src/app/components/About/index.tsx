import styles from "./about.module.css";

const About: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <video
        autoPlay
        loop
        muted>
        <source
          src={require("../../../../public/videos/bg.mp4")}
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
