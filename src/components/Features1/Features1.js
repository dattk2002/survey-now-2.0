import { Fragment } from "react";
import styles from "./Features.module.css";
import { features1 } from "../../constants/features1";

const Features = () => {
  return (
    <div className={`${styles.featuresWrapper} center`}>
      <div className={styles.featuresHeading}>
        <p>Kiếm tiền đơn giản chỉ với các bước</p>
      </div>
      <div className={`${styles.featuresListWrapper} center`}>
        <div className={`${styles.featuresList} center`}>
          {features1.map(({ feature, description, image}) => {
            return (
              <div className={`${styles.featureDiv} center`}>
              {/* <div className="items"> */}
                <Fragment>
                  <div className={styles.feature}>
                    <p>{feature}</p>
                  </div>
                  <div className={styles.featureDescription}>
                    <p>{description}</p>
                  </div>
                  <div className="items-img">
                    <img className={styles.featureImg} src={image} alt="img" />
                  </div>
                  
                </Fragment>
              </div>
            );
          })}
        </div>
        
      </div>
      {/* <button className={styles.shopBtn}>Start shopping</button> */}
    </div>
  );
};

export default Features;
