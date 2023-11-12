import React from "react";
import styles from "./Navbar.module.css";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Navbar = ({ hamActive, setHamActive }) => {
  const handleClick = () => {
    setHamActive(!hamActive);
  };

  const history = useHistory();

  function handleHomeClick() {
    history.push("/"); // Replace '/' with your main default route
  }

  return (
    <nav className={`${styles.navbarWrapper} center`}>
      <div className={`${styles.navbarInner} center`}>
        <button
          className={`${styles.hamburger} ${hamActive && styles.active}`}
          onClick={handleClick}
        >
          <span className={styles.hamburgerLines}></span>
        </button>
        <div className="logo-image" onClick={handleHomeClick}>
          <img src={Logo} alt="logo" className={styles.brand} />
        </div>
        <div className={`${styles.navRight} center`}>
          <div className={styles.navLinksWrapper}>
            <div className={styles.verticalLine}> </div>
            <Link to="/about" className={`${styles.nav} center`}>
              About Us
            </Link>
            <Link to="/policy" className={`${styles.nav} center`}>
              Our Policy
            </Link>
            <Link to="/under" className={`${styles.nav} center`}>
              Help
            </Link>
          </div>
          {/* <div>
            <a href="/login" className={styles.login}>
              Log in
            </a>
            <a href="/signup">
              <button className={styles.signup}>Sign Up</button>
            </a>
          </div> */}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
