import { HiOutlinePencilSquare } from "react-icons/hi2"
import styles from "../ShippingTable.module.css"
import { RiArrowDropDownLine } from "react-icons/ri"

function ShippingItem() {
  return (
    <tr className={styles.table__row}>
    <td className={styles.table__body}>
      <input className={styles.table__checkbox} type="checkbox" />
      <span>Ready to process</span>
    </td>
    <td className={styles.table__body}>Francis Lokossou</td>
    <td className={styles.table__body}>
      <span className={styles.table__status}>In Progress</span>
    </td>
    <td className={styles.table__body}>06/09/2019</td>
    <td className={styles.table__body}>#ABCD-078097</td>
    <td className={styles.table__body}>
      <img className={styles.table__img} src="" alt="" />
      UPS
    </td>
    <td className={styles.table__body}>
      <img className={styles.table__img} src="" alt="" />
      USA
    </td>
    <td className={styles.table__body}>
      <HiOutlinePencilSquare size={"1.3rem"} />
      <RiArrowDropDownLine size="1.3rem" />
    </td>
</tr>
  )
}

export default ShippingItem