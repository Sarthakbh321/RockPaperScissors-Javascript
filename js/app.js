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
            $(".player-hand").attr("src", "assets/rock-hand.png")

            if(answer === 2) {
                $(".player-score-value").text(++player_score);
                $(".result").text("YOU WON");
                $(".result-box").fadeIn(100);

                $(".computer-hand").attr("src", "assets/scissor-hand-comp.png");

                setTimeout(function() {
                    $(".result-box").fadeOut(200);
                    $(".player-hand").attr("src", "assets/rock-hand.png");
                    $(".computer-hand").attr("src", "assets/rock-hand-comp.png");
                }, 1000)
            } else if(answer == 0) {
                $(".result").text("IT'S A TIE");
                $(".result-box").fadeIn(100);

                $(".computer-hand").attr("src", "assets/rock-hand-comp.png");

                setTimeout(function() {
                    $(".result-box").fadeOut(200);
                    $(".player-hand").attr("src", "assets/rock-hand.png");
                    $(".computer-hand").attr("src", "assets/rock-hand-comp.png");
                }, 1000)
            } else {
                $(".result").text("YOU LOST");
                $(".computer-score-value").text(++computer_score);
                $(".result-box").fadeIn(100);

                $(".computer-hand").attr("src", "assets/paper-hand-comp.png");

                setTimeout(function() {
                    $(".result-box").fadeOut(200);
                    $(".player-hand").attr("src", "assets/rock-hand.png");
                    $(".computer-hand").attr("src", "assets/rock-hand-comp.png");
                }, 1000)
            }

            $(".hand").removeClass("upDown-animation");
        }, 1000);

        
    })

    //if paper is selected
    $(".paper-button").click(function() {
        let answer = getRandomInt(3);
        
        $(".hand").addClass("upDown-animation");

        setTimeout(function() {
            $(".player-hand").attr("src", "assets/paper-hand.png")
            if(answer === 0) {
                $(".player-score-value").text(++player_score);
                $(".result").text("YOU WON");
                $(".result-box").fadeIn(100);

                $(".computer-hand").attr("src", "assets/rock-hand-comp.png");

                setTimeout(function() {
                    $(".result-box").fadeOut(200);
                    $(".player-hand").attr("src", "assets/rock-hand.png");
                    $(".computer-hand").attr("src", "assets/rock-hand-comp.png");
                }, 1000)
            } else if(answer == 1) {
                $(".result").text("IT'S A TIE");
                $(".result-box").fadeIn(100);

                $(".computer-hand").attr("src", "assets/paper-hand-comp.png");

                setTimeout(function() {
                    $(".result-box").fadeOut(200);
                    $(".player-hand").attr("src", "assets/rock-hand.png");
                    $(".computer-hand").attr("src", "assets/rock-hand-comp.png");
                }, 1000)
            } else {
                $(".computer-score-value").text(++computer_score);
                $(".result").text("YOU LOST");
                $(".result-box").fadeIn(100);

                $(".computer-hand").attr("src", "assets/scissor-hand-comp.png");

                setTimeout(function() {
                    $(".result-box").fadeOut(200);
                    $(".player-hand").attr("src", "assets/rock-hand.png");
                    $(".computer-hand").attr("src", "assets/rock-hand-comp.png");
                }, 1000)
            }

            $(".hand").removeClass("upDown-animation");
        }, 1000);
    })


    //if scissor is selected
    $(".scissor-button").click(function() {
        let answer = getRandomInt(3);

        $(".hand").addClass("upDown-animation");

        setTimeout(function() {
            $(".player-hand").attr("src", "assets/scissor-hand.png")

            if(answer === 1) {
                $(".player-score-value").text(++player_score);
                $(".result").text("YOU WON");
                $(".result-box").fadeIn(100);

                $(".computer-hand").attr("src", "assets/paper-hand-comp.png");

                setTimeout(function() {
                    $(".result-box").fadeOut(200);
                    $(".player-hand").attr("src", "assets/rock-hand.png");
                    $(".computer-hand").attr("src", "assets/rock-hand-comp.png");
                }, 1000)
            } else if(answer == 2) {
                $(".result").text("ITS A TIE");
                $(".result-box").fadeIn(100);

                $(".computer-hand").attr("src", "assets/scissor-hand-comp.png");

                setTimeout(function() {
                    $(".result-box").fadeOut(200);
                    $(".player-hand").attr("src", "assets/rock-hand.png");
                    $(".computer-hand").attr("src", "assets/rock-hand-comp.png");
                }, 1000)
            } else {
                $(".computer-score-value").text(++computer_score);
                $(".result").text("YOU LOST");
                $(".result-box").fadeIn(100);

                $(".computer-hand").attr("src", "assets/rock-hand-comp.png");

                setTimeout(function() {
                    $(".result-box").fadeOut(200);
                    $(".player-hand").attr("src", "assets/rock-hand.png");
                    $(".computer-hand").attr("src", "assets/rock-hand-comp.png");
                }, 1000)
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