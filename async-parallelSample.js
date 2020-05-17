var async = require('async')
var fs = require('fs')
var util = require('util');
var read = util.promisify(fs.readFile);
function readFile(){
    async.parallel({
        Task1:function(callback){
            console.log('first');
            var data = read('faceBookMessages.txt');
            data.then((info)=>{
                callback(null, info.toString())
            })
        },
        Task2:function(callback){
            console.log('second');
            var data = read('faceBookNotification.txt');
            data.then((info)=>{
                callback(null, info.toString());
            })
        }
    }, function(err, result){
        console.log(result);
    })
}
readFile();