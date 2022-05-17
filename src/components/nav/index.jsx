import { Link } from 'solid-app-router'
import styles from './nav.module.css'

const index = () => {
  return (
    <>
      <nav className={styles.nav}>
        <Link className={styles.item} href="/">
          Home
        </Link>
        <Link className={styles.item} href="/page">
          Page Not Found
        </Link>
      </nav>
    </>
  )
}

export default index
