import React, { useEffect, useState } from 'react';
import GameBoard from './Components/GameBoard';
import Gameover from './Components/Gameover';
import game from './game/game';
function MatchingGame() {
  const [GameOver, setGameOver] = useState(false);
  const [Cards, setCards] = useState([]);

  useEffect(() => {
    setCards(game.createCardsFromTechs());
  }, []);

  function restart() {
    game.clearCards();
    setCards(game.createCardsFromTechs());
    setGameOver(false);
  }

  function handleFlip(card) {
    game.flipCard(
      card.id,
      () => {setGameOver(true)},
      () => {setCards([...game.cards])},
    );
    setCards([...game.cards]);
  }

  return (
    <div>
      <GameBoard handleFlip={handleFlip} cards={Cards}></GameBoard>
      <Gameover show={GameOver} handleRestart={restart} />
    </div>
  );
}

export default MatchingGame;
