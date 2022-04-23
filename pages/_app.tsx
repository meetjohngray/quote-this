import '../styles/globals.css'
import { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout >
      <Head>
        <title>quoteThis</title>
        <meta name="description" content="A place to find and store great quotes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp
