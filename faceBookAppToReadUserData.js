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

/**
 * Program where it is returning messaged reading it async
 */
   /**
     * Checks whether file exists or not and returns in boolean
     */
fs.exists(faceBookMessages, function(exist){
    /**
     * If file exists than check whether it is file or not
     */
    if(exist){
        fs.stat(faceBookMessages, function(err, statCheck){
                if(statCheck.isFile()){
                    /**
                     * If it is file than it is going to read that file and display it
                     */
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