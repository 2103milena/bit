
var stadion = document.querySelector('.kliknuti');
var fudbaler = document.querySelector('.cikica');

function klik(event) {

    var y = event.clientY;
    var x = event.clientX;

    fudbaler.style.top = y - 150 + "px";
    fudbaler.style.left = x - 100 + "px";

  
}

stadion.addEventListener("click", klik);


function stop() {

   stadion.removeEventListener("click", klik);
    
}
