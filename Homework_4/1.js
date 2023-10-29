"use strict";

/*
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] === 0) {
        console.log(`${numbers[index]} - это ноль`);
    }else if (numbers[index] % 2 === 1) {
        console.log(`${numbers[index]} - нечетное число`);
    }else if (numbers[index] % 2 === 0){
        console.log(`${numbers[index]} - четное число`);
    }  
}
