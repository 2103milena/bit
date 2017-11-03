var input = $(".input");
var button = $(".button");
var img = $("img");
var link = $("a");
var $container = $(".container");
// var $movie_name



var request = $.ajax({
    url: "http://api.tvmaze.com/shows",
    method: "get"
});


request.done(function (lista) {
    console.log(lista);

    for (var i = 0; i < 50; i++) {
        var element = lista[i];

        $container.append(`<div class="col-md-4 col-lg-3"><img src="${element.image.medium}"/><p><a href=#>${element.name}</a></p></div>`);
    
    }

});



// first function end



$("a").on("click", function () {

    var filmId = localStorage.getItem("id")
    
    });
    