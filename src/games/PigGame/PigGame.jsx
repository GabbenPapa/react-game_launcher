import React, { useState } from "react";
import diceImages from "../../Components";
import "./PigGame.css";

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
      <main>
        <div className="controls controls-top">
          <button className="btn btn-new" onClick={init}>
            🔄 New Game
          </button>
        </div>
        <div
          className={`player player-0 ${
            activePlayer === 0 ? "player-active" : ""
          } ${!playing && scores[0] >= 100 ? "player-winner" : ""}`}
        >
          <h2 className="name">Player 1</h2>
          <p className="score" id="score-0">
            {scores[0]}
          </p>
          <div className="current">
            <p className="current-label">Current</p>
            <p className="current-score" id="current-0">
              {activePlayer === 0 ? currentScore : 0}
            </p>
          </div>
        </div>

        <div
          className={`player player-1 ${
            activePlayer === 1 ? "player-active" : ""
          } ${!playing && scores[1] >= 100 ? "player-winner" : ""}`}
        >
          <h2 className="name">Player 2</h2>
          <p className="score" id="score-1">
            {scores[1]}
          </p>
          <div className="current">
            <p className="current-label">Current</p>
            <p className="current-score" id="current-1">
              {activePlayer === 1 ? currentScore : 0}
            </p>
          </div>
        </div>

        {dice && <img src={diceImages[dice]} alt="Dice" className="dice-img" />}

        <div className="controls">
          <button className="btn btn-roll" onClick={handleRoll}>
            🎲 Roll Dice
          </button>
          <button className="btn btn-hold" onClick={handleHold}>
            📥 Hold
          </button>
        </div>
      </main>
    </div>
  );
};

export default PigGame;
