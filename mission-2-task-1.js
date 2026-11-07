
const cards = [
    {
        mystery: "mystery-1",
        correct: "correct-1",
        incorrect: "incorrect-1",
        choices: "choices-2",
        answers: ["factory emissions", "industrial emissions", "emissions from factories"]
    },
    {
        mystery: "mystery-2",
        correct: "correct-2",
        incorrect: "incorrect-2",
        choices: "choices-3",
        answers: ["vehicle emissions", "transportation emissions", "emissions from vehicles"]
    },
    {
        mystery: "mystery-3",
        correct: "correct-3",
        incorrect: "incorrect-3",
        choices: "choices-4",
        answers: ["deforestation", "cutting down trees", "forest destruction"]
    },
    {
        mystery: "mystery-4",
        correct: "correct-4",
        incorrect: "incorrect-4",
        choices: "choices-5",
        answers: ["conserving water", "water conservation", "save water", "saving water"]
    },
    {
        mystery: "mystery-5",
        correct: "correct-5",
        incorrect: "incorrect-5",
        choices: "final-choices",
        answers: ["tree planting", "planting trees", "reforestation"]
    }
];

let currentCard = 0;

function hideAllImages() {
    document.querySelectorAll(".background").forEach(image => {
        image.style.display = "none";
    });

    document.querySelectorAll(".choice-box").forEach(button => {
        button.style.display = "none";
    });

    document.getElementById("answer-container").style.display = "none";
    document.getElementById("next-mission-button").style.display = "none";
}

function showImage(id) {
    hideAllImages();

    const image = document.getElementById(id);

    if (image) {
        image.style.display = "block";
    } else {
        console.error("Missing image:", id);
    }
}

function showChoices(cardNumber) {
    hideAllImages();

    const imageId = cardNumber === 0
        ? "choices-image"
        : cards[cardNumber - 1].choices;

    const image = document.getElementById(imageId);

    if (image) {
        image.style.display = "block";
    } else {
        console.error("Missing choices image:", imageId);
        return;
    }

    document.querySelectorAll(".choice-box").forEach(button => {
        button.style.display = "block";
        button.style.pointerEvents = "auto";
    });
}

function openCard(number) {
    if (number < 1 || number > 5) return;

    currentCard = number - 1;

    showImage(cards[currentCard].mystery);

    document.getElementById("answer-container").style.display = "block";
    document.getElementById("player-answer").value = "";
}

function checkAnswer() {
    const input = document.getElementById("player-answer");
    const userAnswer = input.value.trim().toLowerCase();

    if (!userAnswer) {
        alert("Please enter your answer.");
        return;
    }

    if (cards[currentCard].answers.includes(userAnswer)) {
        showImage(cards[currentCard].correct);

        setTimeout(() => {
            if (currentCard === 4) {
                showImage("final-choices");
                document.getElementById("next-mission-button").style.display = "block";
            } else {
                showChoices(currentCard + 1);
            }
        }, 1200);

    } else {
        showImage(cards[currentCard].incorrect);

        setTimeout(() => {
            showImage(cards[currentCard].mystery);
            document.getElementById("answer-container").style.display = "block";
        }, 1200);
    }
}

function goToMission3() {
    window.location.href = "mission-map-3.html";
}

window.addEventListener("load", function () {
    const character = localStorage.getItem("ecoQuestCharacter");

    const flint = document.getElementById("flint-character");
    const fern = document.getElementById("fern-character");

    if (flint) flint.style.display = "none";
    if (fern) fern.style.display = "none";

    if (character === "Flint" && flint) flint.style.display = "block";
    if (character === "Fern" && fern) fern.style.display = "block";

    showChoices(0);
});
