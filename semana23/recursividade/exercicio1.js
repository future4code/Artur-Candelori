function asc(n) {
    if (n < 0) {
        return undefined;
    }
    asc(n - 1);
    console.log(n);
}
function desc(n) {
    if (n < 0) {
        return undefined;
    }
    console.log(n);
    desc(n - 1);
}
//desc(3);
asc(3);
