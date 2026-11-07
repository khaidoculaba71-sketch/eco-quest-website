
document.addEventListener("DOMContentLoaded", function () {

    const playerName = localStorage.getItem("ecoQuestPlayerName");

    if (playerName && playerName.trim() !== "") {
        alert("You deserve it, Adventurer " + playerName + "!");
    } else {
        alert("You deserve it, Adventurer!");
    }

});

function goToNextPage() {
    window.location.href = "./closing-page.html";
}
