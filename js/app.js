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
    })

    //if rock is selected
    $(".rock-button").click(function() {
        let answer = getRandomInt(3);

        $(".hand").addClass("upDown-animation");

        setTimeout(function() {
            if(answer === 2) {
                alert("YOU WON");
                $(".player-score-value").text(++player_score);
            } else if(answer == 0) {
                alert("TIE");
            } else {
                alert("YOU LOST!");
                $(".computer-score-value").text(++computer_score);
            }

            $(".hand").removeClass("upDown-animation");
        }, 1000);

        
    })

    //if paper is selected
    $(".paper-button").click(function() {
        let answer = getRandomInt(3);
        
        $(".hand").addClass("upDown-animation");

        setTimeout(function() {
            if(answer === 0) {
                alert("YOU WON");
                $(".player-score-value").text(++player_score);
            } else if(answer == 1) {
                alert("TIE");
            } else {
                alert("YOU LOST!");
                $(".computer-score-value").text(++computer_score);
            }

            $(".hand").removeClass("upDown-animation");
        }, 1000);
    })


    //if scissor is selected
    $(".scissor-button").click(function() {
        let answer = getRandomInt(3);

        $(".hand").addClass("upDown-animation");

        setTimeout(function() {
            if(answer === 1) {
                alert("YOU WON");
                $(".player-score-value").text(++player_score);
            } else if(answer == 2) {
                alert("TIE");
            } else {
                alert("YOU LOST!");
                $(".computer-score-value").text(++computer_score);
            }

            $(".hand").removeClass("upDown-animation");
        }, 1000);

        
    })

});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function upDownAnimation() {
    
}