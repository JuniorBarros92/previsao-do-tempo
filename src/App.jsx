import { useState, useRef } from 'react'
import axios from 'axios' 
import Whaterinformation from './components/whatherinformations/whaterinformation'

import './App.css'

function App() {
 const [weather, setWeather] = useState()
  const inputRef = useRef()

   async function searchCity() {
    try {
      const city = inputRef.current.value
      const key = "8023cfe49f474657b5d303db9c21cdaf"
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
      
      const apiInfo = await axios.get(url)
      console.log("Dados da API:", apiInfo.data) // Log para conferir os dados
      setWeather(apiInfo.data)
    } catch (error) {
      console.error("Erro ao buscar cidade:", error)
      alert("Cidade não encontrada ou erro na conexão.")
    }
  }

  return (
    <div>
      
        <h1>Previsao do tempo</h1>
        <input ref={inputRef} type="text" placeholder='Digite o nome da cidade'/>
        <button onClick={searchCity}>Buscar</button>

       {weather && <Whaterinformation  weather={weather}/>}
    </div>
  )
}

export default App
