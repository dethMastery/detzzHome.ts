import card from './json/card.json'
import contact from './json/contact.json'

export default function locale() {
  const mergedLang = {...card, ...contact}

  return mergedLang
}
