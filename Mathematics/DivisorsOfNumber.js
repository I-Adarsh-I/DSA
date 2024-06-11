function allDivisors(n){
    for(let i=1;i<=n;i++){
        if(n%i === 0){
            console.log(i)
        }
    }
    console.log('==================')
}

allDivisors(10)

//---------Efficient solution-------------
function allDivisors2(n) {
  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
  for (i = Math.sqrt(n); i >= 1; i--) {
    if (n % i === 0) {
      console.log(n / i);
    }
  }
}
allDivisors2(100);
