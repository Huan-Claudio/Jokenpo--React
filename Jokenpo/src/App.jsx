import React, { useState } from 'react';
import { getRandomIndex } from './assets/randomIndex';
import { getComputerChoices } from './assets/jogadaComputador';
import { determineResult } from './assets/Winner';
import './App.css';

const Jokenpo = () => {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    const computerChoices = getComputerChoices();
    const randomIndex = getRandomIndex(computerChoices);
    const computerChoice = computerChoices[randomIndex];
    setComputerChoice(computerChoice);
    const result = determineResult(choice, computerChoice);
    setResult(result);
  };

  return (
    <div className="jokenpo-container">
      <div className="jokenpo-header">
        <h1>Jokenpo</h1>
      </div>
      <div className="jokenpo-choices">
        <button onClick={() => handlePlayerChoice('🪨')}>Pedra</button>
        <button onClick={() => handlePlayerChoice('🖐️')}>Papel</button>
        <button onClick={() => handlePlayerChoice('✂️')}>Tesoura</button>
      </div>
      <div className="jokenpo-result">
        <p>Resultado: {result}</p>
      </div>
      <div className="jokenpo-player-choice">
        <p>Você escolheu: {playerChoice}</p>
      </div>
      <div className="jokenpo-computer-choice">
        <p>O computador escolheu: {computerChoice}</p>
      </div>
    </div>
  );
};

export default Jokenpo;