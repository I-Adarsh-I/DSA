class Solution {
  quadraticRoots(a, b, c) {
    let d = b ** 2 - 4 * a * c;

    if (d > 0) {
      let root1 = (-b + Math.sqrt(d)) / (2 * a);
      let root2 = (-b - Math.sqrt(d)) / (2 * a);
      return console.log(`${root1}${root2}`);
    } else if (d === 0) {
      let root = -b / (2 * a);
      return console.log(`${root}${root}`);
    } else {
      return "No Real Roots";
    }
  }
}

let sol = new Solution();

sol.quadraticRoots(2, 8, 8);
