
document.addEventListener("DOMContentLoaded", function () {

    const playerName = localStorage.getItem("ecoQuestPlayerName");

    if (playerName && playerName.trim() !== "") {
        alert("Thank you, Adventurer " + playerName + " for cooperating!");
    } else {
        alert("Thank you, Adventurer, for cooperating!");
    }

});

function goToNextPage() {
    window.location.href = "./reward-unlocked.html";
}
