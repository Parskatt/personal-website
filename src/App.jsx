import Navigation from './components/Navigation'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50">
      <Navigation />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
