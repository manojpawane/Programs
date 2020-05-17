var async = require('async')
var fs = require('fs')
var util = require('util');
var read = util.promisify(fs.readFile);

function placeOrder(){
    async.series([
        function validUser(callback){
            var data = read('faceBookMessages.txt');
            data.then((info)=>{
                callback(null, info.toString())
            })
        },
         function validOrder(callback){
            var data = read('faceBookNotification.txt');
            data.then((info)=>{
                callback(null, info.toString());
            })
         }
    ],  function(err, result){
        console.log(result);
    })
}

placeOrder();