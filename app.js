// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');
const tryAgainButton = document.getElementById('try-again-button');

const resetButton = document.getElementById('reset-button');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

// initialize state

const hidingPlaces = ['tree', 'shed', 'boulder'];

let totalGuesses = 0;
let wins = 0;
let losses = 0;

function hideEmoji() {
    boulderContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    shedContainer.classList.remove('face');
}

shedButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'shed');
});

treeButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'tree');
});

boulderButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'boulder');
});

function handleGuess(correctSpot, userGuess) {
    hideEmoji();
    totalGuesses++;

    if (correctSpot === 'tree') {
        treeContainer.classList.add('face');
    } else if (correctSpot === 'shed') {
        shedContainer.classList.add('face');
    } else if (correctSpot === 'boulder') {
        boulderContainer.classList.add('face');
    }

    totalEl.textContent = totalGuesses;

    if (correctSpot === userGuess) {
        wins++;
    } else {
        losses++;
    }

    lossesEl.textContent = losses;
    winsEl.textContent = wins;

    // then grab the appropriate container element for the correct guess from the DOM
    // then add the face class to that element so that the face shows up
    // then if the user guess is correct, increment the correct guesses
    // update the DOM to show this change to the user (including the losses, not tracked directly in state)
}

resetButton.addEventListener('click', () => {
    totalGuesses = 0;
    wins = 0;
    losses = 0;
    lossesEl.textContent = 0;
    winsEl.textContent = 0;
    totalEl.textContent = 0;
    hideEmoji();
});

tryAgainButton.addEventListener('click', () => {
    hideEmoji();
})
