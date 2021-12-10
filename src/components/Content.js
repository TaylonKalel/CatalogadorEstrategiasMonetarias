import Card from './Card'

function Content({
  listOfCards,
  gales
}) {
  const getGalesPercentage = (cardProps, galeValue) => {
    let total = cardProps.WIN + cardProps.winG1 + cardProps.winG2 + cardProps.loss

    if (total === 0) total = 1

    switch (galeValue) {
      case 'Mao':
        return Math.round((cardProps.WIN / total) * 100)
      case 'G1':
        return Math.round(((cardProps.WIN + cardProps.winG1) / total) * 100)
      case 'G2':
        return Math.round(((cardProps.WIN + cardProps.winG1 + cardProps.winG2) / total) * 100)
      default:
        return 0
    }
  }

  listOfCards.forEach((subLista) => {
    subLista.forEach((item) => {
      item.porcentagem = getGalesPercentage(item, gales);
    })
  })

  var newlistOfCards = [];
  listOfCards.forEach((subLista) => {

    subLista.forEach((item) => {
      newlistOfCards.push(item);
    })
  })


  const sortedListOfCardsOrder = newlistOfCards.sort((a, b) => {
    if (a.porcentagem >= b.porcentagem) {
      return -1
    } else return 1
  });
  const sortedListOfCards = sortedListOfCardsOrder;

  var indexCorrente = -1;

  return (
    <main className='cardGrid'>
      {
        sortedListOfCards.length > 0
          ? sortedListOfCards.map((card, index) => {
            // console.log('porcentagem: ', indexCorrente);
            indexCorrente++;
            return <Card
              properties={card}
              gales={gales}
              key={index}
              position={indexCorrente}
            />
          })
          : 'Loading'
      }
    </main>
  )
}

export default Content
