// import { useState } from "react";
import { useLaunchGame } from "./games.jsx";

function App() {
  const { games, loading } = useLaunchGame();

  return (
    <div>
      <h1>Game Launcher</h1>
      {loading ? (
        <p>Loading games...</p>
      ) : (
        <div>
          {games.map((game, index) => (
            <div key={index}>
              <h2>{game.title}</h2>
              <img
                src={game.imageUrl}
                alt={game.title}
                style={{ width: "200px" }}
              />
              <p>
                <strong>Description:</strong> {game.description}
              </p>
              <p>
                <strong>Type:</strong> {game.gameType}
              </p>
              <p>
                <strong>Long Description:</strong> {game.longDescription}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
