import GaleIcon from './../assets/icons/gale.svg'

export default function CicloQuadradinho({ type }) {
  switch (type.toLowerCase()) {
    case 'loss':
      return (
        <div className='caixa loss'></div>
      )
    case 'd':
      return (
        <div className='caixa doji'></div>
      )
    case 'win':
      return (
        <div className='caixa win'></div>
      )
    case 'g1':
    return (
      <div className='caixa win'>
        <img src={GaleIcon} alt='gale-icon'/>
      </div>
    )
    case 'g2':
      return (
        <div className='caixa win'>
          <img src={GaleIcon} alt='gale-icon'/>
          <img src={GaleIcon} alt='gale-icon'/>
        </div>
      )
    case 'black':
      return (
        <div className='caixa black'></div>
      )
    default:
      return ''
  }
}