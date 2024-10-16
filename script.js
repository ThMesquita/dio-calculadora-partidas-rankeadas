//Count the number of victories
function calculateVictories(wins, losses) {
  let result = wins - losses;
  return result;
}

//Find the correct rank
function determineRank(victories) {
  let rankName;
  let color;

  if (victories <= 10) {
    rankName = 'Ferro';
    color = '#B0C4DE';
  } else if (victories <= 20) {
    rankName = 'Bronze';
    color = '#CD7F32';
  } else if (victories <= 50) {
    rankName = 'Prata';
    color = '#C0C0C0';
  } else if (victories <= 80) {
    rankName = 'Ouro';
    color = '#FFD700';
  } else if (victories <= 90) {
    rankName = 'Diamante';
    color = '#00BFFF';
  } else if (victories <= 100) {
    rankName = 'Lendário';
    color = '#FF4500';
  } else {
    rankName = 'Imortal';
    color = '#8A2BE2';
  }

  return { rankName, color };
}

function verify() {
  let wins = +document.querySelector('#wins').value;
  let losses = +document.querySelector('#losses').value;

  //Call the function and get the number of victories
  let victoriesNumber = calculateVictories(wins, losses);

  //Get the ranking position based on the number of victories
  let rankPosition = determineRank(victoriesNumber);

  document.querySelector(
    '#res',
  ).innerHTML = `O Herói tem um saldo de ${victoriesNumber} está no nível de <span class = 'rankColor'>${rankPosition.rankName}</span>`;

  document.querySelector('.rankColor').style.color = rankPosition.color;
}
