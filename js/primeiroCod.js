function compare(x) {
    // alert("-" + x + "-");
    if (x === '') {
        alert('O campo está vazio!');
        return false;
    }
    if (x < 5) {
        alert("menor que 5");
    } else if (x == 5) {
        alert("igual a 5");
    } else {
        alert("maior que 5");
    }
}