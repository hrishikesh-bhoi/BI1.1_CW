import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Movies from './components/Movies'
import MovieByTitle from './components/MovieByTitle'

function App() {
  return <main>
    <Movies />
    <MovieByTitle title="Gully Boy" />
  </main>
}

export default App
