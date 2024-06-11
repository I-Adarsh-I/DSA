function CountTrailingZeros(n){
    let res = 0;
    
    for(let i=5;i<=n;i=i*5){
        res = res + Math.floor(n/i);
    }
    console.log(res);
}
CountTrailingZeros(28)


//Bruteforce method - Not recommended
function CountTrailingZeros2(n){
    let factRes = 1;
    let count = 0;
    for(let i=2;i<=n;i++){
        factRes = factRes*(i)
    }
    console.log(factRes);

    while(factRes%10 === 0){
        count++;
        factRes = factRes/10;
    }
    console.log(count)
}
CountTrailingZeros2(11)
//This method is not recommended because int stack may get full/overflow for
//even small number's factorial. For e.g. fact(28) 