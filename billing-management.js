const LIMIT = 10;
const productPrices = [50, 100, 200, 500, 150, 845, 154, 156, 589, 654]
var total = 0;
for(let amount = 1; amount < LIMIT; amount++){
    total+=productPrices[amount];
}
console.log('Total amount: '+total);

