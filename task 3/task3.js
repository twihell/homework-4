/*Написати функцію, факторіал, яка приймає число і повертає факторіал цього числа.*/

// варiант з рекурсieю

function factorial(someNumber) {
    if (someNumber === 0) {
        return 1;
    } else {
        return someNumber * factorial(someNumber - 1);
    }
}

console.log(factorial(5)); 



//варiант з циклом

function factorial(someNumber) {
    if (someNumber === 0) {
        return 1;
    } else {
        let findFactorial = 1;
        for (let i = 1; i <= someNumber; i++) {
            findFactorial = findFactorial * i;
        }
        return findFactorial;
    }
}

console.log(factorial(5));