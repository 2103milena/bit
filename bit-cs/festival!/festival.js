"use strict";

(function () {

console.log("Hi!");

})();


function Genre(genreName){
    this.name = genreName;
    this.getData = function () {
        return this.name[0] + this.name [this.name.length -1];
    }
}


function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
    this.titleLengthShort = function() {
        return this.title + this.length + this.genre.getData();
    }

}

function Program(date, listOfMovies, totNumOfMov) {
    this.date = Date.now;
    this.listOfMovies = [];
    this.totNumOfMov = totNumOfMov;
    this.getData = function() {
        for (var i = 0; i < listOfMovies.length; i++){
            return this.date + this.length[listOfMovies.length];
        }
    }
    this.MovieGetData = function() {
            var movieData = this.title + this.length + this.genre.getData();
            return movieData;
    }
}

function Festival (name, listOfProg,numOfMovinAllPr) {
    this.name = name;
    this.listOfProg = [];
    this.numOfMovinAllPr = numOfMovinAllPr;
}
