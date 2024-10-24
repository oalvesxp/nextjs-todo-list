import styles from '@/styles/Dashboard.module.css'
import Head from 'next/head'

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Tarefas+ | Meu painel de tarefas</title>
      </Head>
      <div className={`${styles.container}`}>
        <h2>Dashboard</h2>
      </div>
    </>
  )
}
