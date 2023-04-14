
import './App.css'
import Footer from './components/Footer'
import Copiright from './components/Footer/copyright'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Mainsection from './components/Main'
import Note from './components/Footer/note'

function App() {


  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Mainsection/>
      <Form/>
      <Footer/>
      <Copiright/>
      <Note/>
    </div>
  )
}

export default App
