import { useState, useEffect } from "react";

export function useLaunchGame() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await fetch(
          "https://game-launcher-1915c-default-rtdb.europe-west1.firebasedatabase.app/games.json"
        );
        const data = await response.json();
        const gameList = Object.values(data);
        setGames(gameList);
      } catch (error) {
        console.error("Error fetching games:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchGames();
  }, []);

  return { games, loading };
}
