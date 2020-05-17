/**
 * async is imported to use async.series method to perform order operation in series
 */
async = require('async')
var fs = require('fs')

/**
 * 
 * @param {*} file 
 * to perform validating and booking of order
 */
function readValidFile(file){
    return new Promise(function(resolve, reject){
        try {
            /**
             * Using async series because cant proceed further if order protocols not valid
             */
            async.series([
                function exists(callback){
                    /**
                     * Checks whether file exist or not.
                     */
                    fs.exists(file, function(exists){
                        /**
                         * if exist(s) than i am sending valid result in upper callback or final result
                         */
                        if(exists){
                            console.log('first');
                            callback(null, exists)
                        }                        
                    })
                },

                function statStatuc(callback){
                    fs.stat(file, function(err, statCheck){
                        if(statCheck){
                            console.log('second');
                            callback(err, statCheck.isFile());
                        }
                    })
                },
                function readFile(callback){
                    fs.readFile(file, function(err, data){
                        console.log('third');
                        callback(err, data.toString())
                    })
                }
            ], function(err, result){
                if(err){
                    throw err
                }
                else{
                    resolve(result[2])
                }
            })
        } catch (error) {
            reject(error)
        }
    })   
}

module.exports = readValidFile;