import React, { useState } from "react";
import "./Dice.css";
// import "./../PigGame/PigGame.css";

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

const Dice = () => {
  const [dice, setDice] = useState(null);

  const handleRoll = () => {
    const rolled = Math.trunc(Math.random() * 6) + 1;
    setDice(rolled);

    if (rolled !== 1) {
      console.log(rolled);
    }
  };

  return (
    <div className="dice">
      <main>
        <h1 className="dice-title"> Dice Game</h1>
        <div className="controls controls-top">
          <button onClick={handleRoll} className="btn btn-roll">
            🔄 Roll the dice
          </button>
        </div>

        {dice && <img src={diceImages[dice]} alt="Dice" className="dice-img" />}
      </main>
    </div>
  );
};

export default Dice;
