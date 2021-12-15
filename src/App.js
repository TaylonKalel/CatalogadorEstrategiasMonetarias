import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import { retrieveData, retrieveCurrencies } from './services/api'
import { useCookies } from 'react-cookie';
import TelegramIcon from './assets/icons/telegram.png'

function App() {

  const [cookies] = useCookies(['']);
  const [listOfCards, setListOfCards] = useState([])
  const [searchParams, setSearchParams] = useState({
    currency: 'all',
    timeframe: 'M5',
    quadrantes: '24',
    lastUpdate: new Date().toLocaleTimeString('pt-BR')
  })
  const [gales, setGales] = useState('G2')



  const getCards = (objectOfObjects) => {
    const propertiesList = Object.keys(objectOfObjects || {})
    const arrayOfObjects = propertiesList.map(property => objectOfObjects[property])
    return arrayOfObjects
  }

  useEffect(() => {
    retrieveCurrencies()
      .then(response => {
        setSearchParams(oldParams => ({
          ...oldParams,
          currency: cookies.currency ?? 'all',
          timeframe: cookies.timeframe ?? 'M5',
          quadrantes: cookies.quadrantes ?? '24',
          lastUpdate: new Date().toLocaleTimeString('pt-BR')
        }))
      })
  }, [])

  useEffect(() => {
    retrieveData(searchParams.currency, searchParams.timeframe, searchParams.quadrantes, gales)
      .then(response => {
        searchParams.lastUpdate = new Date().toLocaleTimeString('pt-BR');
        setListOfCards(getCards(response.data.ok))
      })
  }, [searchParams, gales])
  // useEffect(() => {
  //   retrieveData(searchParams.currency, searchParams.timeframe, searchParams.quadrantes, gales)
  //     .then(response => {
  //       searchParams.lastUpdate = new Date().toLocaleTimeString('pt-BR');
  //       setListOfCards(getCards(response.data.ok))
  //     })
  // }, [searchParams, gales])

  useEffect(() => {
    const interval = setInterval(() => {
      retrieveData(searchParams.currency, searchParams.timeframe, searchParams.quadrantes, gales)
        .then(response => {
          searchParams.lastUpdate = new Date().toLocaleTimeString('pt-BR');
          setListOfCards(getCards(response.data.ok))
        });

    }, 60000);
    return () => clearInterval(interval);
  }, [searchParams, gales]);


  return (
    <>
      <Header setSearchParams={setSearchParams} searchParams={searchParams} setGales={setGales} />

      <div className='last-update'>
        <a href="https://t.me/agbot_oficial" target='_blank' rel='noreferrer'>
          <img src={TelegramIcon} alt='Telegram Icon' className='telegram-icon' />
        </a>
        <h5>{` Última Atualização: ${searchParams.lastUpdate} UTC-3`}</h5>
      </div>


      <Content gales={gales} listOfCards={listOfCards} />
    </>
  );
}

export default App
