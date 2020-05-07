var fs = require('fs');
var file = 'numbers.txt'

fs.readFile(file, function(err, data){
    if(err){
        throw err
    }
    else{        
        var newArray = data.toString().split(" ");
        newArrayOne = newArray.map(Number);
        bubbleSort(newArrayOne, function(sortedData){
            if(sortedData){
                console.log(sortedData);
            }
        })
    }
})

function bubbleSort(a, callback) {
    console.log(a);    
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    callback(a);
}
