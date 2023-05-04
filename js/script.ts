const ENTER_KEY: string = "Enter";

window.addEventListener("load", () => {
    const txt_binario: HTMLInputElement = document.getElementById(
        "input-binary"
    ) as HTMLInputElement;
    const input_decimal: HTMLInputElement = document.getElementById(
        "output-decimal"
    ) as HTMLInputElement;
    txt_binario.addEventListener("keydown", (event) => {
        if (event.key == ENTER_KEY) {
            handleConverter();
        }
    });
    (
        document.getElementById("btn-convert") as HTMLButtonElement
    ).addEventListener("click", (_) => handleConverter());

    function handleConverter() {
        input_decimal.value = "";
        if (txt_binario.value == "") {
            alert("Fill in the binary number field");
            return;
        }
        const result: number | null = binToDec(txt_binario.value);
        if (result != null) {
            input_decimal.value = String(result);
        } else {
            alert("Invalid number!");
        }
    }

    function binToDec(text: string): number | null {
        if (!/\b[01]+\b/.test(text)) {
            return null;
        }
        return text
            .split("")
            .reverse()
            .reduce((accumulator, digit, index) => {
                return accumulator + parseFloat(digit) * Math.pow(2, index);
            }, 0);
    }
});
