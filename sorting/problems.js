class sorting{
    bubbleSort(arr,n){
        for(let i=0;i<n;i++){
            let j=0;
            for(j=0;j<=n-i-1;j++){
                if(arr[j]>arr[j+1]){
                    [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                }
            }
        }
        console.log(arr.join(" "));
    }
    insertionSort(arr,N){
        for(let i=1;i<N;i++){
            let key = arr[i];
            let j = i-1;
            while(j>=0 && arr[j]>key){
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = key;
        }
        return console.log(arr);
    }
}
const sa = new sorting();
// sa.bubbleSort([10,8,20,5],4)
sa.insertionSort([10,8,20,5],4)