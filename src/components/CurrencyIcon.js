import EURGBP from '../assets/icons/EURGBP.svg'
import EURJPY from '../assets/icons/EURJPY.svg'
import XRPUSD from '../assets/icons/XRPUSD.svg'
import AUDCAD from '../assets/icons/AUDCAD.svg'
import EOSUSD from '../assets/icons/EOSUSD.svg'
import EURUSD from '../assets/icons/EURUSD.svg'
import ETHUSD from '../assets/icons/ETHUSD.svg'
import AUDJPY from '../assets/icons/AUDJPY.svg'
import EURAUD from '../assets/icons/EURAUD.svg'
import GBPJPY from '../assets/icons/GBPJPY.svg'
import GBPUSD from '../assets/icons/GBPUSD.svg'
import USDCAD from '../assets/icons/USDCAD.svg'
import AUDUSD from '../assets/icons/AUDUSD.svg'
import LTCUSD from '../assets/icons/LTCUSD.svg'
import USDCHF from '../assets/icons/USDCHF.svg'
import BTCUSD from '../assets/icons/BTCUSD.svg'
import AUDCADOTC from '../assets/icons/AUDCADOTC.svg'
import CHFJPYOTC from '../assets/icons/CHFJPYOTC.svg'
import EURNZD from '../assets/icons/EURNZD.svg'
import NZDJPY from '../assets/icons/NZDJPY.svg'
import CHFJPY from '../assets/icons/CHFJPY.svg'
import EURUSDOTC from '../assets/icons/EURUSDOTC.svg'
import NZDUSDOTC from '../assets/icons/NZDUSDOTC.svg'
import AUDCHFOTC from '../assets/icons/AUDCHFOTC.svg'
import NZDUSD from '../assets/icons/NZDUSD.svg'
import AUDCHF from '../assets/icons/AUDCHF.svg'
import AUDJPYOTC from '../assets/icons/AUDJPYOTC.svg'
import EURAUDOTC from '../assets/icons/EURAUDOTC.svg'
import GBPJPYOTC from '../assets/icons/GBPJPYOTC.svg'
import AUDNZDOTC from '../assets/icons/AUDNZDOTC.svg'
import EURCADOTC from '../assets/icons/EURCADOTC.svg'
import GBPUSDOTC from '../assets/icons/GBPUSDOTC.svg'
import USDCADOTC from '../assets/icons/USDCADOTC.svg'
import AUDNZD from '../assets/icons/AUDNZD.svg'
import EURCAD from '../assets/icons/EURCAD.svg'
import EURCHFOTC from '../assets/icons/EURCHFOTC.svg'
import USDCHFOTC from '../assets/icons/USDCHFOTC.svg'
import EURCHF from '../assets/icons/EURCHF.svg'
import NZDCADOTC from '../assets/icons/NZDCADOTC.svg'
import CADCHFOTC from '../assets/icons/CADCHFOTC.svg'
import EURGBPOTC from '../assets/icons/EURGBPOTC.svg'
import NZDCAD from '../assets/icons/NZDCAD.svg'
import USDJPYOTC from '../assets/icons/USDJPYOTC.svg'
import CADCHF from '../assets/icons/CADCHF.svg'
import NZDCHFOTC from '../assets/icons/NZDCHFOTC.svg'
import USDJPY from '../assets/icons/USDJPY.svg'
import CADJPYOTC from '../assets/icons/CADJPYOTC.svg'
import NZDCHF from '../assets/icons/NZDCHF.svg'
import CADJPY from '../assets/icons/CADJPY.svg'
import EURNZDOTC from '../assets/icons/EURNZDOTC.svg'
import NZDJPYOTC from '../assets/icons/NZDJPYOTC.svg'
import EURJPYOTC from '../assets/icons/EURJPYOTC.svg'

import AgbotIcon from '../assets/icons/agbot.jpg'

export default function CurrencyIcon({ currencyName }) {
  switch (currencyName) {

    case 'AUD/CAD':
      return (
        <img className='currencyPairFlag' src={AUDCAD} alt='AUDCAD'/>
      )
    case 'AUD/USD':
      return (
        <img className='currencyPairFlag' src={AUDUSD} alt='AUDUSD'/>
      )
    case 'EOS/USD':
      return (
        <img className='currencyPairFlag' src={EOSUSD} alt='EOSUSD'/>
      )
    case 'EUR/AUD':
      return (
        <img className='currencyPairFlag' src={EURAUD} alt='EURAUD'/>
      )
    case 'EUR/JPY':
      return (
        <img className='currencyPairFlag' src={EURJPY} alt='EURJPY'/>
      )
      case 'EUR/JPY-OTC':
      return (
        <img className='currencyPairFlag' src={EURJPYOTC} alt='EURJPY-OTC'/>
      )
    case 'GBP/JPY':
      return (
        <img className='currencyPairFlag' src={GBPJPY} alt='GBPJPY'/>
      )
    case 'LTC/USD':
      return (
        <img className='currencyPairFlag' src={LTCUSD} alt='LTCUSD'/>
      )
    case 'USD/CHF':
      return (
        <img className='currencyPairFlag' src={USDCHF} alt='USDCHF'/>
      )
    case 'AUD/JPY':
      return (
        <img className='currencyPairFlag' src={AUDJPY} alt='AUDJPY'/>
      )
    case 'BTC/USD':
      return (
        <img className='currencyPairFlag' src={BTCUSD} alt='BTCUSD'/>
      )
    case 'ETH/USD':
      return (
        <img className='currencyPairFlag' src={ETHUSD} alt='ETHUSD'/>
      )
    case 'EUR/GBP':
      return (
        <img className='currencyPairFlag' src={EURGBP} alt='EURGBP'/>
      )
    case 'EUR/USD':
      return (
        <img className='currencyPairFlag' src={EURUSD} alt='EURUSD'/>
      )
    case 'GBP/USD':
      return (
        <img className='currencyPairFlag' src={GBPUSD} alt='GBPUSD'/>
      )
    case 'USD/CAD':
      return (
        <img className='currencyPairFlag' src={USDCAD} alt='USDCAD'/>
      )
    case 'XRP/USD':
      return (
        <img className='currencyPairFlag' src={XRPUSD} alt='XRPUSD'/>
      )
    case 'AUD/CAD-OTC':
      return (
        <img className='currencyPairFlag' src={AUDCADOTC} alt='AUDCADOTC'/>
      )
    case 'CHF/JPY-OTC':
      return (
        <img className='currencyPairFlag' src={CHFJPYOTC} alt='CHFJPYOTC'/>
      )
    case 'EUR/NZD':
      return (
        <img className='currencyPairFlag' src={EURNZD} alt='EURNZD'/>
      )
    case 'NZD/JPY':
      return (
        <img className='currencyPairFlag' src={NZDJPY} alt='NZDJPY'/>
      )
    case 'CHF/JPY':
      return (
        <img className='currencyPairFlag' src={CHFJPY} alt='CHFJPY'/>
      )
    case 'EUR/USD-OTC':
      return (
        <img className='currencyPairFlag' src={EURUSDOTC} alt='EURUSDOTC'/>
      )
    case 'NZD/USD-OTC':
      return (
        <img className='currencyPairFlag' src={NZDUSDOTC} alt='NZDUSDOTC'/>
      )
    case 'AUD/CHF-OTC':
      return (
        <img className='currencyPairFlag' src={AUDCHFOTC} alt='AUDCHFOTC'/>
      )
    case 'NZD/USD':
      return (
        <img className='currencyPairFlag' src={NZDUSD} alt='NZDUSD'/>
      )
    case 'AUD/CHF':
      return (
        <img className='currencyPairFlag' src={AUDCHF} alt='AUDCHF'/>
      )
    case 'AUD/JPY-OTC':
      return (
        <img className='currencyPairFlag' src={AUDJPYOTC} alt='AUDJPYOTC'/>
      )
    case 'EUR/AUD-OTC':
      return (
        <img className='currencyPairFlag' src={EURAUDOTC} alt='EURAUDOTC'/>
      )
    case 'GBP/JPY-OTC':
      return (
        <img className='currencyPairFlag' src={GBPJPYOTC} alt='GBPJPYOTC'/>
      )
    case 'AUD/NZD-OTC':
      return (
        <img className='currencyPairFlag' src={AUDNZDOTC} alt='AUDNZDOTC'/>
      )
    case 'EUR/CAD-OTC':
      return (
        <img className='currencyPairFlag' src={EURCADOTC} alt='EURCADOTC'/>
      )
    case 'GBP/USD-OTC':
      return (
        <img className='currencyPairFlag' src={GBPUSDOTC} alt='GBPUSDOTC'/>
      )
    case 'USD/CAD-OTC':
      return (
        <img className='currencyPairFlag' src={USDCADOTC} alt='USDCADOTC'/>
      )
    case 'AUD/NZD':
      return (
        <img className='currencyPairFlag' src={AUDNZD} alt='AUDNZD'/>
      )
    case 'EUR/CAD':
      return (
        <img className='currencyPairFlag' src={EURCAD} alt='EURCAD'/>
      )
    case 'EUR/CHF-OTC':
      return (
        <img className='currencyPairFlag' src={EURCHFOTC} alt='EURCHFOTC'/>
      )
    case 'USD/CHF-OTC':
      return (
        <img className='currencyPairFlag' src={USDCHFOTC} alt='USDCHFOTC'/>
      )
    case 'EUR/CHF':
      return (
        <img className='currencyPairFlag' src={EURCHF} alt='EURCHF'/>
      )
    case 'NZD/CAD-OTC':
      return (
        <img className='currencyPairFlag' src={NZDCADOTC} alt='NZDCADOTC'/>
      )
    case 'CAD/CHF-OTC':
      return (
        <img className='currencyPairFlag' src={CADCHFOTC} alt='CADCHFOTC'/>
      )
    case 'EUR/GBP-OTC':
      return (
        <img className='currencyPairFlag' src={EURGBPOTC} alt='EURGBPOTC'/>
      )
    case 'NZD/CAD':
      return (
        <img className='currencyPairFlag' src={NZDCAD} alt='NZDCAD'/>
      )
    case 'USD/JPY-OTC':
      return (
        <img className='currencyPairFlag' src={USDJPYOTC} alt='USDJPYOTC'/>
      )
    case 'CAD/CHF':
      return (
        <img className='currencyPairFlag' src={CADCHF} alt='CADCHF'/>
      )
    case 'NZD/CHF-OTC':
      return (
        <img className='currencyPairFlag' src={NZDCHFOTC} alt='NZDCHFOTC'/>
      )
    case 'USD/JPY':
      return (
        <img className='currencyPairFlag' src={USDJPY} alt='USDJPY'/>
      )
    case 'CAD/JPY-OTC':
      return (
        <img className='currencyPairFlag' src={CADJPYOTC} alt='CADJPYOTC'/>
      )
    case 'NZD/CHF':
      return (
        <img className='currencyPairFlag' src={NZDCHF} alt='NZDCHF'/>
      )
    case 'CAD/JPY':
      return (
        <img className='currencyPairFlag' src={CADJPY} alt='CADJPY'/>
      )
    case 'EUR/NZD-OTC':
      return (
        <img className='currencyPairFlag' src={EURNZDOTC} alt='EURNZDOTC'/>
      )
    case 'NZD/JPY-OTC':
      return (
        <img className='currencyPairFlag' src={NZDJPYOTC} alt='NZDJPYOTC'/>
      )
    default:
      return <img className='currencyPairFlag agbot' src={AgbotIcon} alt='agbot-icon'/>
  }
}
