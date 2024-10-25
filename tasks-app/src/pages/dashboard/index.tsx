import { GetServerSideProps } from 'next'
import { authOptions } from '../api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import { TextArea } from '@/components/textarea'
import { FaShare, FaTrash } from 'react-icons/fa'
import styles from '@/styles/Dashboard.module.css'
import Head from 'next/head'
import { db } from '@/services/firebaseConnection'
import { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import {
  addDoc,
  collection,
  query,
  orderBy,
  where,
  onSnapshot,
} from 'firebase/firestore'

interface DashboardProps {
  user: {
    email: string
  }
}

interface TasksProps {
  id: string
  created: Date
  public: boolean
  task: string
  author: string
}

export default function Dashboard({ user }: DashboardProps) {
  const [input, setInput] = useState('')
  const [publicTask, setPublicTask] = useState(false)
  const [tasks, setTasks] = useState<TasksProps[]>([])

  useEffect(() => {
    async function loadTasks() {
      const tasksRef = collection(db, 'tasks')
      const qry = query(
        tasksRef,
        orderBy('created', 'desc'),
        where('user', '==', user?.email)
      )

      onSnapshot(qry, (snapshot) => {
        let list = [] as TasksProps[]

        snapshot.forEach((doc) => {
          list.push({
            id: doc.id,
            created: doc.data().created,
            public: doc.data().public,
            task: doc.data().task,
            author: doc.data().user,
          })
        })

        setTasks(list)
      })
    }

    loadTasks()
  }, [user?.email])

  function handleChangePublic(e: ChangeEvent<HTMLInputElement>) {
    setPublicTask(e.target.checked)
  }

  async function handleRegisterTask(e: FormEvent) {
    e.preventDefault()

    if (input === '') return

    try {
      await addDoc(collection(db, 'tasks'), {
        task: input,
        created: new Date(),
        user: user?.email,
        public: publicTask,
      })

      setInput('')
      setPublicTask(false)
    } catch (err) {
      console.log(err)
    }
  }

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
                <form onSubmit={handleRegisterTask}>
                  <TextArea
                    placeholder="Digite qual sua tarefa"
                    value={input}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                      setInput(e?.target.value)
                    }
                  />
                  <div className={`${styles.content__form__checkboxArea}`}>
                    <input
                      type="checkbox"
                      className={`${styles.checkbox}`}
                      checked={publicTask}
                      onChange={handleChangePublic}
                    />
                    <label>Deixar essa tarefa pública?</label>
                  </div>
                  <button type="submit" className={`${styles.button}`}>
                    Publicar
                  </button>
                </form>
              </div>
            </div>
          </section>
          <section className={`${styles.tasks}`}>
            <h2>Minhas tarefas</h2>

            {tasks.map((item) => (
              <article key={item.id} className={`${styles.item}`}>
                {item.public && (
                  <div className={`${styles.item___tags}`}>
                    <label className={`${styles.item__tags__public}`}>
                      Público
                    </label>
                    <button className={`${styles.item__tags__button}`}>
                      <FaShare size={18} color="#3183ff" />
                    </button>
                  </div>
                )}

                <div className={`${styles.item__content}`}>
                  <p>{item.task}</p>
                  <button className={`${styles.item__content__button}`}>
                    <FaTrash size={18} color="#ea3140" />
                  </button>
                </div>
              </article>
            ))}
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
    props: {
      user: {
        email: session?.user?.email,
      },
    },
  }
}
