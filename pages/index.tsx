import Head from 'next/head'
import data from '../quotes.json'

export default function Home() {
  const quotes = data
  // console.log(quotes)
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='text-5xl font-bold'>Quote This</h1>
      <ul>
        {quotes.map((quote, i) => {
          return <li key={i}>{quote.text}</li>
        })}
      </ul>
    </div>
  )
}
