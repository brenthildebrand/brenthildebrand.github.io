$(document).ready(function(){

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    //$(".container").remove();
    $("#q").css({"width":"100%","text-align":"center","font-size":"40px", "position":"absolute","margin-top":"20px"});
    $(".box").css({"width":"60%","margin-left":"0","font-size":"40px", "position":"absolute", "height":"45%", "left":"10%","margin-top":"20px","padding":"10%"});
    $("#x").css({"right":"40px", "top":"40px"});
    $("body").append("<img class ='mobile-image' src='images/4.jpg' width='900'><br>");
    $("body").append("<img class ='mobile-image' src='images/Cowboy1.jpg' width='900'><br>");
    $("body").append("<img class ='mobile-image' src='images/Chair1.png' width='900'><br>");
    $("body").append("<img class ='mobile-image' src='images/5.jpg' width='900'><br>");
    $("body").append("<img class ='mobile-image' src='images/mug1.png' width='900'><br>");
    $("body").append("<img class ='mobile-image' src='images/7.jpg' width='900'><br>");
    $("body").append("<img class ='mobile-image' src='images/6.jpg' width='900'><br>");
    $("body").append("<img class ='mobile-image' src='images/8.jpg' width='900'><br>");
    $("body").append("<img class ='mobile-image' src='images/Cowboy2.png' width='900'><br>");
    $("body").append("<img class ='mobile-image' src='images/9.png' width='900'><br>");
    $("body").append("<img class ='mobile-image' src='images/boat.jpg' width='900'><br>");
    $("body").append("<img class ='mobile-image' src='images/3.jpg' width='900'><br>");


    $(".container").click(function(){
      $(".box").removeClass("visible");
    });

    $(".mobile-image").click(function(){
      $(".box").removeClass("visible");
    });


 } else {

   var place = function(){

  var images = [{"link":"images/Cowboy1.jpg", "width":30, "height":21}, {"link":"images/Chair1.png", "linkon":"images/Chairon.png", "width":23, "height":34}, {"link":"images/4.jpg", "width":20, "height":22}, {"link":"images/5-2.jpg", "width":23, "height":28}, {"link":"images/mug1.png", "linkon":"images/mugon.png", "width":20, "height":20}, {"link":"images/7-2.jpg", "width":18, "height":22}, {"link":"images/6.jpg", "width": 20, "height":24}, {"link":"images/8.jpg", "width": 26, "height":23}, {"link":"images/Cowboy2.png", "linkon":"images/Cowboy2on.png", "width":20, "height":17}, {"link":"images/boat.jpg", "width":20, "height":26}, {"link":"images/9.png", "linkon":"images/9on.png", "width":20, "height":20}, {"link":"images/3.jpg", "width":23, "height":31}];

  var size = ["93,130", "93,60"];

  for(var i = 0; i < images.length; i++){
    var currentRando = Math.floor((Math.random() * 7) + 1);
    images[i].width = images[i].width * currentRando;
    images[i].height = images[i].height * currentRando;
  }

    $(".img").remove();

    for(var j = 0; j < images.length; j++){
          $("body").append('<div class="img ui-widget-content" id="draggable resizable" style="background-image: url(' + images[j].link + '); background-size: cover; width: ' + images[j].width +'px; height: '+ images[j].height + 'px; top: ' + (Math.floor((Math.random() * 70) + 10)) + 'vh; left: ' + (Math.floor((Math.random() * 80) + 10)) + 'vw;"></div>');
    }


/////////////
var color = ["purple", "orange", "red", "violet", "green", "blue"];
currentColor = 0;

$(function() {
  $( ".img" ).draggable({ containment: "#containment-wrapper", scroll: false });
});

$(".container").click(function(){
  $(".active").resizable("disable");
  $(".active-png").resizable("disable");
  $(".img").css("box-shadow", "0px 0px .5rem 2px transparent");
  $(".img").removeClass("active");
  $(".png").addClass("inactive-png");
  $(".png").removeClass("active-png");
  $(".box").removeClass("visible");
});


$(".img").on("mousedown", function(){
  if (!$(this).hasClass("active")) {

  if(currentColor < color.length -1 ){
    currentColor = currentColor + 1;
  } else {
    currentColor = 0;
  }

  $(".active").resizable("disable");
  $(".active-png").resizable("disable");
  $(".img").removeClass("active");
  $(".img").css("filter", "none");

  $(this).css("filter", "drop-shadow(0px 0px 4px " + color[currentColor] + ")");
  $(this).addClass("active");
  $(this).appendTo("body");


  $(function() {
$( ".active" ).resizable({
  disabled: false,
  aspectRatio: true
});
});

}
});

};

place();

}

$(".img").click(function(){
  $(".box").removeClass("visible");
});

$("#q").click(function(){
  $(".box").addClass("visible");
});

$("#x").click(function(){
$(".box").removeClass("visible");
});

$("body").on("click", "#r", function(){
  place();
  console.log("hello");
});


});
