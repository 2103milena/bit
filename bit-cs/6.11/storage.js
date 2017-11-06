var dugme = document.querySelector("#dugme");


dugme.onclick = function(){
    var brojac = 0;
    if(localStorage.getItem("brojac")){
        brojac =JSON.parse( localStorage.getItem("brojac"));
    
    }
    brojac++;
    localStorage.setItem("brojac", brojac.toString());
    dugme.innerHTML = brojac; 
}                                                                 

