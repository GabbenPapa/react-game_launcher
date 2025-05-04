import React, { useState } from "react";
import "./PigGame.css";
import dice1 from "./../../assets/dice-1.png";
import dice2 from "./../../assets/dice-2.png";
import dice3 from "./../../assets/dice-3.png";
import dice4 from "./../../assets/dice-4.png";
import dice5 from "./../../assets/dice-5.png";
import dice6 from "./../../assets/dice-6.png";

const diceImages = {
  1: dice1,
  2: dice2,
  3: dice3,
  4: dice4,
  5: dice5,
  6: dice6,
};

const PigGame = () => {
  const [scores, setScores] = useState([0, 0]);
  const [currentScore, setCurrentScore] = useState(0);
  const [activePlayer, setActivePlayer] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [dice, setDice] = useState(null);

  const init = () => {
    setScores([0, 0]);
    setCurrentScore(0);
    setActivePlayer(0);
    setPlaying(true);
    setDice(null);
  };

  const switchPlayer = () => {
    setCurrentScore(0);
    setActivePlayer(activePlayer === 0 ? 1 : 0);
  };

  const handleRoll = () => {
    if (!playing) return;

    const rolled = Math.trunc(Math.random() * 6) + 1;
    setDice(rolled);

    if (rolled !== 1) {
      setCurrentScore(currentScore + rolled);
    } else {
      switchPlayer();
    }
  };

  const handleHold = () => {
    if (!playing) return;

    const newScores = [...scores];
    newScores[activePlayer] += currentScore;
    setScores(newScores);

    if (newScores[activePlayer] >= 100) {
      setPlaying(false);
      setDice(null);
    } else {
      switchPlayer();
    }
  };

  return (
    <div className="pig-game">
      <div
        className={`player player-0 ${
          activePlayer === 0 ? "player-active" : ""
        } ${!playing && scores[0] >= 100 ? "player-winner" : ""}`}
      >
        <h2>Player 1</h2>
        <p id="score-0">{scores[0]}</p>
        <p id="current-0">{activePlayer === 0 ? currentScore : 0}</p>
      </div>

      <div
        className={`player player-1 ${
          activePlayer === 1 ? "player-active" : ""
        } ${!playing && scores[1] >= 100 ? "player-winner" : ""}`}
      >
        <h2>Player 2</h2>
        <p id="score-1">{scores[1]}</p>
        <p id="current-1">{activePlayer === 1 ? currentScore : 0}</p>
      </div>

      {dice && (
        <img src={diceImages[dice]} alt="Dice" className="pig-game dice" />
      )}

      <div className="controls">
        <button className="pig-game btn btn-roll" onClick={handleRoll}>
          Roll Dice
        </button>
        <button className="pig-game btn btn-hold" onClick={handleHold}>
          Hold
        </button>
        <button className="pig-game btn btn-new" onClick={init}>
          New Game
        </button>
      </div>
    </div>
  );
};

export default PigGame;
