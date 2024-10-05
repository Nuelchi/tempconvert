const textbox = document.getElementById("textbox");
const fahrenheit = document.getElementById("fahrenheit");
const Celsius = document.getElementById("Celsius");
const result = document.getElementById("result");
let temp;

function convert(){
    if(fahrenheit.checked){
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if(Celsius.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "select a unit";
    }
}