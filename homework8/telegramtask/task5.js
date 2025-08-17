const words = ["apple", "banana", "avocado", "blueberry", "apricot"];

const startWith_A = words.filter(word => word[0] === `a`)

console.log(startWith_A)


const groups = words.reduce((prevValue, value) => {
    
    const firstLetter = value[0].toLowerCase();
    
    if (!prevValue[firstLetter]) prevValue[firstLetter] = [];
    
    prevValue[firstLetter].push(value);
    
    return prevValue;

}, {});

console.log(groups);