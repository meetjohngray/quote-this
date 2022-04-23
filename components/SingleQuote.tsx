import React, { useState } from "react"
import { Quote } from "../model"
import { Reveal, Tween } from 'react-gsap'
import QuoteDetails from "./QuoteDetails"
// import detailsPresent from "../utils/displayHelpers"

interface Props {
  quote: Quote
}

export default function SingleQuote({quote}: Props) {
  const [showDetails, setShowDetails] = useState<boolean>(false)
  const clickHandler = () => setShowDetails(!showDetails)
  
  const detailsPresent = (quote) => {
    if (quote.Source || quote.Rating || quote.Tags) {
      return true
    }
  } 
  return (
    <Reveal repeat>
      <Tween from={{ opacity: 0 }} duration={4}>
          <div className='opacity-65 mt-3' style={{height: 'auto'}}>
            <p className = 'text-3xl pb-5'>{quote.Quote}</p>
            <p className = 'text-2xl'>~ {(quote.Author) ? quote.Author : 'Unknown'} </p>
            <Tween to={{ opacity: 1 }} duration={2}>
              <div className ='opacity-0'>
                { showDetails ? <QuoteDetails quote={quote} />: '' }
                <p className = 'text-center text-blue-800 opacity-100 pt-5' onClick={clickHandler}>
                { detailsPresent(quote) ? (!showDetails ? `More...` : `Less...`) : '' }
                </p>
              </div>
            </Tween>  
        </div>
      </Tween>
    </Reveal>
  )
}