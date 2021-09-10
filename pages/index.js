import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>@marianocodes | SVG Sprites</title>
        <meta name="description" content="Utiliza SVG Sprites" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>SVG Sprites</h1>
        <div className={styles.svgContainer}>
          <a href="https://twitter.com/marianocodes" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 64 64" className={styles.icon}>
              <use xlinkHref="#twitter" />
            </svg>  
          </a>

          <a href="https://www.linkedin.com/in/marianocodes/" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 64 64" className={styles.icon}>
              <use xlinkHref="#linkedin" />
            </svg>
          </a>

        </div>
        <footer><a href="https://twitter.com/marianocodes" target="_blank" rel="noreferrer">@marianocodes</a></footer>
      </main>
    </div>
  )
}
