var observerM = function(name){
    var mojeIme = name;
    var notifyInner = function(ulaz){
        console.log(mojeIme + " ALERT<ALERT>ALERT" + ulaz)
    }
    return{
        notify:notifyInner
    }
}
var subjectM = function(){
    var lista = [];
    var dodajUListu = function(nesto){
        lista.push(nesto);
    }
    var notifyObs = function(n){
        for (var i = 0; i < lista.length; i++) {
            lista[i].notify(n);
            
        }
    }
    var run = function(){
        for (var i = 0; i < 100; i++) {
           if (i % 11 === 0) {
              notifyObs(i);
           }     
        }
    }
    return{
        run:run,
        dodaj:dodajUListu

    }
}
var o1 = observerM("Ime1");
var o2 = observerM("Ime2");
var subj = subjectM();
subj.dodaj(o1);
subj.dodaj(o2);
subj.run();



