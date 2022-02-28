import React from "react";

export default function Quote(props: any) {
  return (
    <div className='opacity-50 mt-3'>
      <p className = 'text-3xl pb-5'>{props.quote.Quote}</p>
      <p className = 'text-2xl'>~ {(props.quote.Author) ? props.quote.Author : 'Unknown'} </p>
    </div>
  )
}