function countDigits(x){
    let res = 0;

    while(x>0){
        x = Math.floor(x/10);
        res++;
    }
    return console.log(res);
}

countDigits(123);