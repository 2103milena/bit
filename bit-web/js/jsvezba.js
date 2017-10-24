// console.log('Hello World from external file');

// function pozdrav(){
//     console.log ("Hello World from external file");
// }


// function check() {
//  console.log (navigator.platform);
//  console.log(navigator.onLine);
// }

// function isOnline() {
//     if(navigator.onLine === true) {
//         console.log('Is online')
//     }else {
//         console.log('Is offline')
//     }
    
// }


function screenWidthHeight() {
   console.log(screen.width); 
   console.log(screen.height); 
   console.log(screen.availHeight); 
   console.log(screen.availWidth); 
}

function infoLocation() {
    console.log(location.href);
    console.log(location.hostname);
    console.log(location.protocol);
    console.log(location.search);
}

function reloadPage() {
    console.log(location.reload);
}

function readDataFromStorage(key) {
      if ( localStorage.getItem(key) === null){
          console.log('There is no data');
      } else {
          console.log(localStorage.getItem(key));
      }
}

function storeDataToStorage(key, value) {
    localStorage.setItem(key, value);
}