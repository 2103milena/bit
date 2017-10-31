
// var image = $("<img>");
    // image.attr("src", "http://www1.pictures.zimbio.com/mp/ibN19R14ADzl.jpg");
    // $("body").append(image);



    // var image1 = $("<img>");
    // image1.attr("src", "http://cdn.akc.org/content/article-body-image/beagle_puppy_with_toy.jpg");
    // $("body").append(image1);


    
    // var imagesArray = [];
     

    // for(var i = 0;  )


// });

$(function() {

var array = ["http://www1.pictures.zimbio.com/mp/ibN19R14ADzl.jpg", "http://cdn.akc.org/content/article-body-image/beagle_puppy_with_toy.jpg"]

for (var i = 0; i < array.length; i++)

{
    var image = $("img");
    image.attr("src", array[i]);
    $("body".append(image));

}
});