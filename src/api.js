const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/QmA8PefwGdv5BMnpfXEQ/scores/';

export default API_URL;


// api.js
/*const API_BASE_URL = 'https://api.leaderboardapi.com/v1/games';
const YOUR_GAME_ID = 'your_game_id_here'; // Replace with your actual game ID

export async function getScores() {
  try {
    const response = await fetch(`${API_BASE_URL}/${YOUR_GAME_ID}/scores`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.scores;
  } catch (error) {
    console.error('Error fetching scores:', error);
    throw error;
  }
}

export async function submitScore(player, score) {
  try {
    const response = await fetch(`${API_BASE_URL}/${YOUR_GAME_ID}/scores`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ player, score }),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data; // You might want to handle the response data accordingly
  } catch (error) {
    console.error('Error submitting score:', error);
    throw error;
  }
}*/
