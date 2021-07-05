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
    }
  } else {
    thumbnails = "";
  }
    $("body").append("<div class='wrap'></div>");
    $("body").addClass("overflow-hidden");
    $("body").append(`<div class="shop-view"><img class="shop-view-image" src="images/shop/${that["name"].replace(" ", "")}.jpg"><div class="shop-view-info"><h2>${that["name"]}</h2><p>size: ${that["size"]}</p><p>materials: ${that["materials"]}</p><p>price: $${that["price"]}</p><p class="rule">Contact brent.e.hildebrand@gmail.com to purchase.</p></div><div class="exit"></div><div class="shop-thumbnails"></div></div>`);
    $(".shop-thumbnails").append(thumbnails);

    if (thumbnails == "") {
      $(".shop-view-image").addClass("shop-view-image-big")[0];

      console.log($(".shop-view-image"));
    }

    $(".exit").click(function(){
      $(this).parent().remove();
      $("body").removeClass("overflow-hidden");
      $(".wrap").remove();
    });
  });
}
