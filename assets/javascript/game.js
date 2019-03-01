$(document).ready(function () {

    // Declare variables
    var randomNumber = 0;
    var scoreNumber = 0;
    var redCrystalNum = 0;
    var blueCrystalNum = 0;
    var orangeCrystalNum = 0;
    var purpleCrystalNum = 0;
    var wins = 0;
    var losses = 0;


    // Game starts, random number generated is between 19 - 120.
    // Crystal numbers are randomly generated between 1-12

    var gameStart = function () {
        randomNumber = Math.floor(Math.random() * 109) + 12;
        console.log("Random Number: " + randomNumber);
        $("#random-number").text(randomNumber);
        $("#score").text(scoreNumber);
        console.log("Score: " + scoreNumber);

        //Generate a random number for each crystal between 1 - 12.
        redCrystalNum = Math.floor(Math.random() * 12) + 1;
        console.log("Red Crystal: " + redCrystalNum);

        blueCrystalNum = Math.floor(Math.random() * 12) + 1;
        console.log("Blue Crystal: " + blueCrystalNum);

        orangeCrystalNum = Math.floor(Math.random() * 12) + 1;
        console.log("Orange Crystal: " + orangeCrystalNum);

        purpleCrystalNum = Math.floor(Math.random() * 12) + 1;
        console.log("Purple Crystal: " + purpleCrystalNum);



    }

    // Starts game by choosing random number and numbers for each crystal.
    gameStart();


    // Create a click event for each crystal.
    // Add the number value of the crystal to the score number.
    // Pass the result to the winLose function.

    $("#crystal-1").on("click", function () {
        scoreNumber = scoreNumber + redCrystalNum;
        console.log("Score: " + scoreNumber);
        $("#score").text(scoreNumber);

        winLose(scoreNumber, randomNumber);

    });

    $("#crystal-2").on("click", function () {
        scoreNumber = scoreNumber + blueCrystalNum;
        console.log("Score: " + scoreNumber);
        $("#score").text(scoreNumber);

        winLose(scoreNumber, randomNumber);

    });

    $("#crystal-3").on("click", function () {
        scoreNumber = scoreNumber + orangeCrystalNum;
        console.log("Score: " + scoreNumber);
        $("#score").text(scoreNumber);

        winLose(scoreNumber, randomNumber);

    });

    $("#crystal-4").on("click", function () {
        scoreNumber = scoreNumber + purpleCrystalNum;
        console.log("Score: " + scoreNumber);
        $("#score").text(scoreNumber);

        winLose(scoreNumber, randomNumber);

    });


    // Determines if the score equals the random number.  If win / lose condition is achieved,
    // score resets to 0 and game restarts.

    var winLose = function () {
        if (scoreNumber === randomNumber) {
            wins++;
            $("#wins").text(wins);
            console.log("Number of wins: " + wins);
            $("#status").text("You Win!!");
            scoreNumber = 0;
            gameStart();
        }
        else if (scoreNumber > randomNumber) {
            losses++;
            $("#losses").text(losses);
            console.log("Number of losses: " + losses);
            $("#status").text("You Lose!!");
            scoreNumber = 0;
            gameStart();
        }

    }


});

