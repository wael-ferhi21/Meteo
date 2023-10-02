import React, { useEffect, useState } from 'react'
import './App.css'
import getWeatherForCity from './services/weatherServices';
  
function App() {
  const [query,setQuery]=useState('tunisia');
  const [weatherData,setWeatherData]=useState({})
  const [error, seterror] = useState(null);
  const searchWeather=(city)=>{
    getWeatherForCity(city)
    .then((result) => setWeatherData(result.data)); 
  };
  useEffect(()=>{
    try {
      searchWeather('tunisia')
    }catch (error) {
      seterror(error);
    }
  },[])
  const renderContent = () => {
    if (error) {
      return (
        <div>{error}</div>
      )
    }else {

      return (<div className='container my-5'>
    <h1 className='text-cneter center'>Application Méteo </h1>
    <form action="">
    <div className='search-box'> 
      <input type="text" placeholder="tapez le nom de ville" 
             className='form-control text-muted form-rounded p-4 shawdow-sm' 
             onChange={event=>setQuery(event.target.value)} />
<button className='btn btn-primary' onClick={(e)=>{
  e.preventDefault()
  searchWeather(query);}}> Rechercher </button>
</div>
    </form>
    <div className=' card rounded my-3 shadow-lg back-card'>
<div className='card-top text-center my-3'></div>
<div className='city-name my-3'>

<p> {weatherData.name}</p>

</div>
    </div>
  </div>
  )
  }
  }
  return (
    <div>
      {renderContent()}
    </div>
  )
}

export default App
