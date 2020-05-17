var add = require('./add')

 async function addUsingNumbers(){
    var sum = await add();
    console.log('Hello to Programming');
    console.log(sum);
}

function printMessages(){
    console.log('Hello to Programming in node js');
}
async function main(){
   await addUsingNumbers();
          printMessages();

}

main();