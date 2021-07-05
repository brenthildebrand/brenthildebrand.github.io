$(document).ready(function(){
  $(".thumbnail-container").children("img").first().css({"outline": "1px solid khaki", "box-shadow": "1px 2px 6px khaki"});
  var switchImage = function(that){
    var big = $(".big")

    big.attr("src", $(that).attr("src"));
    $(".thumbnail-container").children("img").css({"outline": "none", "box-shadow": "none"});
    $(that).css({"outline": "1px solid khaki", "box-shadow": "1px 2px 6px khaki"});
  }
  $(".thumbnail-container").children("img").click(function(){
    switchImage(this);
  });

setTimeout(function() {  var currentImg = 0;



  var imgPositions = [];
  $(".info--img").each(function(){
    imgPositions.push(this.offsetLeft);
  });




  $(".left-arrow").click(function(){
    if(currentImg > 0) {
      currentImg--;

      $(".info--img-container").css({"margin-left":`-${imgPositions[currentImg]}px`});
    }


    if(currentImg == 0) {
      $(".left-arrow").addClass("arrow__inactive");
    }

    $(".right-arrow").removeClass("arrow__inactive");



  });

  $(".right-arrow").click(function(){
    if($(".info--img").length - 1 > currentImg) {
      currentImg++;
      // console.log($(".info--img")[currentImg].getBoundingClientRect());
      // var newPos = $(".info--img")[currentImg].getBoundingClientRect().left - 300;
      // console.log(newPos);

      $(".info--img-container").css({"margin-left":`-${imgPositions[currentImg]}px`});

    }

    if(currentImg + 1 == $(".info--img").length) {
      $(".right-arrow").addClass("arrow__inactive");
    }

    $(".left-arrow").removeClass("arrow__inactive");
  })}, 2000);

  if(typeof shopItems !== "undefined") {
    shopItems.forEach(function(that){
      if(that["sold"] == true) {
        let thing = $(".archive").append(`<div class="shop-item"><img src="images/shop/${that["images"][0]}"/><h4>${that["name"]}</h4></div>`);
        // console.log($(".archive").children().last());
        $(".archive").children().last().click(function(){
          let thumbnails;
          if(that["images"].length > 1) {

          thumbnails = document.createElement("div");
          for(let i = 0; i < that["images"].length; i++) {
            let img = document.createElement("img");
            img.setAttribute("src", `images/shop/${that["images"][i]}`);
            thumbnails.appendChild(img);

            $(img).on("click", function(){
              $(".shop-view-image").attr("src", img.getAttribute("src"));
              $(".shop-thumbnails div img").css({
                "outline": "none",
                "box-shadow": "none"
              });
              $(img).css({
                "outline": "1px solid khaki",
                "box-shadow": "1px 2px 6px khaki"
              });
            });
          }
        } else {
          thumbnails = "";
        }
          $("body").append("<div class='wrap'></div>");
          $("body").addClass("overflow-hidden");
          $("body").append(`<div class="shop-view"><img class="shop-view-image" src="images/shop/${that["images"][0]}"><div class="shop-thumbnails"></div><div class="shop-view-info"><h2>${that["name"]}</h2><p>size: ${that["size"]}</p><p>materials: ${that["materials"]}</p><p>not available</p><p class="rule">Contact brent.e.hildebrand@gmail.com for any inquiries.<br></br><a href="https://www.instagram.com/brent__hildebrand/">Instagram</a></p></div><div class="exit"></div></div>`);
          $(".shop-thumbnails").append(thumbnails);

          $(".exit").click(function(){
            $(this).parent().remove();
            $("body").removeClass("overflow-hidden");
            $(".wrap").remove();
          });
        });
      } else {
        $(".shop-container").append(`<div class="shop-item"><img src="images/shop/${that["name"].replace(" ", "")}.jpg"/><h4>${that["name"]}</h4></div>`);
        $(".shop-container").children().last().click(function(){


          let thumbnails;
          if(that["images"].length > 1) {

          thumbnails = document.createElement("div");
          for(let i = 0; i < that["images"].length; i++) {
            let img = document.createElement("img");

            img.setAttribute("src", `images/shop/${that["images"][i]}`);
            thumbnails.appendChild(img);

            $(img).on("click", function(){
              $(".shop-view-image").attr("src", img.getAttribute("src"))
              $(".shop-thumbnails div img").css({
                "outline": "none",
                "box-shadow": "none"
              });
              $(img).css({
                "outline": "1px solid khaki",
                "box-shadow": "1px 2px 6px khaki"
              });
            });
          }
        } else {
          thumbnails = "";
        }

          $("body").append("<div class='wrap'></div>");
          $("body").addClass("overflow-hidden");
          $("body").append(`<div class="shop-view"><img class="shop-view-image" src="images/shop/${that["images"][0]}"><div class="shop-thumbnails"></div><div class="shop-view-info"><h2>${that["name"]}</h2><p>size:${that["size"]}</p><p>materials: ${that["materials"]}</p><p>price: $${that["price"]}</p><p class="rule">Contact brent.e.hildebrand@gmail.com or message on <a href="https://www.instagram.com/brent__hildebrand/">Instagram</a> to purchase.</p></div><div class="exit"></div></div>`);
          $(".shop-thumbnails").append(thumbnails);

          $(".exit").click(function(){
            $(this).parent().remove();
            $("body").removeClass("overflow-hidden");
            $(".wrap").remove();
          });
        });
      }
    })
  }
});
