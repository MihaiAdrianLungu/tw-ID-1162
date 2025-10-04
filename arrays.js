const arr =[1, 2, 3, 4, 5];

const newArr = arr.slice(1, 3);

const sum = arr.reduce((acc, val) => acc + val, 0);

const oddNumbers = arr.filter(num => num % 2 !== 0);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (const el of arr) {
//     console.log(el);
// }

// for (const el in arr) {
//     console.log(el);
// }

// arr.forEach(el => console.log(el));

const newArr2 = arr.map(el => {
    return el * 2;
});

console.log(newArr2);