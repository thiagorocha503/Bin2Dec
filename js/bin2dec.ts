var ENTER_KEY: number = 13;

var txt_binario: HTMLInputElement = document.getElementById("input-binary") as HTMLInputElement;
txt_binario.addEventListener("keydown",(event) => {
    if(event.keyCode == ENTER_KEY){
        onClickConverter();
    }
    
});


function onClickConverter() {
    let txt_binario: HTMLInputElement = document.getElementById("input-binary") as HTMLInputElement;
    let input_decimal: HTMLInputElement = document.getElementById("output-decimal") as HTMLInputElement;
    input_decimal.value = "";
    if(txt_binario.value == ""){  
        alert("Fill in the binary number field"); 
        return;
    }
    let result: number|null = convertToBinary(txt_binario.value);
    
    if(result != null){
        input_decimal.value = String(result);
    } else{
        alert("Invalid number!");
    }
}

function convertToBinary(text: string): number|null {
    let result: number = 0;
    let exponent: number = 0;
    for (let i = text.length-1; i >= 0; i--) {
        let digit: number = parseInt(text[i]);
        if (isNaN(digit)) {
            return null;
        }
        if(digit != 1 && digit != 0){
            return null;
        }
        result += digit * Math.pow(2, exponent);
        exponent+=1;
    }
    return result;
}
