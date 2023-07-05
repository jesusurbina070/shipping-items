import Menu from "./components/Menu/Menu"
import UserDetails from "./components/UserDetails/UserDetails"
import styles from "./NavMenu.module.css"


function NavMenu() {
  return (
   <aside className={styles.NavMenu}>
      <UserDetails />
      <Menu />
   </aside> 
  )
}

export default NavMenu