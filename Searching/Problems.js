class searchingProblems {
  binarySearch(arr, k) {
    let n = arr.length;
    let low = 0;
    let high = n - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (arr[mid] === k) {
        return console.log(`Element is in position- ${mid}`);
      } else if (arr[mid] > k) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return -1;
  }
  binarySearchRec(arr, k, low, high) {
    if (low > high) return console.log(`element not found`);
    console.log(low, high);
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === k) {
      return console.log(`${k} is in position- ${mid}`);
    } else if (arr[mid] < k) {
      this.binarySearchRec(arr, k, mid + 1, high);
    } else {
      this.binarySearchRec(arr, k, low, mid - 1);
    }
  }
  indexOfFirstOccurence(arr, n, k) {
    let i = 0;
    while (i < n) {
      if (arr[i] === k) {
        return console.log(i);
      } else {
        i++;
      }
    }
    return console.log("Item not found");
  }
  indexOfFirstOccurence2(arr, n, k) {
    let high = n - 1;
    let low = 0;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === k) {
        if (mid === 0 || arr[mid - 1] !== k) {
          return console.log(mid);
        } else {
          high = mid - 1;
        }
      } else if (arr[mid] > k) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return console.log("Item not found");
  }
  indexOfLastOccurence2(arr, n, k) {
    let high = n - 1;
    let low = 0;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === k) {
        if (mid === n - 1 || arr[mid + 1] !== k) {
          return console.log(mid);
        } else {
          low = mid + 1;
        }
      } else if (arr[mid] > k) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return console.log("Item not found");
  }
  occurencesInSortedArr(arr, n, k) {
    function firstOcc(arr, n, k){
      let high = n-1;
      let low = 0;
      let FI = -1;
      while(low<=high){
        let mid = Math.floor((high+low)/2)
        if(arr[mid] === k){
          FI = mid;
          high = mid-1;
        }else if(arr[mid]>k){
          high = mid-1;
        }else{
          low=mid+1;
        }
      }
      return FI
    }
    function secOcc(arr,n,k){
      let high = n-1;
      let low = 0;
      let LI = -1;
      while(low<=high){
        let mid = Math.floor((high+low)/2)
        if(arr[mid] === k){
          LI = mid;
          low = mid+1;
        }else if(arr[mid]>k){
          high = mid-1;
        }else{
          low=mid+1;
        }
      }
      return LI
    }

    let FI = firstOcc(arr,n,k);
    let LI = secOcc(arr, n, k);

    if(FI === -1){
      return 0;
    }
    return console.log(LI-FI+1)
  }
  squareOfNum(x){
    let low = 1;
    let high = x;
    let res = -1;
    while(low<=high){
      let mid = Math.floor((low+high)/2);
      if(mid*mid === x)return console.log(Math.floor(mid));
      else if(mid*mid > x) high = mid-1;
      else{
        low = mid+1;
        res = mid
      } 
    }
    return console.log(res)
  }
}
let sp = new searchingProblems();
// sp.binarySearch([10, 20, 30, 40, 50, 60, 70], 60);
// sp.binarySearchRec([10, 20, 30, 40, 50, 60, 70],10,0,6);
// sp.indexOfFirstOccurence2([10, 20, 30, 30, 30, 60, 70], 7, 30);
// sp.indexOfLastOccurence2([10, 20, 30, 30, 30, 60, 70], 7, 30);
// sp.occurencesInSortedArr([10, 20, 30, 30, 30, 60, 70], 7, 30);
sp.squareOfNum(10)