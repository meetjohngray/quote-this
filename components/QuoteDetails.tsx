import { Tween } from 'react-gsap'
import { Quote } from "../model"

interface Props {
  quote: Quote
}

export default function QuoteDetails({quote}: Props) {
  return (
    <>
    <Tween from={{ opacity: 0 , height: 0 }} duration={2}>
      <div className ='opacity-1'>
        <p className = 'text-2xl'>{(quote.Source) ? `Source: ${quote.Source}` : ''} </p>
        <p className = 'text-2xl'>{(quote.Rating) ? `Rating: ${quote.Rating}` : ''} </p>
        <p className = 'text-2xl'>{(quote.Tags) ? `Tags: ${quote.Tags}` : ''} </p>
      </div>
    </Tween>
    </>
  )
}