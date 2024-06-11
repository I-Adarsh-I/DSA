function GCD(a,b){
    let smallNo = Math.min(a,b);
    let GCD = 1

    for(let i=smallNo;i>0;i--){
        if(a%i === 0 && b%i === 0){
            GCD = i;
            break;
        }
    }
    console.log('small no. is- ', smallNo);
    console.log('GCD is- ',GCD);
}
GCD(4,6)

function GCD2(a,b){
    if(b === 0){
        return console.log(a)
    }
    return GCD2(b,a%b);
}
GCD2(10,15)

// ----------------or-------------

function GCD3(a,b){
    while(b!==0){
        a = a%b;
        [a,b] = [b,a];
    }
    return console.log(a)
}
GCD3(10,15)


//LCM of 2 numbers
function LCM(a,b){
    let maxNo = Math.max(a,b);
    
    while(true){
        if(maxNo%a === 0 && maxNo%b === 0){
            return console.log(maxNo)
        }
        maxNo++
    }
}
LCM(7,3)