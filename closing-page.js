

function exitWebsite() {
    window.location.href = "./index.html";

    setTimeout(function () {
        if (!window.closed) {
            alert("Thank you for playing ECO QUEST, Adventurer!");
        }
    }, 300);
}
