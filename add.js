function add(a, b, callback){
    var c=a +b;
    callback(c);
}

module.exports = add;