import styles from "../Navbar/Navbar.module.css";
import "../NavbarResponsive/NavbarResponsive.css"
const NavbarResponsive = ({ hamActive, setHamActive }) => {

  const handleClose = () => {
    setHamActive(false);
  };

  return (
    <div className={`${styles.navResWrapper} ${hamActive && styles.open}`}>
      <div className={styles.navResInner}>
        <ul className={`${styles.navResLinks}`}>
        <li>
            <a href="/" className={`${styles.navR} center`} onClick={handleClose}>
              Trang chủ
            </a>
          </li>
          <li>
            <a href="/about" className={`${styles.navR} center`} onClick={handleClose}>
              Về chúng tôi
            </a>
          </li>
          <li>
            <a href="/policy" className={`${styles.navR} center`} onClick={handleClose}>
              Chính sách
            </a>
          </li>
          <li>
            <a href="/under" className={`${styles.navR} center`} onClick={handleClose}>
              Trợ giúp
            </a>
          </li>
        </ul>
        {/* <select className={styles.navRdropDown} name="" id="">
          <span className="flag-icon flag-icon-us"></span>{" "}
          <option value="US">United States</option>
          <span className="flag-icon flag-icon-in"></span>{" "}
          <option value="IN">India </option>
        </select> */}
      </div>
    </div>
  );
};

export default NavbarResponsive;
