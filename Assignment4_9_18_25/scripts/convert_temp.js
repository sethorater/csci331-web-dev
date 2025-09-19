window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // TODO: Use addEventListener() to register a click event handler for the convert button.
   // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#add_a_simple_listener

    const btn = document.getElementById("convertButton");

    btn.addEventListener("click", clickButton);

   // Add event listeners to handle clearing the box that WAS NOT clicked,
   // e.g., the element C_in listens for 'input', with a callback fn to
   // execute after that event does happen.

    const f_in = document.getElementById("F_in");
    const c_in = document.getElementById("C_in");

    f_in.addEventListener('input', clear_c);
    c_in.addEventListener('input', clear_f)
   // You don't send arguments to the event handler function.
   // So, if you want the event handler to call another function that
   // DOES take arguments, you can send that other function as a callback.
   // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#event_listener_with_anonymous_function
   // Here is an example of anonymous event handler fn that calls alert with an argument:
   // document.getElementById("weatherIcon").addEventListener("click", function() {alert("You clicked the icon.")})

}
// TODO: (Part of the above is to write the functions to be executed when the event handlers are invoked.)

function clickButton() {
    console.log("clicked");
    const f_in = document.getElementById("F_in");
    const c_in = document.getElementById("C_in");
    if(f_in.value == ""){
        convertCtoF(c_in.value);
    } else {
        convertFtoC(f_in.value);
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
   // TODO: Return temp in °F. 
   // °F = °C * 9/5 + 32
    const f_out = C * 9/5 + 32;
    const f = document.getElementById("F_in");
    f.value = f_out;
}

function convertFtoC(F) {
   // TODO: Return temp in °C. 
   // °C = (°F - 32) * 5/9
    const c_out = (F -32) * 5/9;
    const c = document.getElementById("C_in");
    c.value = c_out;
}

// TODO: write a fn that can be called with every temp conversion
// to display the correct weather icon.
// Based on degrees Fahrenheit:
// 32 or less, but above -200: cold
// 90 or more, but below 200: hot
// between hot and cold: cool
// 200 or more, -200 or less: dead
// both input fields are blank: C-F
