import styles from "./Hero.module.css";
import Background from "../../assets/bg.png";
import "../Hero/Hero.css"

const Hero = () => {
  return (
    <div className="hero-container">
      {/* <select className={styles.dropDown}>
        <option value="US">US</option>
        <option value="IN">IN</option>
      </select>
      <div className={`${styles.heroInner}`}>
        <h2 className={styles.headerText}>
          Order groceries for delivery or pickup today
        </h2>
        <div className={styles.slogan}>
          <p>Whatever you want from local stores, brought right to your door</p>
        </div>
        <div className={styles.inputLocation}>
          <i className="fas fa-map-marker-alt"> </i>
          <input type="text" placeholder="Enter your address" />
          <i className={`${styles.arrow} fas fa-arrow-right`}></i>
        </div>
      </div> */}
      <div className="background-image">
        <img src={Background} alt="" />
      </div>
    </div>
  );
};
export default Hero;
