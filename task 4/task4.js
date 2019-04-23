/*Написати функцію, яка сортує масив чисел за допомогою методу “бульбашка” і повертає відсортований масив*/

const newList = [65, 8, 3, 0, 32, 6, 9, 1];

function listSorter(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let sortIt = array[j];
                array[j] = array[j + 1];
                array[j + 1] = sortIt;
            }
        }
    }
    return array;
}

console.log(newList);
console.log(listSorter(newList));

const secondList = [1, 2, 3, 0];
console.log(listSorter(secondList));
