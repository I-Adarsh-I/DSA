class simpleRecursion{
    simpleRec1(n){
        if(n === 0) return;
        console.log('Adarsh');
        this.simpleRec1(n-1);
    }
    rec2(n){
        if(n === 0) return;

        this.rec2(n-1);
        console.log(n);
        this.rec2(n-1);
    }
    rec3(n){
        if(n === 0) return;
        this.rec3(Math.floor(n/2));
        console.log(n%2);
    }
}
let rec = new simpleRecursion();
// rec.simpleRec1(3)
// rec.rec2(3)
rec.rec3(5)