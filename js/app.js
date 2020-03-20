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
            
        })
        
    })

})