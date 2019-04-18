/*Написати функцію, яка сортує масив чисел за допомогою методу “бульбашка” і повертає відсортований масив*/

const newList = [65, 8, 3, 0, 32, 6, 9, 1];

function listSorter() {
    for (let i = 0; i < newList.length; i++) {
        for (let j = 0; j < newList.length - 1; j++) {
            if (newList[j] > newList[j + 1]) {
                let sortIt = newList[j];
                newList[j] = newList[j + 1];
                newList[j + 1] = sortIt;
            }
        }
    }
    return newList;
}

console.log(newList);
console.log(listSorter(newList));
