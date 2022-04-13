import React, { useState } from "react";
import { Quote } from "../model";

interface Props {
  quote: Quote
}

export default function SingleQuote({quote}: Props) {
  const [showDetails, setShowDetails] = useState<boolean>(false)
  const clickHandler = () => setShowDetails(!showDetails)
  
  return (
    <div className='opacity-50 mt-3'>
      <p className = 'text-3xl pb-5'>{quote.Quote}</p>
      <p className = 'text-2xl'>~ {(quote.Author) ? quote.Author : 'Unknown'} </p>
      { showDetails 
        ? 
        (<div className={ showDetails ? 'active:opacity-5 transition ease-in-and-out duration-5000' : 'opacity-0'}>
          <p className = 'text-2xl'>{(quote.Source) ? `Source: ${quote.Source}` : ''} </p>
          <p className = 'text-2xl'>{(quote.Rating) ? `Rating: ${quote.Rating}` : ''} </p>
          <p className = 'text-2xl'>{(quote.Tags) ? `Tags: ${quote.Tags}` : ''} </p>
        </div>) 
        : ''
      }
       <p className = 'text-center text-blue-800 opacity-100 pt-5' 
        onClick={clickHandler}
      >
         { !showDetails ? `More...` : `Less...`} 
  
      </p>
    </div>
  )
}