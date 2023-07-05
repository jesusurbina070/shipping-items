import styles from "./FilterTable.module.css"

function FilterTable() {
  return (
    <nav className={styles.FilterTable}>
      <ul className={styles.FilterTable__ul}>
        <li className={styles.FilterTable__li}>
          <a className={styles.FilterTable__a_active} href="">Incoming Orders</a>
        </li>
        <li className={styles.FilterTable__li}>
          <a className={styles.FilterTable__a} href="">Created Labels</a>
        </li>
        <li className={styles.FilterTable__li}>
          <a className={styles.FilterTable__a} href="">Shipped</a>
        </li>
        <li className={styles.FilterTable__li}>
          <a className={styles.FilterTable__a} href="">Cancelled</a>
        </li>
        <li className={styles.FilterTable__li}>
          <a className={styles.FilterTable__a} href="">Action Requiered</a>
        </li>
        <li className={styles.FilterTable__li}>
          <a className={styles.FilterTable__a} href="">Awaiting Pickup</a>
        </li>
      </ul>
    </nav>
  );
}

export default FilterTable;
