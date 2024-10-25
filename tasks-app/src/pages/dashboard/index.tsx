import { GetServerSideProps } from 'next'
import { authOptions } from '../api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import { TextArea } from '@/components/textarea'
import styles from '@/styles/Dashboard.module.css'
import Head from 'next/head'

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Tarefas+ | Meu painel de tarefas</title>
      </Head>
      <div className={`${styles.container}`}>
        <main className={`${styles.main}`}>
          <section className={`${styles.content}`}>
            <div className={`${styles.content__form}`}>
              <div className={`${styles.content__form}`}>
                <h1 className={`${styles.content__form__title}`}>
                  Qual sua tarefa?
                </h1>
                <form>
                  <TextArea placeholder="Digite qual sua tarefa" />
                  <div className={`${styles.content__form__checkboxArea}`}>
                    <input type="checkbox" className={`${styles.checkbox}`} />
                    <label>Deixar essa tarefa pública?</label>
                  </div>
                  <button type="submit" className={`${styles.button}`}>
                    Publicar
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions)
  if (!session?.user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
