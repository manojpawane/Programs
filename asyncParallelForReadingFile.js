var async = require('async')
var readFile = require('./asyncSeriesForReadingFile')
var fileOne = 'faceBookMessages.txt'
var fileTwo = 'faceBookNotification.txt'
var read = require('./asyncWaterFall')
function checkAndReadFile(){
    async.parallel({
        Task1: function(callback){
            var data = read(fileOne);
            data.then((info)=>{
                callback(null, info)
            })
        },
        Task2: function(callback){
            var data = read(fileTwo);
            data.then((info)=>{
                callback(null, info)
            })
        }
    }, function(err, result){
        if(err){
            throw err
        }
        else{
            console.log(result);
        }
    })
}

checkAndReadFile();