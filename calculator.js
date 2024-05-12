let buttons = document.querySelectorAll("button");
let displayResult = document.querySelector('.display');

for (let i = 0 ; i < buttons.length; i++){
    buttons[i].addEventListener('click', myFunction)
    
    function myFunction() {

        if (buttons[i].innerHTML == '='){
            displayResult.value = eval(displayResult.value);
         displayResult.style.color = 'red';
        }
        else if (buttons[i].innerHTML == "AC") {
            displayResult.value = ''
        } 
        else if (buttons[i].innerHTML == "DE") {
            displayResult.value= displayResult.value.slice(0, -1);
        } else {
          displayResult.value += buttons[i].innerHTML;
        }

    };
}
