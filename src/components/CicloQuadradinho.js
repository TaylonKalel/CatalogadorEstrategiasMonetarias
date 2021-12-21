import GaleIcon from './../assets/icons/gale.svg'
import ReactTooltip from 'react-tooltip';

export default function CicloQuadradinho({ type, tempo }) {
  function changeBackground(e) {
    transformar(e.currentTarget.getAttribute('data-tipo'), e, true)
  }
  function backChangeBackground(e) {
    transformar(e.currentTarget.getAttribute('data-tipo'), e, false)
  }
  function transformar(key, e, voltar) {
    switch (key) {
      case 'loss':
      case 'd':
      case 'win':
        e.currentTarget.children[0].style = voltar ? "display:block" : "display:none";
        break;
      case 'g1':
        e.currentTarget.children[0].style = voltar ? "display:block" : "display:none";
        e.currentTarget.children[1].style = voltar ? "display:none" : "display:inline";
        break;
      case 'g2':
        e.currentTarget.children[0].style = voltar ? "display:block" : "display:none";
        e.currentTarget.children[1].style = voltar ? "display:none" : "display:inline";
        e.currentTarget.children[2].style = voltar ? "display:none" : "display:inline";
        break;

      default:
        break;
    }
  }
  switch (type.toLowerCase()) {
    case 'loss':
      return (
        <div onMouseEnter={changeBackground} onMouseLeave={backChangeBackground} className='caixa loss' data-tipo='loss'>
          <span className='span_caixa' style={{ display: 'none', color: 'black' }}>{tempo}</span>
        </div>
      )
    case 'd':
      return (
        <div onMouseEnter={changeBackground} onMouseLeave={backChangeBackground} className='caixa doji' data-tipo='d'>
          <span className='span_caixa' style={{ display: 'none', color: 'black' }}>{tempo}</span>
        </div>
      )
    case 'win':
      return (
        <div onMouseEnter={changeBackground} onMouseLeave={backChangeBackground} className='caixa win' data-tipo='win'>
          <span className='span_caixa' style={{ display: 'none', color: 'black' }}>{tempo}</span>
        </div>
      )
    case 'g1':
      return (
        <div onMouseEnter={changeBackground} onMouseLeave={backChangeBackground} className='caixa win' data-tipo='g1'>
          <span className='span_caixa' style={{ display: 'none', color: 'black' }}>{tempo}</span>
          <img src={GaleIcon} alt='gale-icon' />
        </div>
      )
    case 'g2':
      return (
        <div onMouseEnter={changeBackground} onMouseLeave={backChangeBackground} className='caixa win' data-tipo='g2'>
          <span className='span_caixa' style={{ display: 'none', color: 'black' }}>{tempo}</span>
          <img src={GaleIcon} alt='gale-icon' />
          <img src={GaleIcon} alt='gale-icon' />
        </div>

      )
    case 'black':
      return (
        <div className='caixa black' data-time={tempo}></div>
      )
    default:
      return ''
  }
}