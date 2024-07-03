class Problems {
  constructor(b) {
    this.BUCKET = b;
    this.table = new Array();
    for (let i = 0; i < b; i++) {
      this.table[i] = [];
    }
  }
  insert(x) {
    let i = x % this.BUCKET;
    this.table[i].push(x);
    console.log(this.table);
  }
  search(x) {
    let i = x % this.BUCKET;
    for (let j = 0; j < this.table[i].length; j++) {
      if (this.table[i][j] === x) {
        return console.log(true);
      }
    }
    return console.log(false);
  }
  remove(x) {
    let i = x % this.BUCKET;
    if (this.table[i].indexOf(x) === -1) return console.log(false);

    this.table[i].splice(this.table[i].indexOf(x), 1);
    return console.log(this.table);
  }
}

const ht = new Problems(7);
ht.insert(70);
ht.insert(71);
ht.insert(56);
ht.search(71);
ht.remove(56);
