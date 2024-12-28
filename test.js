const calculate = document.querySelector('.calculate');
const input = document.querySelector('.input');
const check = document.querySelector('.check');

const getRandomNumber = (min, max) =>{
    return Math.floor(Math.random() * (max-min+1)+min);
}
let firstNumber = getRandomNumber(1,9);
let secondNumber = getRandomNumber(1,9);

calculate.textContent = ` ${firstNumber} * ${secondNumber} `;

check.addEventListener('click',() => {
    if ((firstNumber*secondNumber) === Number(input.value)){
        alert('Ответ верный. Поздравляю!');

        firstNumber = getRandomNumber(1,9);
        secondNumber = getRandomNumber(1,9);

        calculate.textContent = ` ${firstNumber} * ${secondNumber} `;
    }
    else {
        alert('Ответ не верный. Попробуй ещё раз')
    }
    input.value = '';
    input.focus();

})