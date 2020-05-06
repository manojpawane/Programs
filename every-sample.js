var arrayOne = [43, 52, 39, 78]

const condition = (x)=>x > 40
console.log('Every - greater than 40: '+arrayOne.every(condition));

const even = (y) => y % 2 === 0
console.log('For Some Values: '+arrayOne.some(even));