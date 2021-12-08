import axios from "axios"

export const retrieveData = (currency, timeframe) => axios.get(`https://api.agbot.com.br/api/strategies/${currency}/${timeframe}`)

export const retrieveCurrencies = () => axios.get('https://api.agbot.com.br/api/coins/')