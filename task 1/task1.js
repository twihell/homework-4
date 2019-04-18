/*Написати функцію function(from, to) {}, яка рахує всі парні і непарні числа на заданому промiжку.
Додати перевірку: коли функція запускається без аргументів, коли один аргумент, або більше двох,
- виводити повідомлення про помилку. */



function arrayCalculator(from, to) {
    if (arguments.length === 0 || arguments.length === 1 || arguments.length > 2) {
        return 'error';
    } else if (arguments.length === 2) {
        let evenNumber = 0;
        let oddNumber = 0;
        for (let i = from; i <= to; i++) {
            if (i % 2 === 0) {
                evenNumber++;
            } else {
                oddNumber++;
            }
        }
        return [evenNumber, oddNumber];
    }
}

console.log(arrayCalculator(4, 10));
// console.log(arrayCalculator());
// console.log(arrayCalculator(2));
// console.log(arrayCalculator(2, 6, 8));