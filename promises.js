function getData(d){
    return new Promise(function(resolve, reject){
        setTimeout(function(){resolve(d); }, 1000);
    });
}


var x;
getData(10).then(function(num1){
    x = 1+ num1;
    return getData(30);
})
.then(function(num2){
    var y = 1 + num2;
    return getData("Meaning of Life: " + (x+y));

})
.then(function(answer){
    console.log(answer);
})