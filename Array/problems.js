class arrayProblems {
  largest(arr) {
    let maxIndex = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[maxIndex]) {
        maxIndex = i;
      }
    }
    return console.log(maxIndex);
  }
  checkSorted(arr) {
    let flag = true;
    let leastItem = arr[0];
    if (arr.length === 1) return console.log(flag);
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] >= leastItem) {
        leastItem = arr[i];
        flag = true;
      } else {
        flag = false;
        return console.log(flag);
      }
    }
    return console.log(flag);
  }
  arrReverse(arr) {
    let n = arr.length - 1;
    let i = 0;
    while (i <= n) {
      let temp = arr[i];
      arr[i] = arr[n];
      arr[n] = temp;
      i++;
      n--;
    }
    console.log(arr);
  }
  moveZerosToEnd(arr) {
    //Time complexity- Theta(n^2)
    let n = arr.length - 1;
    for (let i = 0; i <= n; i++) {
      if (arr[i] === 0) {
        for (let j = i + 1; j <= n; j++) {
          if (arr[j] !== 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            break;
          }
        }
      }
    }
    return console.log(arr);
  }
  moveZerosToEnd2(arr) {
    //Time complexity - Theta(n)
    let n = arr.length - 1;
    let count = 0;
    for (let i = 0; i <= n; i++) {
      if (arr[i] !== 0) {
        [arr[i], arr[count]] = [arr[count], arr[i]];
        count++;
      }
    }
    console.log(arr);
  }
  counterClockwise(arr) {
    let i = 0;
    let n = arr.length - 1;
    let FE = arr[0];
    for (i = 0; i < n; i++) {
      arr[i] = arr[i + 1];
    }
    arr[n] = FE;
    return console.log(arr);
  }
  maxIndexDiff(a, n) {
    // Time complexity - Theta(n^2)
    // your code here
    let max = 0;
    for (let i = 0; i < n - 1; i++) {
      for (let j = n - 1; j >= 0; j--) {
        if (a[i] <= a[j]) {
          let diff = j - i;
          if (max < diff) {
            max = diff;
          }
        }
      }
    }
    return console.log(max);
  }
  maxIndexDiff2(a, n) {
    // your code here
    let lArr = new Array(n);
    let rArr = new Array(n);

    lArr[0] = a[0];
    for (let i = 1; i < n; i++) {
      lArr[i] = Math.min(a[i], lArr[i - 1]);
    }
    console.log(lArr);

    rArr[n - 1] = a[n - 1];
    for (let j = n - 2; j >= 0; j--) {
      rArr[j] = Math.max(a[j], rArr[j + 1]);
    }
    console.log(rArr);

    let i = 0,
      j = 0;
    let max = 0;

    while (i < n && j < n) {
      if (lArr[i] <= rArr[j]) {
        max = Math.max(max, j - i);
        j++;
      } else {
        i++;
      }
    }
    return console.log(max);
  }
  largestAndSecondLargest(sizeOfArray, arr) {
    // code here
    let largest = arr[0];
    for (let i = 1; i < sizeOfArray; i++) {
      if (arr[i] >= largest) {
        largest = arr[i];
      }
    }
    let secLarge = -1;
    for (let j = 0; j < sizeOfArray; j++) {
      if (arr[j] > secLarge && arr[j] < largest) {
        secLarge = arr[j];
      }
    }
    return console.log(largest, secLarge);
  }
  median(A,N)
    {
       A.sort(function(a, b){return a - b});
       console.log(A)
       if(N%2 !== 0){
        return console.log(Math.floor(A[(N+1)/2]))
       }else{
           return console.log(Math.floor(Math.floor(A[N/2])+A[(N+1)/2])/2)
       }
    }
    checkRotatedAndSorted(arr, num)
    {
        // code here
        let breakPoint = 0;
        let sorted = false;
        for(let i=0;i<num;i++){
            let np = (i+1)%num;
            if(arr[i]>arr[np]){
                breakPoint++;
            }
            if(arr[i]<arr[np]){
                sorted = true;
            }
        }
        console.log(breakPoint);
        return console.log(sorted && breakPoint === 1);
    }
    arrange(arr, n){
        // code here
        let arrT = new Array(n);
        
        for(let i=0;i<n;i++){
            arrT[i] = arr[arr[i]];
        }
        arr = arrT;
        return console.log(arr.join(' '))
    }
    reverseInGroups(arr, n, k){
        // code here
        let g=Math.floor(n/k);
        let gc=0;
        let counter = 0;
        
        if(k===1) return console.log(arr);
        for(let i=0;i<n;i++){
            counter++;
            if(counter%k === 0){
                this.reverse(arr, (i+1)-k, counter-1);
                gc++;
            }
            if(gc === g){
                return this.reverse(arr,counter, n-1)
            }
        }
        return console.log(arr);
    
    }
    reverse(arr,s,e){
        while(s<e){
            [arr[s],arr[e]] = [arr[e],arr[s]]
            console.log([arr[s],arr[e]] = [arr[e],arr[s]]);
            console.log(s,e)
            e--;
            s++;
        }
        console.log(arr);
        return arr;
    }
    rotateArr(arr, d, n){
        // code here
        let dc=0;
        let i=0;
        while(i<n){
            [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
            console.log(arr);
            i++;
            
        }
        return console.log(arr)
    }
}

let ap = new arrayProblems();

// ap.largest([10,20,50,40]);
// ap.checkSorted([9])
// ap.arrReverse([10,20,30])
// ap.moveZerosToEnd2([2, 0, 0, 3, 0, 4]);
// ap.counterClockwise([1,2,3,4,5])
// ap.maxIndexDiff2([4, 8, 36, 9, 33, 80, 85, 90, 1], 9);
// ap.largestAndSecondLargest(9, [4, 8, 36, 9, 33, 80, 85, 90, 1]);
// ap.median([1, 2, 19, 28, 5],5)
// ap.checkRotatedAndSorted([1,5,1,1,10],5)
// ap.reverseInGroups([1,2,3,4,5],5,3)
// ap.arrange([4,0,2,1,3],5)
// ap.reverseInGroups([8,2,6,3,12,13,81,24,16],9,5)
ap.rotateArr([1,2,3,4,5],2,5);