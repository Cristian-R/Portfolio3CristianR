/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"Script";

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
    $(".Nike").css("background-color", "red");
    $('p:last').css({"background-color": "Red", "color": "black"});
    $('p:first').css({"background-color": "Green", "color": "white"});

    $('#Adidas').accordion({header: "h3"});

    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);

    $('div').bind('moseover', mouseOverMe());

    $('h1').bind('click', mouseClick);

    $('#replaceWText').bind('click', replaceWText);
    $('#randPara').bind('click', addAPara);
    $('#removePara').bind('click', removeAPara);
    $('#show').css('visibility', 'hidden');


});

function removeAPara() {
    $('#randPara p:last').remove();
}

function addAPara() {
    $('#randPara').append('<p>ADDED</p>');
}

function replaceWText() {
    $('#replaceWText').text('Replaced!');
}





function mouseOverMe() {
    $("h1").html("Bayern is the best");
}

function mouseOutMe() {
    $('h1').html('Bayern Munich');
}

function mouseClick() {
    $('p').html("BEST GOALIE IN  THE WORLD");
}


