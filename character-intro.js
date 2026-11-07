const playerName = localStorage.getItem("ecoQuestPlayerName");
const character = localStorage.getItem("ecoQuestCharacter");

const background = document.getElementById("introBackground");
const greeting = document.getElementById("greeting");
const introMessage = document.getElementById("introMessage");

if (!playerName || !character) {
    window.location.href = "name.html";
}

else if (character === "Flint") {

    background.src = "images/flint-intro.png";

    greeting.textContent =
        `Good day, Adventurer ${playerName}! I'm Flint!`;

    introMessage.textContent =
        "Together, we'll explore fascinating places, uncover the mysteries of nature, and face exciting challenges. Our mission is to understand the environment, discover the problems affecting our planet, and learn how we can protect it. Are you ready to begin our journey? Let's start our ECO QUEST!";

}

else if (character === "Fern") {

    background.src = "images/fern-intro.png";

    greeting.textContent =
        `Good day, Adventurer ${playerName}! I'm Fern!`;

    introMessage.textContent =
        "Together, we'll discover the wonders of nature, explore the world around us, and take on exciting environmental challenges. Along the way, we'll learn how nature works and how our everyday choices can make a difference. Are you ready, Adventurer? Our ECO QUEST begins now!";

}

else {
    window.location.href = "character.html";
}

function beginAdventure() {
    window.location.href = "dashboard.html";
}