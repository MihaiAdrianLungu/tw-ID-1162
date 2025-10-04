const string1 = 'test';
const letter = 't';

const compareStrings = (str, letter) => {
    let counter = 0;

    for (const l of str) {
        if(l !== letter) {
            counter++; 
        }
    }

    return counter;
}

console.log(compareStrings(string1, letter));