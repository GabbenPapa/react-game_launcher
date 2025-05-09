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
  const [winner, setWinner] = useState("");

  function checkWinner(playerMove) {
    const compMove = Math.trunc(Math.random() * 3) + 1;
    setHolded(compMove);

    if (playerMove === rpsNames[compMove]) {
      setWinner("It's a tie!");
    } else if (
      (playerMove === "Rock" && compMove === 3) ||
      (playerMove === "Paper" && compMove === 2) ||
      (playerMove === "Scissors" && compMove === 1)
    ) {
      setWinner("You win!");
    } else {
      setWinner("Computer wins!");
    }
  }

  return (
    <div className="rps">
      <main>
        <div className="rps-header">
          <h1 className="rps-title">Rock Paper Scissors</h1>
          <h2 className="rps-subtitle">Choose your move</h2>
          <div className="player">
            <div className="player-move" onClick={() => checkWinner("Rock")}>
              <img src={rockImg} alt="Rock" className="player-img" />
              <p className="player-text">Rock</p>
            </div>
            <div className="player-move" onClick={() => checkWinner("Paper")}>
              <img src={paperImg} alt="Paper" className="player-img" />
              <p className="player-text">Paper</p>
            </div>

            <div
              className="player-move"
              onClick={() => checkWinner("Scissors")}
            >
              <img src={scissorsImg} alt="Scissors" className="player-img" />
              <p className="player-text">Scissors</p>
            </div>
          </div>
          {winner && (
            <div className="rps-winner">
              <h1 className="rps-title">{winner}</h1>
            </div>
          )}
        </div>
        {holded && (
          <div className="rps-footer">
            <h2 className="rps-subtitle">Computer move</h2>
            <div className="player">
              <div className="computer-move">
                <img
                  src={rpsImages[holded]}
                  alt={rpsNames[holded]}
                  className="player-img"
                />
                <p className="player-text">{rpsNames[holded]}</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
