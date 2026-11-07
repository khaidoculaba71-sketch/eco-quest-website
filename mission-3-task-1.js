
const cards = [
    {
        mystery: "mystery-1",
        correct: "correct-1",
        incorrect: "incorrect-1",
        choices: "choices-2",
        answer: ["el nino", "el niño"]
    },
    {
        mystery: "mystery-2",
        correct: "correct-2",
        incorrect: "incorrect-2",
        choices: "choices-3",
        answer: ["el nino", "el niño"]
    },
    {
        mystery: "mystery-3",
        correct: "correct-3",
        incorrect: "incorrect-3",
        choices: "choices-4",
        answer: ["la nina", "la niña"]
    },
    {
        mystery: "mystery-4",
        correct: "correct-4",
        incorrect: "incorrect-4",
        choices: "choices-5",
        answer: ["la nina", "la niña"]
    },
    {
        mystery: "mystery-5",
        correct: "correct-5",
        incorrect: "incorrect-5",
        answer: ["both", "both el nino and la nina", "both el niño and la niña"]
    }
];

let currentCard = 0;

const answerContainer = document.getElementById("answer-container");
const playerAnswer = document.getElementById("player-answer");
const nextButton = document.getElementById("next-mission-button");

const choiceButtons = [
    document.getElementById("choice-1"),
    document.getElementById("choice-2"),
    document.getElementById("choice-3"),
    document.getElementById("choice-4"),
    document.getElementById("choice-5")
];

function hideAllImages() {
    document.querySelectorAll(".background").forEach(image => {
        image.style.display = "none";
    });

    choiceButtons.forEach(button => {
        button.style.display = "none";
    });

    answerContainer.style.display = "none";
    nextButton.style.display = "none";
}

function showImage(id) {
    document.querySelectorAll(".background").forEach(image => {
        image.style.display = "none";
    });

    const image = document.getElementById(id);

    if (image) {
        image.style.display = "block";
    }

    choiceButtons.forEach(button => {
        button.style.display = "none";
    });

    nextButton.style.display = "none";
}

function showChoices(cardNumber) {
    hideAllImages();

    const imageId = cardNumber === 0
        ? "choices-image"
        : cards[cardNumber - 1].choices;

    const choicesImage = document.getElementById(imageId);

    if (choicesImage) {
        choicesImage.style.display = "block";
    }

    if (cardNumber < 5) {
        choiceButtons[cardNumber].style.display = "block";
    }
}

window.openCard = function(number) {
    if (number < 1 || number > 5) return;

    currentCard = number - 1;

    playerAnswer.value = "";

    showImage(cards[currentCard].mystery);

    answerContainer.style.display = "block";

    playerAnswer.focus();
};

window.checkAnswer = function() {
    const answer = playerAnswer.value
        .trim()
        .toLowerCase()
        .replace(/ñ/g, "n")
        .replace(/\s+/g, " ");

    if (answer === "") {
        alert("Please enter your answer!");
        return;
    }

    const correctAnswers = cards[currentCard].answer.map(item =>
        item.toLowerCase().replace(/ñ/g, "n")
    );

    if (correctAnswers.includes(answer)) {

        answerContainer.style.display = "none";

        showImage(cards[currentCard].correct);

        setTimeout(function() {

            if (currentCard === 4) {

                showImage("correct-5");

                // Display NEXT button over the final correct screen
                nextButton.style.display = "block";

            } else {

                showChoices(currentCard + 1);

            }

        }, 1500);

    } else {

        answerContainer.style.display = "none";

        showImage(cards[currentCard].incorrect);

        setTimeout(function() {

            showImage(cards[currentCard].mystery);

            answerContainer.style.display = "block";

            playerAnswer.value = "";

            playerAnswer.focus();

        }, 1500);
    }
};

window.goJourneyComplete = function() {
    window.location.href = "./journey-complete.html";
};

document.addEventListener("DOMContentLoaded", function() {
    hideAllImages();

    const initialChoices = document.getElementById("choices-image");

    if (initialChoices) {
        initialChoices.style.display = "block";
    }

    choiceButtons.forEach(button => {
        button.style.display = "block";
    });
});
