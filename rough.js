const fs = require('fs');
const util = require('util');
var file = 'faceBookMessages.txt'
var file2 = 'faceBookNotification.txt'

var existsFile = util.promisify(fs.exists);
var statCheck = util.promisify(fs.stat);
var readFile = util.promisify(fs.readFile);

function add(){
    return new Promise(function(resolve, reject){
        var sum = 0;
    setTimeout( function(){
         sum = 1 + 5;
         resolve(sum);
       // console.log(1);
      }, 5000 );
    })
    
}

async function readValidData(){
    var existStatus = await existsFile(file);
    if(existStatus){
        var statCheckForFileType = await statCheck(file);
        var sum = await  add();
        console.log(sum);
        if(statCheckForFileType){
            var data = await readFile(file);
            if(data){
                console.log(data.toString());
            }
            else{
                console.log('No data');
            }
        }
        console.log(sum);        
    }


}

readValidData();