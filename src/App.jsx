
import './App.css'
import Grafico from './components/grafico'
import Selecionador from './components/Selecionador'

function App() {
  return (
    <>
      <Grafico valorProp={selectedOption} />
      <Selecionador />
    </>
  )
}

export default App
