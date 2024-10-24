import { useSession, signIn, signOut } from 'next-auth/react'
import styles from './Header.module.css'
import Link from 'next/link'

export function Header() {
  const { data: session, status } = useSession()

  return (
    <header className={`${styles.header}`}>
      <section className={`${styles.header__content}`}>
        <nav className={`${styles.nav}`}>
          <Link href="/">
            <h1 className={`${styles.nav__logo}`}>
              Tarefas<span>+</span>
            </h1>
          </Link>
          {session?.user && (
            <Link href="/dashboard" className={`${styles.nav__link}`}>
              Meu painel
            </Link>
          )}
        </nav>

        {status === 'loading' ? (
          <></>
        ) : session ? (
          <button className={`${styles.login}`} onClick={() => signOut()}>
            Olá, <span>{session?.user?.name}</span>
          </button>
        ) : (
          <button
            className={`${styles.login}`}
            onClick={() => signIn('google')}
          >
            Acessar
          </button>
        )}
      </section>
    </header>
  )
}
