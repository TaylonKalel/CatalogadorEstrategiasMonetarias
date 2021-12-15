import axios from "axios"

export const retrieveData = (currency, timeframe, quadrantes, gale) => axios.get(`https://api.agbot.com.br/api/strategies/${currency}/${timeframe}/${quadrantes}/${gale == 'Mao' ? 'G0' : gale}`)

export const retrieveCurrencies = () => axios.get('https://api.agbot.com.br/api/coins/')