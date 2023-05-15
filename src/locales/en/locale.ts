import contact from './json/contact.json'

export default function locale() {
  const mergedLang = {...contact}

  return mergedLang
}
