var pets = ['cat', 'dog', 'elephant'];
function processPets(pets){
    for(let i = 0; i < pets.length; i++){
        pets[i]=pets[i] + 's';
    }
    console.log(pets);
}
console.dir(processPets);
processPets(pets);
//Output
['cats', 'dogs', 'elephants']


