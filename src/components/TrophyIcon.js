import TrophyCopper from './../assets/icons/medalha3.svg'
import TrophySilver from './../assets/icons/medalha2.svg'
import TrophyGolden from './../assets/icons/medalha1.svg'

export default function TrophyIcon({ position }) {
  switch (position) {
    case 0:
      return <img src={TrophyGolden} alt='Golden Trophy' className='trophy'/>
    case 1:
      return <img src={TrophySilver} alt='Silver Trophy' className='trophy'/>
    case 2:
      return <img src={TrophyCopper} alt='Copper Trophy' className='trophy'/>
    default:
      return <div></div>
  }
}