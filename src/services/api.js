import axios from "axios"

export const retrieveData = (currency, timeframe) => axios.get(`https://161.97.150.131:8765/api/strategies/${currency}/${timeframe}`)

export const retrieveCurrencies = () => axios.get('https://161.97.150.131:8765/api/coins/')