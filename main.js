/*
=======================================================
** Week 2 - Project 1 **

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem.

=======================================================
*/


// 0. Connect the main.js document to the HTML page.
/*    Add to the bottom of the HTML page: <script src="main.js"></script>*/
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");




// 1. Output each item in the following Array to your console within their own paragraphs:
var livingRoom = ['couch', 'lamp', 'rug', 'shelf'];
for (var i = 0; i < livingRoom.length; i++) {
    var furniture = livingRoom[i]
    document.getElementById("q1").innerHTML += "<p>" + furniture + "</p>"
}


// 2. Using a loop, log numbers 22-33 within their own paragraphs.

for (var i = 22; i < 34; i++) {
    document.getElementById("q2").innerHTML += "<p>" + i + "</p>"
}



// 3. Using a similar loop, log numbers 75 to 100, only in increments of five.
for (var i = 75; i <= 100; i += 5) {
    document.getElementById("q3").innerHTML += "<p>" + i + "</p>"
}




// 4. Write a while loop that displays paragraphs of "This is how a professional loops." to the HTML page 5 times.

var num = 0;

while (num < 5) {
    num++;
    document.getElementById("q4").innerHTML += "<p>This is how a professional loops.</p>";
}




// 5. Separately, use both a for loop and while loop to do the same thing.
//     Display in unique paragraphs the sentence "At home, I have _____ cats."
//     The numbers should range from 10 to 110, in increments of 25.


var cats = 10
while (cats < 110) {
    cats += 25;
    document.getElementById("q5").innerHTML += "<p>At home, I have " + cats + " cats.</p>";
}

for (cats = 10; cats <= 110; cats += 25) {
    document.getElementById("q5").innerHTML += "<p>At home, I have " + cats + " cats.</p>";
}


// 6. Given the following Array, display in unique paragraphs'Even' if the number is even, 'Even and greater than 10' if the
//    number is even and greater than 10, and 'Odd' if the number is odd.
//    HINT: Google 'remainder operator'
var numArray = [2, 17, 9, 24, 8];

for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] > 10 && numArray[i] % 2 == 0) {
        document.getElementById("q6").innerHTML += "<p>Even and greater than 10</p>"
    } else if (numArray[i] % 2 == 0) {
        document.getElementById("q6").innerHTML += "<p>Even</p>"
    } else {
        document.getElementById("q6").innerHTML += "<p>Odd</p>"
    }
}



// 7. Using the following Array, create variable called numThrees with the value [13, 23, 33, 43, 53, 63, 73]
var numArray = [13, 15, 17, 23, 25, 27, 33, 35, 37, 43, 45, 47, 53, 55, 57, 63, 65, 67, 73, 75, 77];
var numThrees = [];
for (var i = 0; i < numArray.length; i++) {
    if ((numArray[i] - 3) % 10 == 0) {
        numThrees.push(numArray[i]);
    }
}
document.getElementById("q7").innerHTML = numThrees;







// 8. Write a loop that outputs the following to unique paragraphs:
// #
// ##
// ###
// ####
// #####
// ######
// #######

var pound = "";
for (var i = 0; i < 7; i++) {
    pound += "#";
    document.getElementById("q8").innerHTML += "<p>" + pound + "</p>";
}



// 9. FIZZ BUZZ
// Write a program that uses console.log to print each number up to 100, with a couple exceptions...
// If the number is divisible by 3, print "Fizz" instead of the number.
// If the number is divisible by 5, print "Buzz" instead of the number.
// If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.

for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        document.getElementById("q9").innerHTML += "<p>FizzBuzz~!</p>"
    } else if (i % 3 == 0) {
        document.getElementById("q9").innerHTML += "<p>Fizz~</p>";
    } else if (i % 5 == 0) {
        document.getElementById("q9").innerHTML += "<p>Buzz!</p>";
    } else {
        document.getElementById("q9").innerHTML += "<p>" + i + "</p>";
    }
}




// RO SHAM BO!
// We're going to create a paper, rock, scissors game that prompts you for your choice and allows the computer to
// randomly choose. You will use an alert to define the winner.

// 10. Use a variable called "human" to prompt the user to type their choice.
// 11. Define a variable called "computer" and use Math.random to allow the computer to randomly select a number.
//     For reference:
//     Math.random gives you a random number between 0 and 1, which is different each time you call it.
// 12. Let's start our conditional statement.
//     If the random computer number falls between 0 and .33, the computer is "rock"
//     If the random computer number falls between .34 and .66, the computer is "paper"
//     If the random computer number falls between .67 and 1, the computer is "scissors"
// 13. Using both "human" and the computer choice, begin another conditional statement to compare them.
// 14. After comparing, determine who has won; the computer or the human!
// 15. Give yourself a high five for completing your first javascript game!
// BONUS: What happens if your user enters something other than "rock", "paper", or "scissors?". Change your default case
//     to print a snarky message to the console if the input doesn't match any of the options.

var play = function() {
    var humanAnswer = window.prompt("Do you choose rock, paper, or scissors? (don't capitalize your letters!)")
    var computer = Math.random(0, 1);
    if (computer <= 0.33) {
        var computerAnswer = "rock";
    } else if (computer > 0.33 && computer <= .66) {
        var computerAnswer = "paper";
    } else if (computer > 0.67 && computer <= 1) {
        var computerAnswer = "scissors";
    }

    document.getElementById("q10human").innerHTML = "<p>You chose " + humanAnswer + ".</p>";
    document.getElementById("q10computer").innerHTML = "<p>The computer chose " + computerAnswer + ".</p>"

    if (humanAnswer === computerAnswer) {
        document.getElementById("q10").innerHTML = "<p>The result is a tie!</p>";
    } else if (humanAnswer === "rock") {
        if (computerAnswer === "scissors") {
            document.getElementById("q10").innerHTML = "<p>You win! Rock beats scissors.</p>";
        } else {
            document.getElementById("q10").innerHTML = "<p>You lose! Paper beats rock.</p>";
        }
    } else if (humanAnswer === "scissors") {
        if (computerAnswer === "paper") {
            document.getElementById("q10").innerHTML = "<p>You win! Scissors cut up that paper.</p>";
        } else {
            document.getElementById("q10").innerHTML = "<p>You lose! Rock breaks scissors.</p>";
        }

    } else if (humanAnswer === "paper") {
        if (computerAnswer === "rock") {
            document.getElementById("q10").innerHTML = "<p>You win! Paper descends gently over rock, smothering it.</p>";
        } else {
            document.getElementById("q10").innerHTML = "<p>You lose! Scissors cut your paper into teeny tiny pieces.</p>";
        }

    } else {
        document.getElementById("q10").innerHTML = "<p> You didn't enter rock, paper or scissors.</p><p>You don't get how this works, do you?</p><p>There's no way I can know if " + humanAnswer + " would beat " + computerAnswer + ".</p><p>I'm just a dang program written by a barista.</p>"
    }

};


// ADVANCED TRACK
// 16. Write a conditional statement to find the largest of the numbers in the array provided.
var numberBlock = [-5, -2, -6, 0, -1]

var biggestNum = numberBlock[0];
for (var i = 0; i < numberBlock.length; i++) {
    if (numberBlock[i] > biggestNum) {
        biggestNum = numberBlock[i]
    }
}
document.getElementById("q16").innerHTML = ("<p>The largest number is " + biggestNum + ".</p>");


// HEADS OR TAILS?
// 17. Use the following variable for your coin flip action:
var coin = Math.floor(Math.random() * 2);
//     We're using Math.random again, along with Math.floor.
//     Remember, Math.random gives you a random number between 0 and 1.
//     Calling Math.floor on that number will truncate the decimal, and give you a
//     random number within the bounds of your array. (In this case, our array will only contain two items.)

var sides = ["heads", "tails"];

var results = sides[coin];

document.getElementById("q17").innerHTML = results;




// 18. Use a do/while loop to keep flipping the coin until you get tails.
var coin2 = Math.floor(Math.random() * 2);

var sides2 = ["heads", "tails"];

var results2 = sides[coin];
document.getElementById("q18").innerHTML += "<p>Your first flip was " + results2 + "</p>";

while (results2 === "heads") {
    var coin2 = Math.floor(Math.random() * 2);
    if (coin2 === 1) {
        results = "heads";
        document.getElementById("q18").innerHTML += "<p>Still heads!</p>";
    } else {
        results2 = "tails";
        document.getElementById("q18").innerHTML += "<p>Tails, finally!</p>";
    }

}



// CHESS BOARD
// 19. Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

//Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
var board = "";
for (var y = 0; y < 8; y++) {
    for (var x = 0; x < 8; x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "■";
        }
    }
    board += "\n";
}
console.log(board);
document.getElementById("q19").innerHTML = "<p>Check out that console.</p>"




// 20. When you have a program that generates this pattern, define a variable size = 8 and change the program
// sso that it works for any size, outputting a grid of the given width and height.

var grid = 11;

var board2 = "";
for (var y = 0; y < grid; y++) {
    for (var x = 0; x < grid; x++) {
        if ((x + y) % 2 == 0) {
            board2 += " ";
        } else {
            board2 += "■";
        }
    }
    board2 += "\n";
}
console.log(board2);
document.getElementById("q20").innerHTML = "<p>Check out that sweet, sweet console.</p>"







/* SANDBOX TRACK

Solving all of these problems is a great step in the right direction,
but the next step is coming up with your own arrangements to solve
new problems. Practice creating your own problems to solve and their solutions -
you can even challenge your classmates!

Also, consider how you can add/remove CSS styles to create added presentation with the results.

*/
