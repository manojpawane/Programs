var async = require('async')
var fs = require('fs')


    function readFile(file){
        return new Promise(function(resolve, reject){
            try {
                async.series([
                function exists(callback){
                    fs.exists(file, function(exists){
                        if(exists){
                            console.log('first');
                            callback(null, exists)
                        }
                    })
                },
        
                function statCheck(callback){
                    fs.stat(file, function(err, statStatus){
                        if(statCheck){
                            console.log('second');
                            callback(err, statStatus.isFile());
                        }
                        
                    })
                },
                function readFile(callback){
                    fs.readFile(file, function(err, data){
                        console.log('third');
                        callback(err, data.toString())
                    })
                }
            ],
            function(err, result){
                if(err){
                    throw err
                }
                resolve(result[2]) 
                
            })                
            } catch (error) {
                reject(error)
            }
        })
        
}

module.exports = readFile