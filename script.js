
const textElement = document.getElementById("text");
const input = document.getElementById("input");
const newTextBtn = document.getElementById("newTextBtn");

const showRes = document.getElementById("showRes");
const modal = document.getElementById("modal");
const btnClose = document.getElementById("btnClose");
const clearSave = document.getElementById("clearSave");

const scoreBoard = document.getElementById("scoreBoard");

const timerElement = document.getElementById("timer");
const resetBtn = document.getElementById("resetBtn");



let scores = JSON.parse(localStorage.getItem("typingScores")) || [];

let isTyping = false;

let texts = [];


let currentText = "";



let startTime;
let timer;


async function getTexts() {

    try {
        const response = await fetch("./texts.json");
        const data = await response.json();
        texts = data.facts; 
        showRandomText();

    } catch (error) {
        console.error(
            "Error loading texts:",
            error
        );

    }

}

function showRandomText() {

    resetTimer();

    const randomIndex = Math.floor(
        Math.random() * texts.length
    );

    currentText = texts[randomIndex];

    textElement.textContent = currentText;

    input.disabled = false;

    input.value = "";

    input.style.color = "";

    input.style.border = "";

}



function startTimer() {

    if (isTyping === false) {
        timerElement.style.color="white";
        isTyping = true;

        startTime = Date.now();

        timer = setInterval(function () {

            const elapsed = Date.now() - startTime;

            
            const seconds = Math.floor(
                elapsed / 1000
            );

            
            const milliseconds = Math.floor(
                (elapsed % 1000) / 10
            );

            
            timerElement.innerText =`${String(seconds).padStart(1, "0")}.${String(milliseconds).padStart(2, "0")} s`;

        }, 10);

    }

}



function stopTimer() {

    clearInterval(timer);
    timerElement.style.color="green";
    isTyping = false;

}


function resetTimer() {

    timerElement.style.color="white";

    clearInterval(timer);

    startTime = null;


    isTyping = false;


    timerElement.textContent = "0.00";

}




function showScores() {

    scoreBoard.innerHTML = "";

    if (scores.length === 0) {

        scoreBoard.innerHTML =
            "<li>No scores yet</li>";

        return;

    }

    // --------------از یک تا اخر --------------
    // for (let i =0 ; i >= scores.length; i++) {

    //      scoreBoard.innerHTML +=` <li><h4>${scores.length-i} -</h4><h4>${scores[scores.length-i]}</h4> </li>`;

    // }
    // -------------------------------------------


    // ------------- از آخر تا اول-------------
    for (let i = scores.length - 1; i >= 0; i--) {

    scoreBoard.innerHTML += `
        <li>
            <h4>${i + 1} -</h4>
            <h4>${scores[i]}</h4>
        </li>
    `;

}
    // -------------------------------------------

}




function clearScores() {

    scores = [];
    localStorage.removeItem("typingScores");

    showScores();
}


newTextBtn.addEventListener("click",showRandomText);

showRes.addEventListener("click", function () {
    modal.style.display = "block";
    showScores();
});
btnClose.addEventListener("click", function () {
    modal.style.display = "none";
});
clearSave.addEventListener("click",clearScores);




resetBtn.addEventListener("click", function () {

    input.disabled = false;

    input.value = "";


    input.style.color = "";

    input.style.border = "";
    input.focus();

    resetTimer();


});



input.addEventListener("input", function () {

    startTimer();

    if (input.value === currentText) {

        input.style.color = "green";

        stopTimer();

        input.disabled = true;

        const finalTime =timerElement.innerText;

        scores.push(finalTime);

 
        localStorage.setItem(
            "typingScores",
            JSON.stringify(scores)
        );


    } else {

        input.style.color = "red";

    }

});

getTexts();