import React, { useState } from "react"
import { Quote } from "../model"
import { Reveal, Tween } from 'react-gsap'

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
            <Tween to={{y:'auto', opacity: 1}} duration={4}>
              <div style={{height:0}} className='opacity-0'>
                { showDetails 
                  ? 
                  (
                    <div>
                      <p className = 'text-2xl'>{(quote.Source) ? `Source: ${quote.Source}` : ''} </p>
                      <p className = 'text-2xl'>{(quote.Rating) ? `Rating: ${quote.Rating}` : ''} </p>
                      <p className = 'text-2xl'>{(quote.Tags) ? `Tags: ${quote.Tags}` : ''} </p>
                    </div>
                  )
                  : ''
                }
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