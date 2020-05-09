var fs = require('fs');
var file = 'faceBookMessages.txt'

function readDataFromFile(){
    return new Promise(function(resolve, reject){
        try {
            fs.exists(file, function(exist){
                if(exist){
                    resolve(exist);
                }
                else{
                    reject(exist)
                }
            })
        } catch (error) {
            console.log(reject(error));
        }
    })
    .then((exist)=>{
        console.log('exist: '+exist);
        if(exist){
           return fs.stat(file)
        }
        
    })
    .then((statC)=>{
        console.log(statC);
        
        return new Promise(function(resolve, reject){
            try {
                if(statC.isFile()){
                    fs.readFile(file, function(err, data){
                       resolve(console.log(data.toString()));
                        
                    })
                }
            } catch (error) {
                throw error
            }
        })
    })
}

readDataFromFile();