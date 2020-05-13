var fs = require('fs')
var messageFile = 'faceBookMessages.txt'
var notificationFile = 'faceBookNotification.txt'
var async = require('async')
var read = require('./async-series')
async.parallel({
    Task1: function(callback){
        var data = read(messageFile);
        data.then((info)=>{
            callback(null, info)
        })
        
    },

    Task2: function(callback){
       var data = read(notificationFile);
       data.then((info)=>{
           callback(null, info)
       })
    }
}, 
function(err, result){
    if(err){
        throw err
    }
    console.log(result);    
})