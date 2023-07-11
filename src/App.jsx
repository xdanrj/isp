import { useState } from 'react';
import './App.css'
import Grafico from './components/grafico'
import SelecionadorChaves from './components/SelecionadorChaves'


function App() {
  const [selectedOption, setSelectedOption] = useState('latrocinio');
  return (
    <>
      <Grafico selectedOption={selectedOption} />
     
      <SelecionadorChaves setSelectedOption={setSelectedOption} />
      
    </>
  )
}

export default App
