import styles from './Header.module.css'
import Link from 'next/link'

export function Header() {
  return (
    <header className={`${styles.header}`}>
      <section className={`${styles.header__content}`}>
        <nav className={`${styles.nav}`}>
          <Link href="/">
            <h1 className={`${styles.nav__logo}`}>
              Tarefas<span>+</span>
            </h1>
          </Link>
          <Link href="/dashboard" className={`${styles.nav__link}`}>
            Meu painel
          </Link>
        </nav>

        <button className={`${styles.login}`}>Acessar</button>
      </section>
    </header>
  )
}
