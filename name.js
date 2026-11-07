
function nextStep() {
    const name = document.getElementById("playerName").value.trim();

    if (name === "") {
        alert("Please enter your nickname first!");
        return;
    }

    localStorage.setItem("ecoQuestPlayerName", name);

    window.location.href = "character.html";
}
