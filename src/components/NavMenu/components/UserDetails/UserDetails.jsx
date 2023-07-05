import styles from "./UserDetail.module.css"
function UserDetails() {
  return (
    <section className={styles.UserDetails}>
      <figure className={styles.UserDetails__imgContainer}>
        <img className={styles.UserDetails__image}  />
      </figure>
        <div className={styles.UserDetails__container}>
          <h3 className={styles.UserDetails__name}>Anrafat Hamet</h3>
          <p className={styles.UserDetails__rol}>ADMIN</p>
        </div>
      </section>
  )
}

export default UserDetails