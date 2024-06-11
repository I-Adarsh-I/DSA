function checkPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return console.log(`${n}- No`);
    }
    return console.log(`${n}- Yes`);
  }
}

//Time complexity - O(n)

checkPrime(20);

function checkPrime2(n) {
  if (n === 1) {
    return console.log(`${n}- No`);
  }
  if (n === 2 || n === 3) {
    return console.log(`${n}- Yes`);
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return console.log(`${n}- No`);
  }
  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return console.log(`${n}- No`);
    }
    return console.log(`${n}- Yes`);
  }
}

checkPrime2(11);

//Time complexity - O(sqrt(n))

//--------------Prime factors of a number n------------------

function checkPrimeFactors(n) {
  if (n <= 1) {
    return console.log("No prime factors of number");
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    while (n % i === 0) {
      console.log(i);
      n = n / i;
    }
  }
  if (n > 1) {
    console.log(n);
  }
  console.log("====================================");
}
checkPrimeFactors(12);

class Prime {
  isPrime(N) {
    if (N === 2 || N === 3) return true;
    if (N % 2 === 0 || N % 3 === 0) return false;
    for (let i = 5; i <= Math.sqrt(N); i += 6) {
      if (N % i === 0 || N % (i + 2) === 0) return false;
    }
    return true;
  }
  smallPrime(N) { //Time complexity - O(n.Math.sqrt(n))
    for (let i = 2; i <= N; i++) {
      if (this.isPrime(i)) {
        console.log(i);
      }
    }
  }
  sieveAlgo(N) { //Time complexity - O(nloglogn)
    let boolArr = new Array(N + 1).fill(true);

    for (let i = 2; i <= N; i++) {
      if (boolArr[i]) {
        console.log(i);
      }
      for (let j = i * i; j <= N; j = j + i) {
        boolArr[j] = false;
      }
    }
  }
}

let prime = new Prime();
// prime.smallPrime(20)
prime.sieveAlgo(20);
