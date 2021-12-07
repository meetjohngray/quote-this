import Head from 'next/head'
import data from '../quotes.json'
import Quote from './Quote'

export default function Category() {
  const quotes = data

  const filtered = quotes.filter((quote) => {
    return quote.Tags.includes('Adventure')})
 
  return (
    <>
    <Head>
      <title>quoteThis</title>
      <meta name="description" content="A place to find and store great quotes" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-5xl font-bold'>Quote This</h1>
      <div className="container mx-auto px-4">
        <ul className='list-disc'>
          {filtered.map((quote, i) => {
            return <li key={i}>
                <Quote quote={quote} />
              </li>
            })
          }
        </ul>
      </div>
    </div>
    </> 
  )
}
