import './App.scss'
import DailyForecast from './components/DailyForecast/DailyForecast'
import DayForecast from './components/DayForecast/DayForecast'
import Header from './components/Header/Header'
import HourlyForecast from './components/HourlyForecast/HourlyForecast'
import SearchBar from './components/SearchBar/SearchBar'

function App() {

  return (
    <main className='app'>
      <Header />
      <SearchBar />
      <div className="app-layout__container">
        <div className="app-layout__left">
          <DayForecast />
          <DailyForecast />
        </div>
        <HourlyForecast />
      </div>
    </main>
  )
}

export default App
