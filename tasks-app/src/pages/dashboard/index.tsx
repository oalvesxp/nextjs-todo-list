import { GetServerSideProps } from 'next'
import { authOptions } from '../api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import { TextArea } from '@/components/textarea'
import styles from '@/styles/Dashboard.module.css'
import Head from 'next/head'
import { FaShare, FaTrash } from 'react-icons/fa'

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
          {/** className={`${}`} */}
          <section className={`${styles.tasks}`}>
            <h2>Minhas tarefas</h2>
            <article className={`${styles.item}`}>
              <div className={`${styles.item___tags}`}>
                <label className={`${styles.item__tags__public}`}>
                  Público
                </label>
                <button className={`${styles.item__tags__button}`}>
                  <FaShare size={18} color="#3183ff" />
                </button>
              </div>
              <div className={`${styles.item__content}`}>
                <p>Primeia tarefa de exemplo</p>
                <button className={`${styles.item__content__button}`}>
                  <FaTrash size={18} color="#ea3140" />
                </button>
              </div>
            </article>
            <article className={`${styles.item}`}>
              <div className={`${styles.item__content}`}>
                <p>Segunda tarefa de exemplo</p>
                <button className={`${styles.item__content__button}`}>
                  <FaTrash size={18} color="#ea3140" />
                </button>
              </div>
            </article>
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
