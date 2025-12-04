import { useState } from 'react'
import axios from 'axios' 
import Whaterinformation from './components/whatherinformations/whaterinformation'
import Whaterinformations5day from './components/Whaterinformations5day/Whaterinformations5day'

import './App.css'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

function App() {
  const [weather, setWeather] = useState()
  const [weather5days, setWeather5days] = useState()
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')

  async function searchCity() {
    const city = query.trim()
    if (!city) return

    setLoading(true)
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=pt_br&units=metric`
      const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&lang=pt_br&units=metric`
      
      const [apiInfo, apiInfo5days] = await Promise.all([
        axios.get(url),
        axios.get(url5days)
      ])
      // debug logs removed before publishing
      
      setWeather(apiInfo.data)
      setWeather5days(apiInfo5days.data)
      setQuery('')
    } catch (error) {
      console.error("Erro ao buscar cidade:", error)
      alert("Cidade não encontrada ou erro na conexão.")
    } finally {
      setLoading(false)
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      searchCity()
    }
  }

  return (
    <div className="container">
      <h1>Previsão do tempo</h1>
      <div className="search-group">
        <input 
          value={query}
          onChange={e => setQuery(e.target.value)}
          type="text" 
          placeholder='Digite o nome da cidade'
          onKeyDown={handleKeyDown}
        />
        <button className="primary" onClick={searchCity} disabled={loading}>
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
      </div>

      {loading && <p className="loading">Carregando...</p>}
      {weather && <Whaterinformation key={`current-${weather.id || weather.name}`} weather={weather}/>}
      {weather5days && <Whaterinformations5day key={`forecast-${weather5days.city?.id || weather5days.city?.name}`} weather5days={weather5days}/>}
    </div>
  )
}

export default App
