import base from './json/base.json'
import card from './json/card.json'
import contact from './json/contact.json'

export default function locale() {
  const mergedLang = {...base ,...card, ...contact}

  return mergedLang
}
