import { NavMenu } from "../NavMenu"
import { ShippingItems } from "../ShippingItems"
import styles from "./Layout.module.css"


function Layout() {
  return (
    <section className={styles.Layout}>
      <NavMenu />
      <ShippingItems/>
    </section>
  )
}

export default Layout