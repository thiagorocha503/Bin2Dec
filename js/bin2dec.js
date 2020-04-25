var ENTER_KEY = 13;
var txt_binario = document.getElementById("input-binary");
txt_binario.addEventListener("keydown", function (event) {
    if (event.keyCode == ENTER_KEY) {
        onClickConverter();
    }
});
function onClickConverter() {
    var txt_binario = document.getElementById("input-binary");
    var input_decimal = document.getElementById("output-decimal");
    input_decimal.value = "";
    if (txt_binario.value == "") {
        alert("Fill in the binary number field");
        return;
    }
    var result = convertToBinary(txt_binario.value);
    if (result != null) {
        input_decimal.value = String(result);
    }
    else {
        alert("Invalid number!");
    }
}
function convertToBinary(text) {
    var result = 0;
    var exponent = 0;
    for (var i = text.length - 1; i >= 0; i--) {
        var digit = parseInt(text[i]);
        if (isNaN(digit)) {
            return null;
        }
        if (digit != 1 && digit != 0) {
            return null;
        }
        result += digit * Math.pow(2, exponent);
        exponent += 1;
    }
    return result;
}
