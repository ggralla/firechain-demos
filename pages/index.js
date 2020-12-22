import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import { w3, fireRead, fireWrite, fireCreate } from '../helpers/firechain.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Firechain</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/ggralla/firechain-js">FireChain.js!</a>
        </h1>

        <p className={styles.description}>
          The web framework for Blockchain.<br/>
          Get started now with {' '}
          <code className={styles.code}>npm install ggralla/firechain-js</code>
        </p>

        <div className={styles.grid}>
          <Link href="/demo">
              <a className={styles.card}>
                <h3>Examples &rarr;</h3>
                <p>See FireChain in action</p>
              </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
