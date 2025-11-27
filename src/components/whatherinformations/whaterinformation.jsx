function Whaterinformation({ weather }) {
  if (!weather.main) {
    return <div></div>
  }

    return (
    <div>
        <h2>{weather.name}</h2>
        <div>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}/>
            <p>{Math.round(weather.main.temp)}</p>
        </div>
        <p>{weather.weather[0].description}</p>
    </div>
  )
}


export default Whaterinformation