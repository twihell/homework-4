/*Написати функцію, яка отримує в якості аргументів числа. Якщо чисел менше 10, повертає суму всіх чисел,
якщо більше 10, повертає масив. Якщо запустити функцію без параметрів, видає помилку. 
Використати псевдомасив arguments */

function numberArguments() {
    if (arguments.length === 0) {
        return 'error';
    } else if (arguments.length < 10 && arguments.length > 0) {
        let argSum = 0;
        for (let i = 0; i < arguments.length; i++) {
            argSum += arguments[i];
        }
        return argSum;
    } else {
        let argArray = [];
        for (let i = 0; i < arguments.length; i++) {
            argArray[i] = arguments[i];
        }
        return argArray;
    }

}

console.log(numberArguments());
console.log(numberArguments(5, 53, 34, 9));
console.log(numberArguments(5, 8, 34, 9, 0, 2, 6, 1, 10, 54, 23));