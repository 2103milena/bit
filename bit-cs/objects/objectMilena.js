var moi = {
    name: 'Milena',
    lastname: 'Mijovic',
    yearOfBirth: '1991',
    country: 'Serbia',
    languages: function () {
        return this.name + ' speaks english, french and greek. She is from ' + this.country + ".";
    },
    parents: {
        name: 'Desimir',
        lastname: 'Mijovic'
    }
}

console.log(moi.yearOfBirth, moi.name, moi.country)
console.log(moi.languages());


var englishToFrench = {
    car: {
        voiture: {
            synonym: 'bagnole'
        }
    }
}

console.log(englishToFrench.car.voiture.synonym);

//////////////////////////

// operator this koji ce posluziti za imenovanje objekata u drugoj funkciji:

function Country (name, capital, continent, language){
    this.name = name,
    this.capital = capital,
    this.continent = continent,
    this.language = language,
    this.info = function(){
        return  "Country: " + this.name + ", capital: " + this.capital +", continent: " + this.continent + ", language:" + this.language;
    }
}

var serbia = new Country ("Srbija", "Beograd","Evropa", "srpski");
console.log(serbia.info());


// objekat serbia je 'kopija' od 'Country': 



console.log(serbia instanceof Country);


///////////////////////////////////////
// Fuctions returning objects; notEU ima isti isti property kao i evropska drzava ali nemaju istu referencu:

function Drzava (name){
    return {
        name: name
    };
}

var evropskadrzava = new Drzava ("Srbija");
console.log(evropskadrzava.name);

var notEU = new Drzava(evropskadrzava.name);
console.log(notEU.name);

notEU.name = "Makedonija";
console.log(notEU.name);
console.log(evropskadrzava.name);


