import { GetServerSideProps } from 'next'
import styles from '@/styles/Dashboard.module.css'
import Head from 'next/head'
import { authOptions } from '../api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'

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

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions)
  console.log(session)

  return {
    props: {},
  }
}
