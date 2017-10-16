function reverse(a) {
    b = 0;
    while(a !== 0) {
        b = 10 * b + a%10;
        a = (a - (a%10)) / 10;

    }

    return b;
}

console.log(reverse(123));