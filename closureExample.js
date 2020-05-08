
var add = (function(){  
var counter = 0;
   return function (){
        counter+=1;
        return counter;
    }
})()

console.log(add);
//console.log(add());
//console.log(add());

//self invoking function can only execute once


