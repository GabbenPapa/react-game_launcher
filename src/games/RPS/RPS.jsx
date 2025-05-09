import React, { useState } from "react";
import "./rps.css";
import paperImg from "../../assets/paper.png";
import rockImg from "../../assets/rock.png";
import scissorsImg from "../../assets/scissors.png";

const rpsImages = {
  1: paperImg,
  2: rockImg,
  3: scissorsImg,
};

const rpsNames = {
  1: "Paper",
  2: "Rock",
  3: "Scissors",
};

export default function RPS() {
  const [holded, setHolded] = useState(null);
  function handleHold() {
    const holded = Math.trunc(Math.random() * 3) + 1;
    setHolded(holded);
    console.log(holded);
  }

  return (
    <div className="rps">
      <main>
        <div className="rps-header">
          <h1 className="rps-title">Rock Paper Scissors</h1>
          <h2 className="rps-subtitle">Chouse your move</h2>
          <div className="player">
            <div className="player-move" onClick={handleHold}>
              <img src={rockImg} alt="Rock" className="player-img" />
              <p className="player-text">Rock</p>
            </div>
            <div className="player-move" onClick={handleHold}>
              <img src={paperImg} alt="Paper" className="player-img" />
              <p className="player-text">Paper</p>
            </div>
            <div className="player-move" onClick={handleHold}>
              <img src={scissorsImg} alt="Scissors" className="player-img" />
              <p className="player-text">Scissors</p>
            </div>
          </div>
        </div>
        {holded && (
          <div className="computer-move">
            <img
              src={rpsImages[holded]}
              alt={rpsNames[holded]}
              className="rps-img"
            />
            <p className="player-text">{rpsNames[holded]}</p>
          </div>
        )}{" "}
      </main>
    </div>
  );
}
