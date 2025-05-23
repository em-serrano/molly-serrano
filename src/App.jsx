import { Routes, Route } from "react-router";
import './App.css'

// components
import NavBar from './components/NavBar'
import Contact from './components/Contact';

//pages
import Hero from './pages/Hero'
import About from './pages/About'
import Album from './pages/Album'

function App() {
  return (
    <>
      <div className="App">
    <NavBar />
    <Routes>
      <Route path="/molly-serrano/" element={<Hero />} />
      <Route path="/molly-serrano/about" element={<About />} />
      <Route path="/molly-serrano/album" element={<Album />} />
    </Routes>
    <Contact />
        
      </div>
    </>
  )
}

export default App
