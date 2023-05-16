import base from './json/base.json'
import card from './json/card.json'
import contact from './json/contact.json'
import nav from './json/nav.json'
import about from './json/about.json'
import events from './json/events.json'

export default function locale() {
  const mergedLang = {...base ,...card, ...contact, ...nav, ...about, ...events}

  return mergedLang
}
