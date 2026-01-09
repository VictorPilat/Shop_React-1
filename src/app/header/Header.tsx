import styles from  "./header.module.css"


export function Header() {
  return (
    <header className={styles.header}>

        <nav className={styles.links}>
            <span>КАТАЛОГ</span>
            <span>ПРО НАС</span>
            <span>КОНТАКТИ</span>
        </nav>

        <div className={styles.logo}>
          DRONES
        </div>

        <div className={styles.profile}>
            <div className={styles.bag}>
                🛒
            </div>
            <div className={styles.user}>
                👤
            </div>
        </div>

    </header>
  )
}
