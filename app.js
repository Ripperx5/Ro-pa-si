let userScore = 0;
let computerScore = 0;

const userScoreEl = document.getElementById("userScore");
const computerScoreEl = document.getElementById("computerScore");
const resultSubtextEl = document.getElementById("resultSubtext");
const playAgainBtn = document.getElementById("playAgainBtn");
const nextBtn = document.getElementById("nextBtn");

userScoreEl.innerText = userScore;
computerScoreEl.innerText = computerScore;

function playGame(userChoice) {

  const choices = ["rock", "paper", "scissors"];
  const pcChoice = choices[Math.floor(Math.random() * 3)];

  showResult(userChoice, pcChoice);
}

function showResult(user, pc) {

  document.getElementById("gameArea").classList.add("hidden");
  document.getElementById("resultArea").classList.remove("hidden");

  const userPick = document.getElementById("userPick");
  const pcPick = document.getElementById("pcPick");
  const resultMessage = document.getElementById("resultMessage");

  userPick.className = "circle " + user;
  pcPick.className = "circle " + pc;

  userPick.innerHTML = getIconImg(user);
  pcPick.innerHTML = getIconImg(pc);

  userPick.classList.remove("winner");
  pcPick.classList.remove("winner");

  if (user === pc) {
    resultMessage.innerText = "TIE UP";
    resultSubtextEl.innerText = "";
    playAgainBtn.innerText = "REPLAY";
    nextBtn.classList.add("hidden");
  }
  else if (
    (user === "rock" && pc === "scissors") ||
    (user === "paper" && pc === "rock") ||
    (user === "scissors" && pc === "paper")
  ) {
    resultMessage.innerText = "YOU WIN";
    resultSubtextEl.innerText = "AGAINST PC";
    playAgainBtn.innerText = "PLAY AGAIN";
    nextBtn.classList.remove("hidden");
    userPick.classList.add("winner");

    userScore++;
    userScoreEl.innerText = userScore;
  }
  else {
    resultMessage.innerText = "YOU LOST";
    resultSubtextEl.innerText = "AGAINST PC";
    playAgainBtn.innerText = "PLAY AGAIN";
    nextBtn.classList.add("hidden");
    pcPick.classList.add("winner");

    computerScore++;
    computerScoreEl.innerText = computerScore;
  }
}

function playAgain() {
  document.getElementById("hurrayPage").classList.add("hidden");
  document.getElementById("resultArea").classList.add("hidden");
  document.getElementById("gameArea").classList.remove("hidden");
}

function goToHurray() {
  document.getElementById("resultArea").classList.add("hidden");
  document.getElementById("hurrayPage").classList.remove("hidden");
  const header = document.querySelector(".header");
  if (header) header.classList.add("hidden");
  nextBtn.classList.add("hidden");
}

function getIconImg(choice) {
  const src = choice === "rock" ? "assets/rock.png" : choice === "paper" ? "assets/paper.png" : "assets/scissors.png";
  const alt = choice.charAt(0).toUpperCase() + choice.slice(1);
  return `<img src="${src}" alt="${alt}" class="icon">`;
}

function openRules() {
  document.getElementById("rulesPopup").classList.remove("hidden");
}

function closeRules() {
  document.getElementById("rulesPopup").classList.add("hidden");
}
