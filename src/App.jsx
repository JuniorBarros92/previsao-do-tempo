import {  useRef } from 'react'
import axios from 'axios' 

import './App.css'

function App() {
 // const [count, setCount] = useState(0)
  const inputRef = useRef()

   async function searchCity() {
    const city = inputRef.current.value
    const key = "8023cfe49f474657b5d303db9c21cdaf"   
    const url = `https://api.openweathermap.org/data/2.5/weather?${city}&appid=${key}`
    const data = await axios.get(url)
    console.log(data)
  
  
  }

  return (
    <div>
      
        <h1>Previsao do tempo</h1>
        <input ref={inputRef} type="text" placeholder='Digite o nome da cidade'/>
        <button onClick={searchCity}>Buscar</button>
    </div>
  )
}

export default App
