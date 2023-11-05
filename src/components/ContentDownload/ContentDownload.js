import React from "react";
import Divider from "@mui/material/Divider";
import qrcode from "../../assets/qr-code.jpg";
import appstore from "../../assets/app-store.png";
import googleplay from "../../assets/google-play.png"
// import "../ContentDownload/ContentDownload.module.css"
import "../ContentDownload/ContendDownload.css"
import styles from "./ContentDownload.module.css";

const ContentDownload = () => {
  return (
    <div className={styles.featuresHeading}>
      <p>Tải ứng dụng Survey Now ngay</p>
      <div className="div-qr-and-store">
        <div className="div-qr">
          <img src={qrcode} alt="qr-code" />
        </div>
        <Divider orientation="vertical" flexItem>
          OR
        </Divider>
        <div className="div-store">
          <img className="img-first" src={appstore} alt="app-store" />
          <img className="img-second" src={googleplay} alt="google-store" />
        </div>
      </div>
    </div>
  );
};

export default ContentDownload;
