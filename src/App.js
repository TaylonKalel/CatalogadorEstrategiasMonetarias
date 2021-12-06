import { useEffect, useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import { retrieveData, retrieveCurrencies } from './services/api'
import { useCookies } from 'react-cookie';

const date = new Date()

function App() {
  const [listOfCards, setListOfCards] = useState([])
  const [searchParams, setSearchParams] = useState({
    lastUpdate: date.toLocaleTimeString('pt-BR')
  })
  const [gales, setGales] = useState('G2')

  const [cookies, setCookie, removeCookie] = useCookies(['']);

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
          lastUpdate: date.toLocaleTimeString('pt-BR')
        }))
      })
  }, [])

  useEffect(() => {
    retrieveData(searchParams.currency, searchParams.timeframe)
      .then(response => {
        setListOfCards(getCards(response.data.ok))
      })
  }, [searchParams])

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(cookies);
      retrieveData(cookies.currency, cookies.timeframe)
        .then(response => {
          setListOfCards(getCards(response.data.ok))
        });
       window.location.reload();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header setSearchParams={setSearchParams} searchParams={searchParams} setGales={setGales} />

      <h5 className='last-update'>
        {`Última Atualização feita às: ${searchParams.lastUpdate} UTC-3`}
      </h5>

      <Content gales={gales} listOfCards={listOfCards} />
    </>
  );
}

export default App
