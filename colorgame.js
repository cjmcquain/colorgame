var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numSquares = 6;
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        }
        )
    };

    for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i]

    squares[i].addEventListener("click", function() {

        var clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}
    reset();
};



resetButton.addEventListener("click", function() {
reset();
});


function reset() {
        colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
            } else {
                squares[i].style.display = "none";
             }
        
        
    }
    h1.style.background = "steelblue";
};



function changeColors(color){
    // Loop through all squares
    for (var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
    // Change each color to match given color

};

function pickColor(){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
};

function generateRandomColors(num){
 // Create array
    var arr = []
 // Add num random colors to array
    for (var i = 0; i < num; i++){
        arr.push(randomColor());
    }
 // Return that array
    return arr;
};

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
};