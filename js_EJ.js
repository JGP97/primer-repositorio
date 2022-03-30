function suma() {
    var x, y, suma;
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;
    suma = parseFloat(x) + parseFloat(y);
    document.getElementById("sumando").innerHTML = suma;
}

