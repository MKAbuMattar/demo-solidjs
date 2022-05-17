import styles from './PageNotFound.module.css'

const index = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.error}>
          <h1>Page Not Found 404</h1>
        </div>
      </div>
    </>
  )
}

export default index
