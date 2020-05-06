var fs = require('fs');
const faceBookNotification = 'faceBookNotification.txt'
const faceBookMessages = 'faceBookMessages.txt'

fs.exists(faceBookNotification, function(exist){
    if(exist){
        fs.stat(faceBookNotification, function(err, statCheck){
                if(statCheck.isFile()){
                    fs.readFile(faceBookNotification, function(err, data){
                        if(err){
                            throw err
                        }
                        else{
                            console.log(data.toString());
                        }
                    })
                }
        })
    }
    else{
        throw 'File dont exist';
    }
})


fs.exists(faceBookMessages, function(exist){
    if(exist){
        fs.stat(faceBookMessages, function(err, statCheck){
                if(statCheck.isFile()){
                    fs.readFile(faceBookMessages, function(err, data){
                        if(err){
                            throw err
                        }
                        else{
                            console.log(data.toString());
                        }
                    })
                }
        })
    }
    else{
        throw 'File dont exist';
    }
})