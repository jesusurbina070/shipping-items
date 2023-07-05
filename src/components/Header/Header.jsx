import User from "./components/User";
import styles from "./Header.module.css";
import { GoBell } from "react-icons/go";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Fillo</h1>
      <ul  className={styles.header__ul}>
        <li className={styles.header__li}>
          <button className={styles.header__button}>
            <GoBell />
          </button>
        </li>
        <li className={styles.header__li}>
          <button className={styles.header__button}>
            <HiOutlineExclamationTriangle />
          </button>
        </li>
        <User />
      </ul>
    </header>
  );
}

export default Header;
