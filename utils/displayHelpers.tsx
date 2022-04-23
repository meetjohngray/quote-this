import { Quote } from "../model"

interface Props {
  quote: Quote
}

export default function detailsPresent ({quote}: Props) {
  if (quote.Source || quote.Rating || quote.Tags) {
    return true
  }
} 