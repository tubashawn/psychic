var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
    "T", "U", "V", "W", "X", "Y", "Z"
];
var secretLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
 console.log(secretLetter);
var win = 0;
var lose = 0;
var remains = 10;
var letter = [];


 document.onkeyup = function (event) {
    var press = event.key;
    var big = press.toUpperCase();
    document.getElementById("guess").textContent = big;
    if(big == secretLetter) {
        alert("Congratulations! You got it right!");
        document.getElementById("won").textContent = win += 1;
        var newSecret = alphabet[Math.floor(Math.random() * alphabet.length)];
        secretLetter = newSecret;
        console.log(secretLetter);
        document.getElementById("remaining").textContent = 10;
        lose = 10;
        } else {
            alert("Not quite, try again!");
            document.getElementById("remaining").textContent = remains -=1;
            if(remains == 0) {
                alert("You are out of guesses. Better luck next time!");
                document.getElementById("lost").textContent = lose  += 1;
                document.getElementById("remaining").textContent = 10;
                lose = 10;
            }
        }
    };


