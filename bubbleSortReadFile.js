var file = 'fileOfNumber.txt'
var bubble = require('./bubbleSort')
const fs = require('fs')

// readForSort();
// function readForSort(){
//     fs.exists(file, function(exist){
//         if(exist){
//             fs.stat(file, function(err, statCheck){
//                 console.log(statCheck);
//                 if(statCheck.isFile()){
//                     fs.readFile(file, function(err, data){
//                         if(err){
//                             throw err
//                         }
//                         else{
//                             const arrayData = data.toString().split(",");
//                             const numberArray = arrayData.map(Number);
//                             bubble(numberArray, function(sortedData){
//                             console.log(sortedData);
//                             })
//                         }
//                     })
//                 }
//             })
//         }
//     })
// }

// new Promise((resolve, reject)=>{
//     fs.exists(file, function(exist){
//         if(exist){
//             resolve(exist)
//         }
//     })
// })
// .then(()=>{
//     fs.stat(file, function(err, statCheck){
//         if(statCheck){
//             return statCheck;
//         }
//     })
// })
// .then((value)=>{
//     console.log('value: '+value);
    
//     fs.readFile(file, function(err, data){
//     const arrayData = data.toString().split(",");
//     const numberArray = arrayData.map(Number);
//     bubble(numberArray, function(sortedData){
//     console.log(sortedData);
//     })
        
//     })
// })
//readForSort();



fs.exists(file, checkExist);
function checkExist(exists){
    if(exists){
        fs.stat(file, StatcCheck)
    }
}

function StatcCheck(err, stats){
    if(stats.isFile()){
        fs.readFile(file, readFiles)
    }
}

function readFiles(err, data){
    console.log(data.toString());    
}
