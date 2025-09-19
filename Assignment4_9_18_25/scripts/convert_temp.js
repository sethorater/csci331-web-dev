// Name: Seth Keirn
// Program: convert_temp.js

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {

    const btn = document.getElementById("convertButton");

    btn.addEventListener("click", clickButton);

    const f_in = document.getElementById("F_in");
    const c_in = document.getElementById("C_in");

    f_in.addEventListener('input', clear_c);
    c_in.addEventListener('input', clear_f);

}

function clickButton() {
    console.log("clicked");
    const f_in = document.getElementById("F_in");
    const c_in = document.getElementById("C_in");
    if (f_in.value !== '') {
        convertFtoC(f_in.value);
    } else if (c_in.value !== '') {
        convertCtoF(c_in.value);
    } else {
        const img = document.getElementById("weatherIcon");
        img.src = "images/C-F.png";
    }
}

function clear_f() {
    console.log("clear f");
    const f = document.getElementById("F_in");
    f.value = "";
}

function clear_c() {
    console.log("clear c");
    const c = document.getElementById("C_in");
    c.value = "";
}

function convertCtoF(C) {
    const f_out = C * 9/5 + 32;
    const f = document.getElementById("F_in");
    tempConversionF(f_out);
    f.value = f_out;
}

function convertFtoC(F) {
    const c_out = (F -32) * 5/9;
    const c = document.getElementById("C_in");
    tempConversionF(F);
    c.value = c_out;
}

function tempConversionF(F) {
    const img = document.getElementById("weatherIcon");
    if (F <= 32 && F > -200) {
        img.src = "images/cold.png"
    } else if (F >= 90 && F < 200) {
        img.src = "images/hot.png"
    } else if (F > 32 && F < 90) {
        img.src = "images/cool.png"
    } else if (F >= 200 || F <= -200) {
        img.src = "images/dead.png"
    } else {
        img.src = "images/C-F.png"
    }

}

