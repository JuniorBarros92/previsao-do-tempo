import './Whaterinformations5day.css'
import WeatherIcon from '../icons/WeatherIcons.jsx'

function convertDate(forecast) {
  const date = new Date(forecast.dt * 1000).toLocaleDateString('pt-BR', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
  })
  return date.charAt(0).toUpperCase() + date.slice(1)
}

function getDailyForecasts(list) {
  const dailyForecasts = {}
  for (const forecast of list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString()
    if (!dailyForecasts[date]) {
      dailyForecasts[date] = forecast
    }
  }
  return dailyForecasts
}

function Whaterinformations5day({ weather5days }) {
  if (!weather5days.list) {
    return null
  }

  const dailyForecasts = getDailyForecasts(weather5days.list)


  return (
    <div className='weather-container-5days'>
      <h3> Próximos 5 dias</h3>
      <div className='weather-list'>
      {Object.values(dailyForecasts).map((forecast) => (
        <div key={new Date(forecast.dt * 1000).toLocaleDateString()} className='forecast-day'>
          <p>{convertDate(forecast)}</p>
          <WeatherIcon type={forecast.weather[0].main} size={56} />
          <p>{Math.round(forecast.main.temp)}ºC</p>
          <p>{forecast.weather[0].description}</p>
          <p>{Math.round(forecast.main.temp_min)} ºC min / {Math.round(forecast.main.temp_max)} ºC max</p>
        </div>
      ))}

      </div>
    </div>
  )
}


export default Whaterinformations5day