import styles from "./User.module.css"
import { RiArrowDropDownLine } from "react-icons/ri";

function User() {
  return (
    <div className={styles.User}>
      <img className={styles.User__image} src="" alt="" />
      <p className={styles.User__name}>Anrafat Hamet</p>
      <RiArrowDropDownLine size="1.3rem" />
    </div>
  );
}

export default User;
