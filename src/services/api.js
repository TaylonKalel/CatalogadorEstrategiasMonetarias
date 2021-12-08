import axios from "axios"

export const retrieveData = (currency, timeframe, quadrantes) => axios.get(`https://api.agbot.com.br/api/strategies/${currency}/${timeframe}/${quadrantes}`)

export const retrieveCurrencies = () => axios.get('https://api.agbot.com.br/api/coins/')