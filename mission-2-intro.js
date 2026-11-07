window.onload = function() {
    const character = localStorage.getItem("ecoQuestCharacter");

    if (character === "Fern") {
        document.querySelector(".boy").style.display = "none";
        document.querySelector(".girl").style.display = "block";
    } else {
        document.querySelector(".boy").style.display = "block";
        document.querySelector(".girl").style.display = "none";
    }
};

function goToInstructions() {
    window.location.href = "mission-2-instructions.html";
}