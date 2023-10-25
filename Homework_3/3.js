"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

function maxOfThree(num1, num2, num3) {
    let max = num1;
    if (num2 > max) {
        max = num2;
    }
    if (num3 > max) {
        max = num3;
    }
    console.log(`Максимальное значение среди чисел ${num1}, ${num2}, ${num3} равно ${max}.`);
}

const number1 = Number.parseFloat(prompt('Введите первое число: '));
const number2 = Number.parseFloat(prompt('Введите второе число: '));
const number3 = Number.parseFloat(prompt('Введите третье число: '));

maxOfThree(number1, number2, number3);
