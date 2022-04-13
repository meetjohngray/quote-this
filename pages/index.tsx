import Head from 'next/head'
import SingleQuote from './SingleQuote'
import data from '../quotesId.json'

const Home = () => {
  const quotes = data
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  return (
    <>
     <Head>
      <title>quoteThis</title>
      <meta name="description" content="A place to find and store great quotes" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <div className='relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20'>
      <SingleQuote quote = {randomQuote} />
    </div>
    </>
  )
}

export default Home
