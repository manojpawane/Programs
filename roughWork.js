var myFunc = function outerfunction(){
    var val = 15
    function inner(){
    }

    function innerTwo(){
        var sampleValue = 20
        var newVal = val + sampleValue

            function foo(){
                var fooValue = 58;
                return fooValue + newVal;

        }
        return foo();
    }

    return innerTwo();
}

var result = myFunc();
console.log(result);