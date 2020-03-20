$(document).ready(function() {

    let player_score = 0;
    let computer_score = 0;

    $('.yes-button').click(function() {
        

        $(".player-score-value").text(player_score);
        $(".computer-score-value").text(computer_score);

        $(".starting-screen").fadeOut(1000, function() {
            $(".heading").css("padding-bottom", "5%");
            $(".play-section").fadeIn(1000);
        });

        

    })

})