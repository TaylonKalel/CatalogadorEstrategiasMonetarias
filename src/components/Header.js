import { useState, useEffect } from 'react'
import { retrieveCurrencies } from './../services/api'
import TelegramIcon from './../assets/icons/telegram.png'
import CurrencyExchange from '../assets/icons/currencyExchange.svg'
import Stopwatch from '../assets/icons/stopwatch.svg'
import Gear from '../assets/icons/gearfill.svg'
import { useCookies } from 'react-cookie';


function Header({
  setSearchParams,
  setGales
}) {
  const [currencies, setCurrencies] = useState([])
  const [cookies, setCookie, removeCookie] = useCookies(['']);
  const [currentCurrency, setCurrentCurrency] = useState(cookies.currency)
  const [timeframeSelect, setTimeframeSelect] = useState(cookies.timeframe)
  const [galeSelect, setGaleSelect] = useState(cookies.gale)

  const handleSearchParams = event => {
    switch (event.target.name) {
      case 'currency':
        setCurrentCurrency(event.target.value);       
        break;
      case 'timeframe':
        setTimeframeSelect(event.target.value);
        setTimeout(() => window.location.reload(), 500);
        break;
      case 'gale':
        setGaleSelect(event.target.value);
        break;
      default:
        break;
    }
    setSearchParams(oldParams => ({
      ...oldParams,
      [`${event.target.name}`]: event.target.value
    }))
    setCurrentCurrency(event.target.value);
    setTimeout(() => setCookie(event.target.name, event.target.value, { path: '/' }), 100);
  }

  const handleGales = event => {
    setGales(event.target.value)
  }
  useEffect(() => {
    retrieveCurrencies()
      .then(response => {
        setCurrencies(response.data.ok)
      })
  }, [])

  return (
    <header>

      <label>
        <img src={CurrencyExchange} alt='currency-selection' className='header-icon' />
        <select name="currency" id="currency" value={currentCurrency} className="select" onChange={handleSearchParams}>
          <option value='all'>Todos</option>
          {currencies.map((currency, index) => <option value={currency} key={index}>{currency}</option>)}
        </select>
      </label>

      <label>
        <img src={Stopwatch} alt='timeframe-selection' className='header-icon' />
        <select name="timeframe" id="timeframeSelect" value={timeframeSelect} className="select" onChange={handleSearchParams}>
          <option value="M5">M5</option>
          <option value="M1">M1</option>
          <option value="M15">M15</option>
        </select>
      </label>

      <label>
        <img src={Gear} alt='gale-selection' className='header-icon' />
        <select name="gale" id="galeSelect" className="select" onChange={handleGales}>
          <option value="G2">2 Gales</option>
          <option value="G1">1 Gale</option>
          <option value="Mao">Mão Fixa</option>
        </select>
      </label>

      <a href="https://t.me/agbot_oficial" target='_blank' rel='noreferrer'>
        <img src={TelegramIcon} alt='Telegram Icon' className='telegram-icon' />
      </a>

    </header>
  )
}

export default Header
