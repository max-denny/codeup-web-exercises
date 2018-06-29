"use strict";

console.log("This is linked");

/*$(function() {
    $("#playButton").click(function(){
$("#playOutput").text($("#playInput").val());
    })
    $(".importante").on("mouseover", function (){
      $(this).css("background-color","yellow")
    })
    alert($("#gsd").text());
    alert($("#corgi").text());
})*/

/*$(function() {


    $("#codeup").css("border", "1px solid red");

});

*/

$(function(){
    $("li").css("font-size", "20px")
    $("h1").css("background-color","gold")
    $("li").css("background-color","plum")
    $("p").css("background-color","peru")
    alert($("h1").text());


})


$('div').hover(function() {
   $(this).css('border-radius', '100px')
})

$('h1').click(function(){
    $(this).css('background-color', 'coral');
})

$('p').dblclick(function(){
    $(this).css('font-size', '18px');
})

$('li').hover(function(){
    $(this).css('color', 'red');
})

$('li').mouseleave(function(){
    $(this).css('color', 'black');
})
