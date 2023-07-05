import styles from "./Menu.module.css";
import { FaTruck, FaCoins } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { RiSendPlaneLine, RiHome7Line } from "react-icons/ri";
import { TbMessageCircle } from "react-icons/tb";

function Menu() {
  return (
    <nav className={styles.Menu}>
      <h5 className={styles.Menu__title}>MENU</h5>
      <ul className={styles.Menu__ul}>
        <li className={styles.Menu__li}>
          <a className={styles.Menu__a} href="">
            <RiHome7Line />
            Dashboard
          </a>
        </li>
        <li className={styles.Menu__li}>
          <a className={styles.Menu__a__active} href="">
            <FaTruck /> Shipping
          </a>
        </li>
        <li className={styles.Menu__li}>
          <a className={styles.Menu__a} href="">
            <GrGroup /> Clients
          </a>
        </li>
        <li className={styles.Menu__li}>
          <a className={styles.Menu__a} href="">
            <RiSendPlaneLine /> Tracking
          </a>
        </li>
        <li className={styles.Menu__li}>
          <a className={styles.Menu__a} href="">
            <TbMessageCircle /> Message
          </a>
        </li>
        <li className={styles.Menu__li}>
          <a className={styles.Menu__a} href="">
            <FaCoins />
            Finance
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
