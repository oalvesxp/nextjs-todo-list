import { Html, Head, Main, NextScript } from 'next/document'
import { geistSans, geistMono } from './fonts'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
