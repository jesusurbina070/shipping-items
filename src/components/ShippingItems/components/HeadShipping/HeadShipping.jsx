import styles from "./HeadShipping.module.css"
import {
  HiOutlineCloudArrowUp,
  HiOutlineCubeTransparent,
} from "react-icons/hi2";

function HeadShipping() {
  return (
    <section className={styles.HeadShipping}>
      <h2 className={styles.HeadShipping__title}>Shipping Items</h2>
      <div className={styles.HeadShipping__buttonsContainer}>
        <button className={styles.HeadShipping__button_first}>
          <HiOutlineCloudArrowUp />
          Export CSV
        </button>
        <button className={styles.HeadShipping__button_second}>
          <HiOutlineCubeTransparent />
          Add New Shipment
        </button>
      </div>
    </section>
  );
}

export default HeadShipping;
