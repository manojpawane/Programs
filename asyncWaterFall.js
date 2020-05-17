var async = require('async')
var file = 'faceBookMessages.txt'
var fs = require('fs')


function readFileUsingAsyncWaterFall(file){

    return new Promise(function(resolve, reject){
        try {
            async.waterfall([
                function exists(done){
                    fs.exists(file, function(exists){
                        console.log('first');
                        done(null, exists);
                    })
                }, 
                function statCheck(existsStatus, done){
                    if(existsStatus){
                        fs.stat(file, function(err, statData){
                            console.log('second');
                            if(statData){
                                done(err, statData)
                            }
                        })
                    }
                },
                function readData(stat, done){
                    if(stat.isFile()){
                        fs.readFile(file, function(err, data){
                            console.log('third');
                            done(err, data)
                        })
        
                    }
                },
                function printData(data, done){
                    resolve(data.toString());
                    done(null)
                }
            ], function(err){
                if(err){
                    throw err
                }
                
            })
        } catch (error) {
            reject(error)
        }
    })

    
}

module.exports = readFileUsingAsyncWaterFall