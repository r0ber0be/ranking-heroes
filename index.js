var buttonStatus = document.getElementById('add-hero-status')

buttonStatus.addEventListener('click', e => {
  e.preventDefault()
  const wins = document.getElementById('hero-wins').value
  const loses = document.getElementById('hero-loses').value
  
  !wins || !loses
    ? alert('Insira algum valor')
    : calculateHeroRank(wins, loses)
  }
)

function calculateHeroRank(wins, loses) {
  const totalVictories = Number(wins) - Number(loses)
  const rank = heroRank(totalVictories)

  document.getElementById('hero-total-wins').innerHTML = `${totalVictories}`
  document.getElementById('hero-level').innerHTML = `${rank}`
}

function heroRank(totalVictories) {
  if(totalVictories < 10) {
    return 'Ferro'
  } else if (totalVictories <= 20) {
    return 'Bronze'
  } else if (totalVictories <= 50) {
    return 'Prata'
  } else if (totalVictories <= 80) {
    return 'Ouro'
  } else if (totalVictories <= 90) {
    return 'Diamante'
  } else if (totalVictories <= 100) {
    return 'Lendário'
  } else {
    return 'Imortal'
  }
}
