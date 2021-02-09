import '@/styles/globals.scss'
import { hello } from '@/utils/hello'
import type { AppProps } from 'next/app'
import { FC } from 'react'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  hello()
  return <Component {...pageProps} />
}

export default MyApp
