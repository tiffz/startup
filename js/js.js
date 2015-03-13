function random (seed) {
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}