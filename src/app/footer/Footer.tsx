import styles from  "./footer.module.css"



export function Footer() {
  return (
    <footer  className={styles.footer}>
        <div  className={styles.stats}>
            <div className={styles.stat}>
                <h2>1K+</h2>
                <p>Успішних відправок</p>
            </div>

            <div className={styles.stat}>
                <h2>1.5K+</h2>
                <p>Задоволених клієнтів</p>
            </div>

            <div className={styles.stat}>
                <h2>24/7</h2>
                <p>Підтримка клієнтів</p>
            </div>

        </div>
        <div  className={styles.links}>
            <nav className={styles.nav}>
                <a href="#">каталог</a>
                <a href="#">про нас</a>
                <a href="#">контакти</a>
                <a href="#">кошик</a>
                <a href="#">кабінет</a>
            </nav>
        </div>
        <div className={styles.separator}></div>
        <div  className={styles.copyright}>
            <p>© 2025 Drones Bci права захищені</p>
        </div>

    </footer>



  )}