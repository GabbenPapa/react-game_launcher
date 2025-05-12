import React, { useState, useEffect } from "react";
import diceImages from "../../Components";
import "./Dice.css";
import { useLocation } from "react-router-dom";

const Dice = () => {
  const [dice, setDice] = useState(null);

  const location = useLocation();
  const title = location.state?.title || "Dice Game";

  const handleRoll = () => {
    const rolled = Math.trunc(Math.random() * 6) + 1;
    setDice(rolled);

    if (rolled !== 1) {
      console.log(rolled);
    }
  };

  useEffect(
    function () {
      if (!title) return;
      document.title = ` ${title}`;
    },
    [title]
  );

  return (
    <div className="dice">
      <main>
        <h1 className="dice-title">Dice Game</h1>
        <div className="controls">
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
