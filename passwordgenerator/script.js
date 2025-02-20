let inputslider = document.getElementById("inputslider");
let sliderValue = document.getElementById("sliderValue");
let passbox = document.getElementById("passbox");
let lowerCase = document.getElementById("lowercase");
let upperCase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbolls"); // Fixed ID mismatch
let genbtn = document.getElementById("genbtn");
let copyIcon = document.getElementById("copyIcon");

sliderValue.textContent = inputslider.value;
inputslider.addEventListener('input', () => {
    sliderValue.textContent = inputslider.value;
});

genbtn.addEventListener('click', () => {
    passbox.value = generatePassword();
});

let lowerChar = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbolls = "~!@#$%^&*";

function generatePassword() {
    let genPassword = "";
    let allCharts = "";

    allCharts += lowerCase.checked ? lowerChar : "";
    allCharts += upperCase.checked ? upperChars : "";
    allCharts += numbers.checked ? allNumbers : "";
    allCharts += symbols.checked ? allSymbolls : ""; // Fixed variable reference

    if (allCharts.length === 0) {
        return ""; // Ensures it doesn't break
    }

    for (let i = 0; i < inputslider.value; i++) {
        genPassword += allCharts.charAt(Math.floor(Math.random() * allCharts.length));
    }

    return genPassword;
}

copyIcon.addEventListener('click',()=>{
    if(passbox.value != "" || passbox.value.length >=1){
    navigator.clipboard.writeText(passbox.value);
    copyIcon.innerText= "Check";
    copyIcon.title = "PassWord Copied";

    setTimeout(()=>{
        copyIcon.innerHTML="content_copy";
        copyIcon.title= "";
    }, 2000)
}
})