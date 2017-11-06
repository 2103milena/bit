var x = document.getElementById("seDugme");



x.onclick = function (){
    var counter = 0;
    if(sessionStorage.getItem("seKey")){
        counter =JSON.parse(sessionStorage.getItem("seKey"));
        
    }
    counter++;
    sessionStorage.setItem("seKey", counter.toString());
 
    x.innerHTML = counter
}