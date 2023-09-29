// main.js
import { getLeaderboard, addEntry } from './leaderboard.js';

// Function to display leaderboard in the HTML
function displayLeaderboard() {
  const leaderboard = document.getElementById('leaderboard');
  leaderboard.innerHTML = '';

  const leaderboardData = getLeaderboard();
  leaderboardData.forEach(entry => {
    const entryElement = document.createElement('div');
    entryElement.textContent = `${entry.name}: ${entry.score}`;
    leaderboard.appendChild(entryElement);
  });
}

// Initial display of the leaderboard
displayLeaderboard();

// Example: Adding a new entry
addEntry("New Player", 95);
displayLeaderboard();
