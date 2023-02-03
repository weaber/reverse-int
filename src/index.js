module.exports = function reverse (n) {
    if (n < 0) {
        n = -n;
    }
    const str = +n.toString().split('').reverse().join('');    
    return str;
}
