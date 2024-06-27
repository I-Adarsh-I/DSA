class sorting {
  bubbleSort(arr, n) {
    for (let i = 0; i < n; i++) {
      let j = 0;
      for (j = 0; j <= n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    console.log(arr.join(" "));
  }
  insertionSort(arr, N) {
    for (let i = 1; i < N; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
    return console.log(arr);
  }
  mergeSort(arr, n) {
    let low = 0;
    let high = n - 1;
    let mid = Math.floor((low + high) / 2);
    let left = new Array();
    let right = new Array();

    for (let i = low; i <= mid; i++) {
      left.push(arr[i]);
    }
    for (let i = mid + 1; i <= high; i++) {
      right.push(arr[i]);
    }

    let i = 0;
    let j = 0;
    let k = low;
    let res = 0;
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        arr[k] = left[i];
        i++;
        k++;
      } else {
        arr[k] = right[j];
        res += left.length - i;
        console.log(res);
        j++;
        k++;
      }
    }
    while (i < left.lengh) {
      arr[k] = left[i];
      i++;
      k++;
    }
    while (j < right.length) {
      arr[k] = right[j];
      j++;
      k++;
    }
    console.log(left, right, arr);
  }
  inversions(arr, n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
      let j = i + 1;
      for (j = i + 1; j < n; j++) {
        if (i < j && arr[i] > arr[j]) {
          count++;
        }
      }
    }
    return console.log(count);
  }
  distinctEle(arr1, arr2) {
    arr1 = arr1.concat(arr2);
    arr1 = arr1.sort(function (a, b) {
      return a - b;
    });
    console.log(arr1);
    let n = arr1.length;
    let i = 0;
    let count = 0;
    while (i < n) {
      if (arr1[i] !== arr1[i + 1]) {
        count++;
      }
      i++;
    }
    return console.log(count);
  }
  printIntersection(arr1, arr2, N, M) {
    //your code here
    arr1 = arr1.concat(arr2);
    arr1 = arr1.sort(function (a, b) {
      return a - b;
    });

    let res = new Array();
    let i = 0;

    while (i < arr1.length) {
      if (arr1[i] === arr1[i + 1]) {
        res.push(arr1[i]);
      }
      i++;
    }

    if (res.length === 0) {
      return -1;
    }

    let distinctRes = [...new Set(res)];

    return console.log(distinctRes);
  }
  partition(arr, p, n) {
    let temp = new Array();

    [arr[p], arr[n - 1]] = [arr[n - 1], arr[p]];
    p = n - 1;

    for (let i = 0; i < n; i++) {
      if (arr[i] <= arr[p]) {
        temp.push(arr[i]);
      }
    }

    for (let i = 0; i < n; i++) {
      if (arr[i] > arr[p]) {
        temp.push(arr[i]);
      }
    }

    arr = temp;

    return console.log(arr);
  }

  lomutoPartition(arr, l, h) {
    let pivot = arr[h];
    let i = l - 1;
    for (let j = l; j < h; j++) {
      if (arr[j] < pivot) {
        j++;
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
    [arr[i + 1], arr[h]] = [arr[h], arr[i + 1]];
    return console.log(i + 1);
  }
  threeWayPartition(array, a, b) {
    //your code here
    let s = 0;
    let e = array.length - 1;

    function partition(arr, s, e, a, b) {
      for (let i = 0; i < e; i++) {
        if (arr[i] < a) {
          [arr[i], arr[s]] = [arr[s], arr[i]];
          s++;
        } else {
          [arr[i], array[e]] = [arr[e], arr[i]];
          e--;
        }
      }
      console.log(arr);
    }

    const partitionArr = partition(array, s, e, a, b);
    if (partitionArr === array) {
      return console.log(0);
    } else {
      return console.log(1);
    }
  }
  quickSort(arr, low, high) {
    function partition(arr, low, high) {
      let pivot = arr[high];
      let j = low - 1;
      for (let i = low; i < high; i++) {
        if(arr[i] < pivot){
          j++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
      [arr[j+1], arr[high]] = [arr[high], arr[j+1]];
      return j+1;
    }
    if(low<high){
      let p = partition(arr, low, high);
      arr = this.quickSort(arr, low, p-1);
      arr = this.quickSort(arr, p+1, high);
    }
    return arr;
  }
}
const sa = new sorting();
// sa.bubbleSort([10,8,20,5],4)
// sa.insertionSort([10, 8, 20, 5], 4);
sa.mergeSort([2,4,1,3,5], 5);
// sa.inversions([50,40,30,20,10],5);
// sa.distinctEle([3,3,3],[3,3,3,3])
// sa.printIntersection([1,2],[3,4],2,2)
// sa.partition([5, 13, 6, 9, 12, 8, 11], 5, 7);
// sa.threeWayPartition([1,2,3,3,4],1,2)
// console.log(sa.quickSort([2,4,1,3,5], 0, 4))
