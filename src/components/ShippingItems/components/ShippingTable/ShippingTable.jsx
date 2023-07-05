import { CiSearch } from "react-icons/ci";
import { LuCalendarDays } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiCaretLeftThin, PiCaretRightThin } from "react-icons/pi";
import styles from "./ShippingTable.module.css";
import { IoIosCode } from "react-icons/io";
import ShippingItem from "./components/ShippingItem";
function ShippingTable() {
  return (
    <section className={styles.ShippingTable}>
      <header className={styles.header}>
        <h2 className={styles.header__title}>Incoming Orders</h2>
        <form className={styles.header__form}>
          <label className={styles.header__searh} htmlFor="">
            <CiSearch />
            <input
              className={styles.header__searhInput}
              type="text"
              placeholder="Search here"
            />
          </label>
          <div className={styles.header__dropdown}>
            <LuCalendarDays />
            <p className={styles.header__dropdownText}>Last 7 days</p>
            <RiArrowDropDownLine size="1rem" />
          </div>
        </form>
      </header>
      <table className={styles.table}>
        <tr className={styles.table__row}>
          <th className={styles.table__head}>
            <input className={styles.table__checkbox} type="checkbox" />
            Processing Status
          </th>
          <th className={styles.table__head}>Name</th>
          <th className={styles.table__head}>Ship Status</th>
          <th className={styles.table__head}>
            Order Date <IoIosCode />
          </th>
          <th className={styles.table__head}>Order Number</th>
          <th className={styles.table__head}>Shipping Method</th>
          <th className={styles.table__head}>Country</th>
          <th className={styles.table__head}>Action</th>
        </tr>
        <ShippingItem />
        <ShippingItem />
        <ShippingItem />
        <ShippingItem />
        <ShippingItem />
        <ShippingItem />
      </table>
      <footer className={styles.footerTable}>
        <p className={styles.footerTable__pages}>Showing 1 - 10 of 100</p>
        <ul className={styles.footerTable__ul}>
          <a className={styles.footerTable__button} href="">
            <PiCaretLeftThin size="1rem" />
          </a>
          <div className={styles.footerTable__containerButtons}>
            <a className={styles.footerTable__button_active} href="">
              1
            </a>
            <a className={styles.footerTable__button} href="">
              2
            </a>
            <a className={styles.footerTable__button} href="">
              3
            </a>
            <a className={styles.footerTable__longButton} href="">
              ...
            </a>
            <a className={styles.footerTable__button} href="">
              6
            </a>
          </div>
          <a className={styles.footerTable__buttonArrow_active} href="">
            <PiCaretRightThin size="1rem" />
          </a>
        </ul>
      </footer>
    </section>
  );
}

export default ShippingTable;
