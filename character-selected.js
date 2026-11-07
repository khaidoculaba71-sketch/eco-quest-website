const character = localStorage.getItem("ecoQuestCharacter");

const selectedCharacter = document.getElementById("selectedCharacter");

if (character === "Flint") {
    selectedCharacter.src = "images/flint-selected.png";
}
else if (character === "Fern") {
    selectedCharacter.src = "images/fern-selected.png";
}
else {
    window.location.href = "character.html";
}

function goToIntroduction() {
    window.location.href = "character-intro.html";
}