import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

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
      <div className={`${styles.container}`}>
        <main className={`${styles.main}`}>
          <div className={`${styles.logo}`}>
            <Image
              className={`${styles.logo__hero}`}
              alt="Logo Tarefas+"
              src="/assets/hero.png"
              width={579}
              height={353}
              priority
            />
          </div>
          <h2 className={`${styles.title}`}>
            Sistema feito para você organizar <br /> seus estudos e tarefas
          </h2>

          <div className={`${styles.info}`}>
            <section className={`${styles.info__box}`}>
              <span>+12 posts</span>
            </section>
            <section className={`${styles.info__box}`}>
              <span>+90 comentários</span>
            </section>
          </div>
        </main>
      </div>
    </>
  )
}
