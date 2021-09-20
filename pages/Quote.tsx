import React from "react";

export default function Quote(props: any) {
  return (
    <>
    <p>{props.quote.text}</p>
    <p>~ {props.quote.Author}</p>
    </>
  )
}