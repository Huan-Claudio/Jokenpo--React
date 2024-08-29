export const determineResult = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return 'Empate!';
  } else if (
    (playerChoice === 'pedra' && computerChoice === 'tesoura') ||
    (playerChoice === 'papel' && computerChoice === 'pedra') ||
    (playerChoice === 'tesoura' && computerChoice === 'papel')
  ) {
    return 'Você venceu!';
  } else {
    return 'Você perdeu!';
  }
};