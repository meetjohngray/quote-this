import data from '../quotesId.json'
import Quote from '../components/SingleQuote'

export default function Category() {
  const quotes = data

  const filtered = quotes.filter((quote) => {
    return quote.Tags.includes('Adventure')})
 
  return (
    <div className='flex flex-col justify-center items-center'>
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
  )
}
