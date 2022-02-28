import Head from 'next/head'
import Quote from './Quote'
import data from '../quotesId.json'

export default function Home() {
  const quotes = data
  let quote = quotes[Math.floor(Math.random() * quotes.length)];
  
  return (
    <div className='relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20'>
      <Quote quote={quote} />
    </div>
  )
}
