import { useState } from 'react'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Contact />
      <Footer />
    </>
  )
}

export default App
