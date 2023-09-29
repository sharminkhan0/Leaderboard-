// dom.js
/*export function displayLeaderboard(leaderboard) {
    const scoresContainer = document.querySelector('.scores-container ul');
    scoresContainer.innerHTML = '';
  
    leaderboard.forEach(entry => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<span>${entry.name}</span><span>:${entry.score}</span>`;
      scoresContainer.appendChild(listItem);
    });
  }
  
  export function clearInputFields() {
    const playerNameInput = document.querySelector('input[name="player"]');
    const playerScoreInput = document.querySelector('input[name="score"]');
    playerNameInput.value = '';
    playerScoreInput.value = '';
  }
  
  export function getFormData() {
    const playerNameInput = document.querySelector('input[name="player"]');
    const playerScoreInput = document.querySelector('input[name="score"]');
    const name = playerNameInput.value.trim();
    const score = parseInt(playerScoreInput.value.trim());
    return { name, score };
  }
  
  export function addRefreshButtonListener(callback) {
    const refreshButton = document.getElementById('refresh-button');
    refreshButton.addEventListener('click', callback);
  }
  
  export function addSubmitFormListener(callback) {
    const submitForm = document.querySelector('form');
    submitForm.addEventListener('submit', callback);
  }*/
  