function getData(d, cb) {
    setTimeout(function(){cb(d);}, 1000);

}


getData(10, function(num1){
    var x = 1 + num1;
    getData(30, function(num2){
        var y = 1 + num2;
        getData(
            "MEANING OF LIFE: " + (x + y),
            function(answer){
                console.log(answer);
            }
        );
    });
});