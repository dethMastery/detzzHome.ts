import './App.css'

import { Head, Repo, Member, Contact, Footer } from './component'
import { MusicBox } from './components/music'

function App() {
  return (
    <div className="App">
      <Head bg='https://picsum.photos/1920/1080' />
      <Repo />
      <Member />
      <Contact />
      <Footer />

      <MusicBox />
    </div>
  )
}

export default App