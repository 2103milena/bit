function notFalsy(a) {
    var result = '';
    for (i = 0; i < a.length; i++) {

        if (a[i] == undefined) {

        } else if (a[i] == null) {

        } else if (isNaN(a[i])) {

        } else if (a[i] == false) {

        } else result += a[i];
    }
    return result;

}
console.log(notFalsy([NaN, 0, 15, false, -22, undefined, 47, null, NaN]));
