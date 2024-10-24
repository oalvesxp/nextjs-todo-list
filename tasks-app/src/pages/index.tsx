import Head from 'next/head'
import Image from 'next/image'
import localFont from 'next/font/local'
import styles from '@/styles/Home.module.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Tarefas+ | Organize suas tarefas de forma fácil</title>
        <meta
          name="description"
          content="Organize suas tarefas de forma fácil"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/** Body content */}
      <div
        className={`${styles.container} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={`${styles.main}`}>
          <div className={`${styles.logo}`}>
            <Image
              className={`${styles.hero}`}
              alt="Logo Tarefas+"
              src="/assets/hero.png"
              width={579}
              height={353}
              priority
            />
          </div>
          <h1 className={`${styles.title}`}>
            Sistema feito para você organizar <br /> seus estudos e tarefas
          </h1>
        </main>
      </div>
    </>
  )
}
