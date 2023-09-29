import './styles/index.css';


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

