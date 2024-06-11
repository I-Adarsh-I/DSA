class Recursion{
    printAllNos(n){ // Time complexity - T(n) = T(n-1) + C ----> Theta(n)
        if(n === 0) return; 
        this.printAllNos(n-1)
        console.log(n);
    } // Auxilary space - Theta(n)
    palindrome(s,n=s.length){
        if(n===0 ||n === 1){
            return console.log(true)
        }
        if(s[0] === s[n-1]){
            return this.palindrome(s.slice(1,n-1));
        }else{
            return console.log(false);
        }
    }
    sumOfNum(n){
        if(n === 0) return 0;
        
        let num = n%10;
        
        let sum=num + this.sumOfNum(Math.floor(n/10))
        
        return sum
    }
    fib(n){
        if(n<=2) return 1;
        let sum  = this.fib(n-1)+ this.fib(n-2)
        console.log(sum)
    }
    isLucky(n,i=2)
    {
        // code here
            if(n<i) return console.log(true);
            if(n%i === 0) return console.log(false);
            
            let np = n - Math.floor(n/i);
            return this.isLucky(np,i+1)
    }
    power(N, R) {
        // code here
        
        const mod = BigInt(Math.pow(10,9)+7);
        function calPower(n,r){
            n=BigInt(n)
            r=BigInt(r)
            if(r === 0) return BigInt(1);
        
            if(r%BigInt(2) === 0){
                let half = calPower(n, r/BigInt(2));
                return (half*half)%mod;
            }else{
                return (n*calPower(n,r-BigInt(1)))%mod;
            }
        }
        return calPower(N,R).toString();
        
    }
    power2(N, R) {
        // Convert N to BigInt for safe calculations
        N = BigInt(N);
        const MOD = BigInt(1e9 + 7);

        function expBySquaring(n, r) {
            console.log(`n: ${n}, r: ${r}`);
            n = BigInt(n);
            r = BigInt(r);
            if (r <= 0) return BigInt(1);
            if (r % BigInt(2) === 0) {
                let half = expBySquaring(n, r / BigInt(2));
                return (half * half) % MOD;
            } else {
                return (n * expBySquaring(n, r - BigInt(1))) % MOD;
            }
        }

        return expBySquaring(N, R).toString();
    }
}

let rec = new Recursion();
// rec.printAllNos(6)
// rec.palindrome('absda');
// console.log(rec.sumOfNum(1223))
// rec.fib(5)
// rec.isLucky(13)
rec.power2(2,2)