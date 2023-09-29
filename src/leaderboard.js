// leaderboard.js
const leaderboardData = [
    { name: "Player 1", score: 100 },
    { name: "Player 2", score: 85 },
    { name: "Player 3", score: 70 },
    // Add more entries as needed
  ];
  
  export function getLeaderboard() {
    return leaderboardData;
  }
  
  export function addEntry(name, score) {
    leaderboardData.push({ name, score });
  }
  