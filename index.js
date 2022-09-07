function oddishOrEvenish(Numero){
    var value = Numero,
    sum = value
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);
    console.log("Summary: "+sum);
    if(sum % 2 == 1){
        console.log("Odd")
    }else{
        console.log("Even");
    }
}

oddishOrEvenish(373);
