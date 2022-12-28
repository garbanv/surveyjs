import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>SurveyJs test</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            SurveyJs test&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="https://platformable.com/static/5319a443d00bd1eee2efee3fa63ac32c/bc86d/logo.webp"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={140}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          {/* <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          /> */}
          SurveyJs Test Page
          {/* <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div> */}
        </div>

        <div className={styles.grid}>
      <Link href="/survey">
     <p href="" style={{backgroundColor:"purple", color:'white', padding:"5px", borderRadius:"20px",}}> Go to Survey</p>
      </Link>

      <Link href="/creator">
      <p href="" style={{backgroundColor:"blue", color:'white', padding:"5px", borderRadius:"20px",}}> Create Survey</p>
      </Link>

       

         

        
        </div>
      </main>
    </>
  )
}
