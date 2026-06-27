import Header from './Header'
import About from './About'
import Hobbies from './Hobbies'
import Footer from './Footer'
import './App.css'

function App() {
  return (
    <div style={{ backgroundColor: '#eef1f8', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <About />
      <Hobbies />
      <Footer />
    </div>
  )
}

export default App
