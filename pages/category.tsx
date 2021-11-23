import Head from 'next/head'
import data from '../quotes.json'
import Quote from './Quote'

export default function Category() {
  const quotes = data

  const filtered = quotes.filter((quote) => {
    return quote.Tags.includes('Adventure')})
 
  return (
    <div className='flex flex-col justify-center items-center'>
      <Head>
        <title>quoteThis</title>
        <meta name="description" content="A place to find and store great quotes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='text-5xl font-bold'>Quote This</h1>
      <ul>
        {filtered.map((quote, i) => {
          return <li key={i}>
              <Quote quote={quote} />
            </li>
          })
        }
      </ul>
    </div>
  )
}
