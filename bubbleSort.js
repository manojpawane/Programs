function bubbleSort(arr, callback){
    console.log(arr);
    
    var len = arr.length,
    i, j, stop;

for (i=0; i < len; i++){
    for (j=0, stop=len-i; j < stop; j++){
        if (arr[j] > arr[j+1]){
            swap(arr, j, j+1);
        }
    }
}
    callback(arr);
}


function swap(arr, first_Index, second_Index){
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

module.exports = bubbleSort