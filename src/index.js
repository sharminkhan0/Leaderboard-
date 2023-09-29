import './styles/index.css';
import { displayScores, addScoreToList } from './app.js';


const formElement = document.getElementById('form');
const nameInput = document.getElementById('user');
const scoreInput = document.getElementById('score');
const refreshButton = document.getElementById('refresh-button');

const addScore = async (event) => {
  event.preventDefault();
  if (!nameInput.value || !scoreInput.value) return;
  await addScoreToList({ user: nameInput.value, score: scoreInput.value });
  nameInput.value = '';
  scoreInput.value = '';
};

const fetchAndDisplayScores = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/QmA8PefwGdv5BMnpfXEQ/scores/');
  const data = await response.json();
  displayScores(data.result);
};

formElement.addEventListener('submit', addScore);
refreshButton.addEventListener('click', fetchAndDisplayScores);

// app.js
/*import * as leaderboardModule from './leaderboard.js';
import * as domModule from './dom.js';

function init() {
  const leaderboard = leaderboardModule.getLeaderboard();
  domModule.displayLeaderboard(leaderboard);

  domModule.addRefreshButtonListener(() => {
    const refreshedLeaderboard = leaderboardModule.getLeaderboard();
    domModule.displayLeaderboard(refreshedLeaderboard);
  });

  domModule.addSubmitFormListener(event => {
    event.preventDefault();
    const { name, score } = domModule.getFormData();

    if (name && score) {
      leaderboardModule.addToLeaderboard(name, score);
      domModule.clearInputFields();
      const updatedLeaderboard = leaderboardModule.getLeaderboard();
      domModule.displayLeaderboard(updatedLeaderboard);
    }
  });
}

init();

// app.js
import * as leaderboardModule from './leaderboard.js';
import * as domModule from './dom.js';
import * as apiModule from './api.js';

async function init() {
  // Display initial leaderboard
  const leaderboard = await apiModule.getScores();
  domModule.displayLeaderboard(leaderboard);

  // Add event listeners
  domModule.addRefreshButtonListener(async () => {
    const refreshedLeaderboard = await apiModule.getScores();
    domModule.displayLeaderboard(refreshedLeaderboard);
  });

  domModule.addSubmitFormListener(async event => {
    event.preventDefault();
    const { name, score } = domModule.getFormData();

    if (name && score) {
      await apiModule.submitScore(name, score);
      domModule.clearInputFields();
      const updatedLeaderboard = await apiModule.getScores();
      domModule.displayLeaderboard(updatedLeaderboard);
    }
  });
}

init();*/

