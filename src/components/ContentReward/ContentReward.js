import React from "react";
import { Button, Skeleton } from "antd";
import styles from "./ContentReward.module.css";

const ContentReward = () => {
  //   const [active, setActive] = React.useState(false);
  return (
    <div className="content-reward-container">
      <div className={styles.featuresHeading}>
        <p>Phần thưởng hấp dẫn</p>
      </div>
      {/* <div class="column-1">
        <Skeleton.Image active={active} />
      </div>

      <div class="column-2">
        <Skeleton.Image active={active} />
        <div className="information"></div>
      </div>
      <div class="column-3">
        <Skeleton.Image active={active} />
        <div className="information"></div>
      </div> */}
      <Skeleton active />
      <Button className={styles.buttonDisabled} disabled>
        Xem cách hoạt động
      </Button>
    </div>
  );
};

export default ContentReward;
