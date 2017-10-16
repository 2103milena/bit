function strInStr(a, b, poz) {


var c = "";
// c = c + a[0];
// c = c + a[1];
// c = c + a[2];
// c = c + a[3];
for (var i = 0; i < poz; i++) {

    c = c + a[i];
}
    c = c + b;
    
    // c = c + a[poz + 1]
    for (var i = poz; i < a.length; i++) {
        c = c + a[i];    
    }
    return c;
} 
 
console.log(strInStr('asawwwwwwwws', 'eee', 4));