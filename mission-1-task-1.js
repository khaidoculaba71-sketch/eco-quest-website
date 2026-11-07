
let currentOrganism = "";

const submitImages = [
    "images/grass.png",
    "images/deer.png",
    "images/rabbit.png",
    "images/bird.png"
];

let submitIndex = 0;

function openAnswerBox(organism) {
    currentOrganism = organism;

    const overlay = document.getElementById("answer-overlay");
    const image = document.getElementById("answer-image");
    const input = document.getElementById("player-answer");

    // Hide the NEXT button while answering
    document.getElementById("next-mission-button").style.display = "none";

    image.src = "images/" + organism + "-box.png";

    // Hide all clickable boxes while answering
    document.querySelectorAll(".click-box").forEach(box => {
        box.style.display = "none";
    });

    input.style.display = "block";
    document.querySelector(".submit-button").style.display = "block";
    document.querySelector(".close-button").style.display = "block";

    input.value = "";
    overlay.classList.remove("hidden");

    input.focus();
}

function closeAnswerBox() {
    document.getElementById("answer-overlay").classList.add("hidden");

    document.querySelectorAll(".click-box").forEach(box => {
        box.style.pointerEvents = "auto";
    });
}

function checkAnswer() {
    const input = document.getElementById("player-answer");
    const answer = input.value.trim().toLowerCase();

    // Check empty answer
    if (answer === "") {
        alert("Please enter your answer first!");
        input.focus();
        return;
    }

    // Check incorrect answer
    if (answer !== currentOrganism) {
        alert("Incorrect answer! Try again.");
        input.value = "";
        input.focus();
        return;
    }

    // Hide answer controls
    input.style.display = "none";
    document.querySelector(".submit-button").style.display = "none";
    document.querySelector(".close-button").style.display = "none";

    input.value = "";

    // Show next organism
    if (submitIndex < submitImages.length) {

        document.getElementById("answer-image").src =
            submitImages[submitIndex];

        submitIndex++;

        // Show the next clickable box
        const nextBox = document.querySelector(
            ".box-" + (submitIndex + 1)
        );

        if (nextBox) {
            nextBox.style.display = "block";
            nextBox.style.background = "rgba(255, 0, 0, 0.5)";
            nextBox.style.border = "3px solid red";
            nextBox.style.opacity = "1";
            nextBox.style.zIndex = "20";
        }

    } else {

        // Show completed picture after Bird
        document.getElementById("answer-image").src =
            "images/forest-completed.png";

        // Show NEXT button
        document.getElementById("next-mission-button").style.display = "block";

        alert("Congratulations! You have completed Meet the Forest Residents!");
    }
}

// Go to Mission Map 2
function goToMission2() {
    window.location.href = "mission-map-2.html";
}
