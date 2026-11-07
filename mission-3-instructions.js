
function startMission3Task() {
    window.location.href = "./mission-3-task-1.html";
}

document.addEventListener("DOMContentLoaded", function () {

    const character = localStorage.getItem("ecoQuestCharacter");

    const flintInstructions = document.getElementById("flint-instructions");
    const fernInstructions = document.getElementById("fern-instructions");

    if (!flintInstructions || !fernInstructions) {
        console.error("Instruction images were not found.");
        return;
    }

    flintInstructions.style.display = "none";
    fernInstructions.style.display = "none";

    if (character === "Flint") {
        flintInstructions.style.display = "block";
    }
    else if (character === "Fern") {
        fernInstructions.style.display = "block";
    }
    else {
        alert("Character selection not found!");
    }

});
