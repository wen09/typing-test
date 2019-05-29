//gameplat: in sheet music style
var start_1_stop_0 = 0;

var total_time = 7;
var current_time = 7;

function game_play(){
    display_input();
}

function display_input(){
    //get sheet music
    //need to work on that
    var sheet_music = "abcdefg";

    var current_char_index = total_time-current_time;
    var current_char = sheet_music[current_char_index];
    
    console.log(current_time);
    //display current_char on window
    // console.log(current_char_index + ' ' + current_char);
    // current_time--;
}

display_input();
// setInterval(game_play, 50);