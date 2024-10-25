import { HTMLProps } from 'react'
import styles from './TextArea.module.css'
import { geistSans } from '@/pages/fonts'

export function TextArea({ ...rest }: HTMLProps<HTMLTextAreaElement>) {
  return (
    <textarea
      {...rest}
      className={`${styles.textArea} ${geistSans.variable}`}
    ></textarea>
  )
}
