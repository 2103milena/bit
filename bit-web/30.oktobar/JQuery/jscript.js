$(function(){

    var main = document.querySelector("body");
    var paragraf = document.createElement("p");

    paragraf.textContent = "Hello World!";
    main.appendChild(paragraf);


    var prviDeo = $("li:first").addClass("prvi");
    var sve = $("li").addClass("svi");

    var drugiDeo = $("#treci").addClass("active");

    var ln =$("#someId li").length;

    ln = ln / 2;
    $("#someId li:eq("+ln+")").addClass("pozadina");
});


