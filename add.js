var fs = require('fs')
var util = require('util')
var readFile = util.promisify(fs.readFile);
function add(){
    return new Promise(function(resolve, reject){
        try {
            var readData = readFile('faceBookMessages.txt');
            readData.then((info)=>{
            resolve(info.toString());
            })
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = add;