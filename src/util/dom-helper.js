function absoluteOffset(e) {
    var top = 0,
        left = 0;
    do {
        top += e.offsetTop || 0;
        left += e.offsetLeft || 0;
        e = e.offsetParent;
    } while (e);
    return {
        left: left,
        top: top
    }
}

export { absoluteOffset}