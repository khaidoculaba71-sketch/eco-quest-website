function selectCharacter(character) {
    localStorage.setItem("ecoQuestCharacter", character);
    window.location.href = "character-selected.html";
}