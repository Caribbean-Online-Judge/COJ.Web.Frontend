import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <div className={styles.container}>
          <div className={styles.background}/>
          <Head>
              <title>COJ</title>
              <meta name="description" content="Caribbean Online Judge" />
              <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
              <h1 className={styles.title}>
                  Next this will be the <span>New</span>{" "}<span>COJ</span>
              </h1>

          </main>
      </div>
  )
}
