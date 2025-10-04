const arr = ["Hello" , "World", "!"];

const concatenateWords = (elements) => elements.join(' ');
// const concatenateWords2 = (elements) => {
//     return elements.reduce((acc, el) => acc + " " + el, '');
// }

console.log(concatenateWords(arr));