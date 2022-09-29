function coroutine(g){
    var it = g();
    return function(){
        return it.next.apply(it, arguments);
    }
}


var run = coroutine(function*(){
    var x = 1 + (yield null);
    var y = 1 + (yield null);
    yield (x + y);
});

run();
run(10);
console.log("Meaning of Life: " + run(30).value);