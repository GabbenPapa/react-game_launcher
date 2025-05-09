import React, { useState } from "react";
import "./rps.css";
import paperImg from "../../assets/paper.png";
import rockImg from "../../assets/rock.png";
import scissorsImg from "../../assets/scissors.png";

const rpsOptions = [
  { id: 1, name: "Paper", img: paperImg },
  { id: 2, name: "Rock", img: rockImg },
  { id: 3, name: "Scissors", img: scissorsImg },
];

export default function RPS() {
  const [computerMove, setComputerMove] = useState(null);
  const [winner, setWinner] = useState("");

  const getWinner = (playerId, compId) => {
    if (playerId === compId) return "It's a tie!";

    if (
      (playerId === 2 && compId === 3) ||
      (playerId === 1 && compId === 2) ||
      (playerId === 3 && compId === 1)
    ) {
      return "You win!";
    }
    return "Computer wins!";
  };

  const handleClick = (playerId) => {
    const compId = Math.ceil(Math.random() * 3);
    setComputerMove(compId);
    setWinner(getWinner(playerId, compId));
  };
  return (
    <div className="rps">
      <main>
        <div className="rps-header">
          <h1 className="rps-title">Rock Paper Scissors</h1>
          <h2 className="rps-subtitle">Choose your move</h2>
          <div className="player">
            <div className="player">
              {rpsOptions.map(({ id, name, img }) => (
                <div
                  key={id}
                  className="player-move"
                  onClick={() => handleClick(id)}
                >
                  <img src={img} alt={name} className="player-img" />
                  <p className="player-text">{name}</p>
                </div>
              ))}
            </div>
          </div>
          {winner && (
            <div className="rps-winner">
              <h1 className="rps-title">{winner}</h1>
            </div>
          )}
        </div>
        {computerMove && (
          <div className="rps-footer">
            <h2 className="rps-subtitle">Computer move</h2>
            <div className="player">
              <div className="computer-move">
                <img
                  src={rpsOptions[computerMove - 1].img}
                  alt={rpsOptions[computerMove - 1].name}
                  className="player-img"
                />
                <p className="player-text">
                  {rpsOptions[computerMove - 1].name}
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
