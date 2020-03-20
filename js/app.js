//0 -- Rock     1 -- Paper      2 -- Scissors

$(document).ready(function() {

    let player_score = 0;
    let computer_score = 0;

    $('.yes-button').click(function() {
        

        $(".player-score-value").text(player_score);
        $(".computer-score-value").text(computer_score);

        $(".starting-screen").fadeOut(500, function() {
            $(".heading").css("margin-bottom", "5%");
            $(".play-section").fadeIn(500);
        });


        $(".rock-button").click(function() {
            let answer = getRandomInt(3);

            if(answer === 2) {
                alert("YOU WON");
            } else if(answer == 0) {
                alert("TIE");
            } else {
                alert("YOU LOST!");
            }
        })

        $(".paper-button").click(function() {
            let answer = getRandomInt(3);

            if(answer === 0) {
                alert("YOU WON");
            } else if(answer == 1) {
                alert("TIE");
            } else {
                alert("YOU LOST!");
            }
        })

        $(".scissor-button").click(function() {
            let answer = getRandomInt(3);

            if(answer === 1) {
                alert("YOU WON");
            } else if(answer == 2) {
                alert("TIE");
            } else {
                alert("YOU LOST!");
            }
        })
        
    })

})

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}