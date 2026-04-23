console.log("script.js connected!");

let userAnswers = [];
    for(let anser of userAnswers)

let buttons = document.querySelectorAll(".answer-btn");

questionBlocks.forEach(function(block, qIndex) {
   
    let buttons = block.querySelectorAll(".answer-btn");
buttons.forEach(function(button, index){
  button.addEventListener("click", function() {
    
    buttons.forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
    
    userAnswers[qIndex] = button.dataset.answer;

    button.classList.add("selected");
    });
  });
});

function displayResult(){
    let score = 0;
    
    for (let answer of userAnswers) {
        if (answer === "A") score += 1;
        else if (answer === "B") score += 2;
        else if (answer === "C") score += 3;
        else if (answer === "D") score +=4;
    }

    let result = "";

    if (score <= 8){
        result = "Friends in Low Places";
    }
    else if (score <= 12){
        result = "Man! I Feel Like a Woman";
    }
    else if (score <= 16){
        result = "Chattahoochee";
    }
    else {
        result = "Boot Scootin' Boogie";
    }
document.getElementById("result-text").textContent = result;
document.getElementById("result-container").style.display = "block";
}

document.getElementById("show-result").addEventListener("click", displayResult);
