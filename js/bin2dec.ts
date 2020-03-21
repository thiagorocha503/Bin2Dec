var ENTER_KEY: number = 13;

var txt_binario: HTMLInputElement = document.getElementById("input-binary") as HTMLInputElement;
txt_binario.addEventListener("keydown",(event) => {
    if(event.keyCode == ENTER_KEY){
        onClickConverter();
    }
    
});


function onClickConverter() {
    let txt_binario: HTMLInputElement = document.getElementById("input-binary") as HTMLInputElement;
    if(txt_binario == null){
        return;
    }
    if(txt_binario.value == ""){
        alert("Preencha o campo número binario")
        return;
    }
    let result: number|null = conveterToBinario(txt_binario.value);
    let input_decimal: HTMLInputElement = document.getElementById("output-number") as HTMLInputElement;
    if(result != null){
        input_decimal.value = String(result);
    } else{
        alert("Número inválido!");
    }
}

function conveterToBinario(text: string): number|null {
    let result: number = 0;
    let multiplier: number = 1;
    for (let i = text.length-1; i >= 0; i--) {
        let digit: number = parseInt(text[i]);
        if (isNaN(digit)) {
            return null;
        }
        if(digit < 0 || digit > 1){
            return null;
        }
        result += digit * multiplier;
        multiplier *= 2;
        
    }
    return result;
}
