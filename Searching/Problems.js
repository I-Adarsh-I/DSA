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
    function firstOcc(arr, n, k) {
      let high = n - 1;
      let low = 0;
      let FI = -1;
      while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        if (arr[mid] === k) {
          FI = mid;
          high = mid - 1;
        } else if (arr[mid] > k) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      }
      return FI;
    }
    function secOcc(arr, n, k) {
      let high = n - 1;
      let low = 0;
      let LI = -1;
      while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        if (arr[mid] === k) {
          LI = mid;
          low = mid + 1;
        } else if (arr[mid] > k) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      }
      return LI;
    }

    let FI = firstOcc(arr, n, k);
    let LI = secOcc(arr, n, k);

    if (FI === -1) {
      return 0;
    }
    return console.log(LI - FI + 1);
  }
  squareOfNum(x) {
    let low = 1;
    let high = x;
    let res = -1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (mid * mid === x) return console.log(Math.floor(mid));
      else if (mid * mid > x) high = mid - 1;
      else {
        low = mid + 1;
        res = mid;
      }
    }
    return console.log(res);
  }
  findMissing(arr, n) {
    //code here
    arr = arr.sort(function (a, b) {
      return a - b;
    });
    let low = 0;
    let i = 1;
    console.log(arr)
    while (i < n) {
      if (arr[low] < 0) {
        low++;
        i++;
        console.log("1st loop- ",low);
      } else if (arr[low] + 1 === arr[i]) {
        low++;
        i++;
        console.log("if else loop-", low,i);
      } else {
        return console.log(arr[low] + 1);
      }
    }
    return console.log(arr[n - 1] + 1);
  }
}
let sp = new searchingProblems();
// sp.binarySearch([10, 20, 30, 40, 50, 60, 70], 60);
// sp.binarySearchRec([10, 20, 30, 40, 50, 60, 70],10,0,6);
// sp.indexOfFirstOccurence2([10, 20, 30, 30, 30, 60, 70], 7, 30);
// sp.indexOfLastOccurence2([10, 20, 30, 30, 30, 60, 70], 7, 30);
// sp.occurencesInSortedArr([10, 20, 30, 30, 30, 60, 70], 7, 30);
// sp.squareOfNum(10)
sp.findMissing([36, 27, -35, 43, -15, 36, 42, -1, -29, 12, -23, 40, 9, 13, -24, -10, -24, 22, -14, -39, 18, 17, -21, 32, -20, 12, -27, 17, -15, -21, -48, -28, 8, 19, 17, 43, 6, -39, -8, -21, 23, -29,-31, 34, -13, 48, -26, -35, 20, -37, -24, 41, 30, 6, 23, 12, 20, 46, 31, -45, -25, 34, -23, -14, -45, -4, -21, -37, 7, -26, 45, 32, -5, -36, 17, -16, 14, -7, 0 ,37, -42, 26, 28, 38], 84);
