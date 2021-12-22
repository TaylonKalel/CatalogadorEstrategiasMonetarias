import { useState, useEffect } from 'react'
import { retrieveCurrencies } from './../services/api'

import CurrencyExchange from '../assets/icons/currencyExchange.svg'
import Stopwatch from '../assets/icons/stopwatch.svg'
import CollectionFill from '../assets/icons/collectionfill.svg'
import Gear from '../assets/icons/gearfill.svg'
import { useCookies } from 'react-cookie';

function Header({
  setSearchParams,
  setGales
}) {
  const [currencies, setCurrencies] = useState([])
  const [cookies, setCookie] = useCookies(['']);
  const [currentCurrency, setCurrentCurrency] = useState(cookies.currency)
  const [timeframeSelect, setTimeframeSelect] = useState(cookies.timeframe)
  const [quadranteSelect, setquadranteSelect] = useState(cookies.quadrantes)
  const [galeSelect, setGaleSelect] = useState(cookies.gale)

  const handleSearchParams = event => {

    switch (event.target.name) {
      case 'quadrantes':
        setquadranteSelect(event.target.value);
        break;
      case 'currency':
        setSearchParams(
          oldParams => ({
            currency: event.target.value,
            timeframe: oldParams.timeframe,
            quadrantes: oldParams.quadrantes,
            lastUpdate: new Date().toLocaleTimeString('pt-BR')
          }))
        setCurrentCurrency(event.target.value);
        break;
      case 'timeframe':
        setSearchParams(
          oldParams => ({
            currency: oldParams.currency,
            timeframe: event.target.value,
            quadrantes: oldParams.quadrantes,
            lastUpdate: new Date().toLocaleTimeString('pt-BR')
          }))
        setTimeframeSelect(event.target.value);
        break;
      default:
        break;
    }
    setSearchParams(oldParams => ({
      ...oldParams,
      [`${event.target.name}`]: event.target.value
    }))
    // setCurrentCurrency(event.target.value);
    setTimeout(() => setCookie(event.target.name, event.target.value, { path: '/' }), 100);
  }

  const handleGales = event => {
    setGaleSelect(event.target.value);
    setCookie(event.target.name, event.target.value, { path: '/' });
    setGales(event.target.value);
  }
  useEffect(() => {
    retrieveCurrencies()
      .then(response => {
        setCurrencies(response.data.ok)
      })
  }, [])

  return (
    <header className="header">
      <label id="version" className="none">version: 1.0.1</label>
      <label>
        <img src={CurrencyExchange} alt='currency-selection' className='header-icon' />
        <select name="currency" id="currency" value={currentCurrency} className="select" onChange={handleSearchParams}>
          <option value='all'>Todos Ativos </option>
          {currencies.map((currency, index) => <option value={currency} key={index}>{currency}</option>)}
        </select>
      </label>

      <label>
        <img src={Stopwatch} alt='timeframe-selection' className='header-icon' />
        <select name="timeframe" id="timeframeSelect" value={timeframeSelect} className="select" onChange={handleSearchParams}>
          <option value="M5">M5 Timeframe</option>
          <option value="M1">M1 Timeframe</option>
          <option value="M15">M15 Timeframe</option>
        </select>
      </label>

      <label>
        <img src={Gear} alt='gale-selection' className='header-icon' />
        <select name="gale" id="galeSelect" className="select" value={galeSelect} onChange={handleGales}>
          <option value="G2">2 Gales</option>
          <option value="G1">1 Gale</option>
          <option value="Mao">Mão Fixa</option>
        </select>
      </label>

      <div className="div">
        <label>
          <img src={CollectionFill} alt='quadrantes-selection' className='header-icon quadrante' id="quadrante" />
          <select name="quadrantes" id="quadrantesSelect" value={quadranteSelect} className="select" onChange={handleSearchParams}>
            <option value="24">24 Quadrantes</option>
            <option value="48">48 Quadrantes</option>
            <option value="96">96 Quadrantes</option>
          </select>
        </label>
      </div>



    </header >
  )
}

export default Header
