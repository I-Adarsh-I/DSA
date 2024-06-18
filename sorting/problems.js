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
    let high = n-1;
    let mid = Math.floor((low + high) / 2);
    let left = new Array();
    let right = new Array();

    for(let i=low;i<=mid;i++){
        left.push(arr[i]);
    }
    for(let i=mid+1;i<=high;i++){
        right.push(arr[i]);
    }

    let i=0;
    let j=0;
    let k=low;
    while(i<left.length && j<right.length){
        if(left[i]<=right[j]){
            arr[k] = left[i];
            i++;
            k++
        }else{
            arr[k] = right[j];
            j++;
            k++;
        }
    }
    while(i<mid-low+1){
        arr[k] = left[i]
        i++;
        k++
    }
    while(j<high-mid){
        arr[k] = right[j];
        j++;
        k++
    }
    console.log(left, right, arr)
  }
}
const sa = new sorting();
// sa.bubbleSort([10,8,20,5],4)
// sa.insertionSort([10, 8, 20, 5], 4);
sa.mergeSort([10,20,40,20,30],5)
