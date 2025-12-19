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
      <DayForecast />
      <DailyForecast />
      <HourlyForecast />
    </main>
  )
}

export default App
