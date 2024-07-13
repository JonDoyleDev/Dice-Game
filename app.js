let shuffle = 5;

function shuffleWithDelay(index) {
    setTimeout(() => {
        let playerOne = Math.floor(Math.random() * 6) + 1;
        let playerTwo = Math.floor(Math.random() * 6) + 1;

        let imgPlayerOne = document.querySelector(".img1");
        imgPlayerOne.src = `./images/dice${playerOne}.png`;

        let imgPlayerTwo = document.querySelector(".img2");
        imgPlayerTwo.src = `./images/dice${playerTwo}.png`;

        if (index < shuffle - 1) {
            shuffleWithDelay(index + 1);
        } else {
            if (playerOne > playerTwo) {
                document.getElementById("result").innerHTML = "Player One wins!";
            } else if (playerOne < playerTwo) {
                document.getElementById("result").innerHTML = "Player Two wins!";
            } else {
                document.getElementById("result").innerHTML = "It's a tie!";
            }
        }
    }, 500);
}

shuffleWithDelay(0);
