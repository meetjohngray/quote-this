import SingleQuote from '../components/SingleQuote'
import data from '../quotesId.json'

const Home = () => {
  const quotes = data
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  return (
     <div className='relative px-4 py-10 bg-white dark:bg-slate-800 text-slate-900 dark:text-lime-700 shadow-lg sm:rounded-3xl sm:p-20 sm:p-6 md:py-10 md:px-8"'>
      <SingleQuote quote = {randomQuote} />
    </div>
  )
}

export default Home
