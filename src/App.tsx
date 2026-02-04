import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Approach from './components/sections/Approach'
import SelectedWorks from './components/sections/SelectedWorks'
import Skills from './components/sections/Skills'
import Footer from './components/layout/Footer'

export default function App() {
  return (
    <main>
      <Hero />
      <Navbar />
      <Approach />
      <SelectedWorks />
      <Skills />
      <Footer />
    </main>
  )
}