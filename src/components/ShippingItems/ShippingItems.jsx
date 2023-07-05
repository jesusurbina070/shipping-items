import FilterTable from "./components/FilterTable/FilterTable";
import HeadShipping from "./components/HeadShipping/HeadShipping";
import ShippingTable from "./components/ShippingTable/ShippingTable";
import styles from "./ShippingItems.module.css"

function ShippingItems() {
  return (
    <main className={styles.ShippingItems}>
      <HeadShipping />
      <FilterTable />
      <ShippingTable/>
    </main>
  );

}

export default ShippingItems;
