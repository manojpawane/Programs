var fs = require('fs');
var file = 'faceBookMessages.txt'
    fs.exists(file, function(exists){
        if(exists){
            fs.stat(file, function(err, statCheck){
                if(statCheck.isFile()){
                    fs.readFile(file, function(err, data){
                        if(data){
                               console.log(data.toString());
                        }
                    })
                }
            })
        }
    })



fs.exists(file, checkExist)

function checkExist(exists){
    if(exists){
        fs.stat(file, statCheckFun);
    }
}

function statCheckFun(err, statCheck){
    if(statCheck.isFile()){
        fs.readFile(file, readFileUsingFs)
    }
}

function readFileUsingFs(err, data){
    console.log(data.toString());   
}

readFileFromData();
function readFileFromData(){
    return new Promise(function(resolve, reject){
        fs.exists(file, function(exists){
            if(exists){
                resolve(exists)
            }
            else{
                reject(exists);
            }
        })
    })
    .then((exist)=>{
        console.log(exist);
        
            fs.stat(file, function(err, statCheck){
                if(err){
                    throw err
                }
            })
        
    })
    .then(()=>{
        
            fs.readFile(file, function(err, data){
                if(err){
                    throw err
                }
                else{
                    console.log(data.toString());
                }
            })
        
    })
    .catch(err=>{
        throw err;
    })
}