$(document).ready(function(){

originalImageWidths = [];

for(var i = 0; i< images.length; i++) {
  var cur = {};
  cur.width = images[i].width;
  cur.height = images[i].height;

  originalImageWidths.push(cur);
}

  //randomizes position and size of paintings
  var place = function place(){

  var size = ["93,130", "93,60"];

  for(var i = 0; i < images.length; i++){
    var currentRando = Math.floor((Math.random() * 7) + 1);
    images[i].width = originalImageWidths[i].width * currentRando;
    images[i].height = originalImageWidths[i].height * currentRando;
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

//

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

    for(var j = 0; j < images.length; j++){
      $("body").append("<img class ='mobile-image' src='" + images[j].link + "' width='600'>");
    }

    $(".container").click(function(){
      $(".box").removeClass("visible");
    });

    $(".mobile-image").click(function(){
      $(".box").removeClass("visible");
    });


 } else {

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
});


});
